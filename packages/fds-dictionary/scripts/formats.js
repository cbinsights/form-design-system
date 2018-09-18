const fs = require('fs');
const Handlebars = require('handlebars');

Handlebars.registerHelper('json', (c) => JSON.stringify(c, null, 2));

const template = Handlebars.compile(fs.readFileSync(`./doc/index.hbs`).toString());

/**
 * For whatever reason, style-dictionary uses high decimal precision
 * on HSLA colors. This function rounds 'em up.
 * @param {Object} hsl
 * @returns {String} CSS hsla value
 */
const toHsla = (hsl) => {
  const H = parseInt(hsl.h, 10);
  const S = parseInt(hsl.s, 10);
  const L = parseInt(hsl.l, 10);
  const A = parseInt(hsl.a, 10);
  return `hsla(${H},${S},${L},${A})`;
};

/**
 * @param {Array} dictionary style-dictionary dictionary
 * @return {String} html file
 */
const formatHtmlDoc = (dictionary) => {
  const colors = dictionary.allProperties
    .filter((p) => p.attributes.category === 'color')
    .map((p) => {
      const { hex, rgb, hsl, varNames } = p.attributes;

      return {
        name: p.name,
        varNames,
        values: {
          calculated: p.value,
          hex,
          rgba: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`,
          hsla: toHsla(hsl),
        },
      };
    });

  return template({
    properties: {
      colors,
    },
  });
};

/**
 * @param {Array} dictionary style-dicitonary dictionary
 * @return {String} js file with commonJS exports
 */
const formatCommonJs = (dictionary) =>
  dictionary.allProperties
    .filter((prop) => prop.attributes.category !== 'font') // encourage CSS classes for type styles
    .map((prop) => `exports.${prop.name} = '${prop.value}';`)
    .join('\n');

// Custom formats
module.exports = [
  {
    name: 'html/doc',
    formatter: formatHtmlDoc,
  },
  {
    name: 'javascript/commonJs',
    formatter: formatCommonJs,
  },
];
