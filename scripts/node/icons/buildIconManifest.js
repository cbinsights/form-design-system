const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const { buildConfig } = require('./icons.config');
const { optimize } = require('svgo');

if (!fs.existsSync(buildConfig.docs.output)) {
  fs.mkdirSync(buildConfig.docs.output);
}

const processFile = async (filepath) => {
  const iconName = path.basename(filepath, '.svg');

  const optimized = await fs.promises
    .readFile(filepath)
    .then((svg) => optimize(svg, { path: filepath, multipass: true }));

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
