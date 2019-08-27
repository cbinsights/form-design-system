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
  d3[scaleType]()
    .domain([0, 255])
    .range(r)(Color(color).getBrightness());

/**
 * Get a value from a range based on color saturation
 *
 * @param {String} color hex color string
 * @param {Array} r range to map to color saturation (0-1)
 * @returns {Number}
 */
const satScale = (color, r) =>
  d3
    .scaleLinear()
    .domain([0, 1])
    .range(r)(Color(color).toHsl().s);

/**
 * @param {String} base color to adjust
 * @param {Number} level 1-5 level of adjustment
 * @returns {String} adjusted color as hex string
 */
exports.materialTint = (base, level) => {
  const adjust = {
    spin: 0.75,
    desaturate: satScale(base, [0.5, 1.5]),
    lighten: brightScale(base, [12, 1.5]),
  };

  return Color(base)
    .spin(adjust.spin * level)
    .desaturate(adjust.desaturate * level)
    .lighten(adjust.lighten * level)
    .toHexString();
};

/**
 * @param {String} base color to adjust
 * @param {Number} level 1-5 level of adjustment
 * @returns {String} adjusted color as hex string
 */
exports.materialShade = (base, level) => {
  const adjust = {
    spin: -1.25,
    saturate: satScale(base, [0.75, 2]),
    darken: brightScale(
      base,
      /*
      * darkening colors can be tricky, so we're using a custom curve
      * here instead of a straight range function
      */
      [3, 3, 3, 4, 4, 4, 7, 8, 10, 10, 12, 15, 17],
      'scaleQuantize'
    ),
  };

  return Color(base)
    .spin(adjust.spin * level)
    .saturate(adjust.saturate * level)
    .darken(adjust.darken * level)
    .toHexString();
};

/**
 * @param {String} base color from which to generate accent colors
 * @returns {Object} material palette accent colors (A100-A700)
 */
exports.getMaterialAccents = (base) => ({
  A100: Color(base)
    .lighten(brightScale(base, [42, 8]))
    .saturate(satScale(base, [5, 10]))
    .toHexString(),
  A200: Color(base)
    .lighten(brightScale(base, [8, 2]))
    .saturate(satScale(base, [5, 20]))
    .toHexString(),
  A400: Color(base)
    .darken(brightScale(base, [8, 10]))
    .saturate(satScale(base, [10, 25]))
    .toHexString(),
  A700: Color(base)
    .darken(brightScale(base, [12, 20]))
    .saturate(satScale(base, [15, 36]))
    .toHexString(),
});

/**
 * @param {String} base color from which get R,G,B components
 * @returns {Object} channel values by key
 */
exports.getRgbComponents = (color) => Color(color).toRgb();
