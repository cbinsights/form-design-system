const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const { buildConfig } = require('./icons.config');
const SVGO = require('svgo');
const { svgoOptions, svgoPlugins } = require('./helpers/svgoConfig');

if (!fs.existsSync(buildConfig.docs.output)) {
  fs.mkdirSync(buildConfig.docs.output);
}

const processFile = async (filepath) => {
  const iconName = path.basename(filepath, '.svg');
  const svgo = new SVGO({
    ...svgoOptions,
    plugins: [...svgoPlugins, { cleanupIDs: { prefix: iconName } }],
  });

  const optimized = await fs.promises
    .readFile(filepath)
    .then((svg) => svgo.optimize(svg, { filepath }));

  return {
    name: iconName,
    svg: optimized.data,
  };
};

glob(`${buildConfig.docs.input}/*.svg`, {}, async (error, files) => {
  const svgDefs = files.map(processFile);
  Promise.all(svgDefs).then((defs) => {
    const content = `module.exports = ${JSON.stringify(defs, null, 2)};`;
    fs.writeFileSync(`${buildConfig.docs.output}/iconManifest.tsx`, content);
  });
});
