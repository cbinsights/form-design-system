import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

export const VALID_BG_NORMAL = ['white', 'haze', 'lightGray'];

export const VALID_BG_INVERTED = ['navy'];

export const VALID_PADDING = ['default', 'double', 'half', 'none'];

/**
 * @param {String} axis 'x' or 'y'
 * @param {String} amount
 * @returns {String} padding utility classes
 */
export const getPaddingClasses = (axis, amount) => {
  const sides = axis === 'x' ? ['left', 'right'] : ['top', 'bottom'];

  let classes = `padding--${sides[0]} padding--${sides[1]}`;
  if (amount !== 'default') {
    classes = `padding--${sides[0]}--${amount} padding--${sides[1]}--${amount}`;
  }

  return classes;
};

/**
 * @param {String} direction
 * @returns {String} border utility classes
 */
export const getBorderClasses = (direction) => {
  let classes = '';
  switch (direction) {
    case 'x':
      classes = 'border--left border--right';
      break;
    case 'y':
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
const Section = ({ xPadding, yPadding, bgColor, border, children }) => {
  const classNames = cx(
    `bgColor--${bgColor}`,
    'display--block',
    getPaddingClasses('x', xPadding),
    getPaddingClasses('y', yPadding),
    {
      inverted: VALID_BG_INVERTED.includes(bgColor),
      [getBorderClasses(border)]: Boolean(border),
    }
  );
  const styles = {
    backgroundClip: 'border-box',
  };

  return (
    <div style={styles} className={classNames}>
      {children}
    </div>
  );
};

Section.defaultProps = {
  xPadding: 'default',
  yPadding: 'default',
  bgColor: 'white',
};

Section.propTypes = {
  /** React children */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),

  /** Padding for left and right sides */
  xPadding: PropTypes.oneOf(VALID_PADDING),

  /** Padding for top and bottom sides */
  yPadding: PropTypes.oneOf(VALID_PADDING),

  /**
   * Background color.
   * Type classes (e.g. color--primary)  will automatically invert for dark backgrounds.
   */
  bgColor: PropTypes.oneOf([...VALID_BG_NORMAL, ...VALID_BG_INVERTED]),

  /**
   * Adds border to given side(s).
   * `x` adds border to both left and right.
   * `y` adds border to both top and bottom.
   */
  border: PropTypes.oneOf(['top', 'right', 'bottom', 'left', 'x', 'y', 'all']),
};

export default Section;
