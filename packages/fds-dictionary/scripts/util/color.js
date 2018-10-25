const Color = require('tinycolor2');

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
  const adjust = {
    spin: 0.5,
    desaturate: 0.75,
    lighten: color.isDark() ? 9 : 5,
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
  const adjust = {
    spin: -1,
    saturate: 1.5,
    darken: color.isLight() ? 11 : 5.25,
  };
  return color
    .spin(adjust.spin * level)
    .saturate(adjust.saturate * level)
    .darken(adjust.darken * level)
    .toHexString();
};
