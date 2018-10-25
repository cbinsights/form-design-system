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
 * @param {String} base color to adjust
 * @param {Number} level 1-5 level of adjustment
 */
exports.materialTint = (base, level) => {
  const color = Color(base);

  // Scale the lightening adjustment based on brightness
  // of base color - darker colors can be lightened more.
  //
  // The numbers in the range are essentially defining a curve
  // for handling dark to light colors
  const scale = d3
    .scaleQuantize()
    .domain([0, 255])
    .range([15, 12, 10, 9, 8, 7, 6, 5, 4, 3]);

  const adjust = {
    spin: 0.5,
    desaturate: 0.75,
    lighten: scale(color.getBrightness()),
  };

  return color
    .spin(adjust.spin * level)
    .desaturate(adjust.desaturate * level)
    .lighten(adjust.lighten * level)
    .toHexString();
};

/**
 * @param {String} base color to adjust
 * @param {Number} level 1-5 level of adjustment
 */
exports.materialShade = (base, level) => {
  const color = Color(base);

  // Scale the lightening adjustment based on brightness
  // of base color - lighter colors can be darkened more
  //
  // The numbers in the range are essentially defining a curve
  // for handling dark to light colors
  const scale = d3
    .scaleQuantize()
    .domain([0, 255])
    .range([3, 3, 3.5, 4, 4, 4, 5.5, 7, 8, 10, 10, 12, 16, 18]);

  console.info(
    `${color.toHexString()} | ${color.getBrightness()} | ${scale(color.getBrightness())}`
  );

  const adjust = {
    spin: -1,
    saturate: 1,
    darken: scale(color.getBrightness()),
  };

  return color
    .spin(adjust.spin * level)
    .saturate(adjust.saturate * level)
    .darken(adjust.darken * level)
    .toHexString();
};
