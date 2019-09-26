import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

export const VALID_BG_NORMAL = ['white', 'haze', 'lightGray'];

export const VALID_BG_INVERTED = ['navy'];

export const VALID_PADDING = ['default', 'double', 'half', 'none'];

/**
 * @param {String} axis 'h' or 'v'
 * @param {String} amount
 * @returns {String} padding utility classes
 */
export const getPaddingClasses = (axis, amount) => {
  const sides = axis === 'h' ? ['left', 'right'] : ['top', 'bottom'];
  return `padding--${sides[0]}--${amount} padding--${sides[1]}--${amount}`;
};

/**
 * @param {String} direction
 * @returns {String} border utility classes
 */
export const getBorderClasses = (direction) => {
  let classes = '';
  switch (direction) {
    case 'all':
      classes = 'border--all';
      break;
    case 'h':
      classes = 'border--left border--right';
      break;
    case 'v':
      classes = 'border--top border--bottom';
      break;
    default:
      classes = `border--${direction}`;
  }
  return classes;
};

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const Section = ({ hPadding, vPadding, bgColor, elevation, border, children }) => {
  const classNames = cx(`bcColor--${bgColor}`, {
    inverted: VALID_BG_INVERTED.includes(bgColor),
    [`elevation--${elevation}`]: Boolean(elevation),
    [getBorderClasses(border)]: Boolean(border),
    [getPaddingClasses('h', hPadding)]: hPadding !== 'default',
    [getPaddingClasses('v', vPadding)]: vPadding !== 'default',
    'padding--left padding--right': hPadding === 'default',
    'padding--top padding--bottom': vPadding === 'default',
  });

  return <div className={classNames}>{children}</div>;
};

Section.defaultProps = {
  hPadding: 'default',
  vPadding: 'default',
  bgColor: 'white',
};

Section.propTypes = {
  /** React children */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),

  /** Padding for left and right sides */
  hPadding: PropTypes.oneOf(VALID_PADDING),

  /** Padding for top and bottom sides */
  vPadding: PropTypes.oneOf(VALID_PADDING),

  /**
   * Background color.
   * Type classes (e.g. color--primary)  will automatically invert for dark backgrounds.
   **/
  bgColor: PropTypes.oneOf([...VALID_BG_NORMAL, ...VALID_BG_INVERTED]),

  /**
   * Elevation shadow by height
   * See also: https://cbinsights.github.io/form-design-system/fds-styles/#elevationShadows
   **/
  elevation: PropTypes.oneOf([1, 2, 3, 4, 5]),

  /**
   * Adds border to given side(s).
   * `h` adds border to both left and right.
   * `v` adds border to both top and bottom.
   */
  border: PropTypes.oneOf(['top', 'right', 'bottom', 'left', 'h', 'v', 'all']),
};

export default Section;
