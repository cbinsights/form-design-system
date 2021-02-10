const Color = require('tinycolor2');
const d3 = require('d3-scale');

/**
 * For whatever reason, style-dictionary uses high decimal precision
 * on HSLA colors. This function rounds 'em up.
 * @param {Object} hsl
 * @returns {String} CSS hsla value
 */
exports.toHsla = (hsl) => {
  const H = parseInt(hsl.h, 10);
  const S = parseInt(hsl.s, 10);
  const L = parseInt(hsl.l, 10);
  const A = parseInt(hsl.a, 10);
  return `hsla(${H},${S},${L},${A})`;
};

/**
 * Get a value from a range based on color brightness
 *
 * @param {String} color hex color string
 * @param {Array} r range to map to color brightness (0-255)
 * @param {string} scaleType optional scale type
 * @returns {Number}
 */
const brightScale = (color, r, scaleType = 'scaleLinear') =>
  d3[scaleType]().domain([0, 255]).range(r)(Color(color).getBrightness());

/**
 * Get a value from a range based on color saturation
 *
 * @param {String} color hex color string
 * @param {Array} r range to map to color saturation (0-1)
 * @returns {Number}
 */
const satScale = (color, r) =>
  d3.scaleLinear().domain([0, 1]).range(r)(Color(color).toHsl().s);

/**
 * @param {String} base color from which get R,G,B components
 * @returns {Object} channel values by key
 */
exports.getRgbComponents = (color) => Color(color).toRgb();
