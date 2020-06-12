import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const spacingScale = (num) => {
  switch (num) {
    case 1:
      return 4;
    case 2:
      return 8;
    case 3:
      return 16;
    case 4:
      return 24;
    case 5:
      return 32;
    default:
      return 16;
  }
};

const GapList = ({ items, xGap = 2, yGap = 2, valign = 'top' }) => (
  <div style={{ margin: `-${spacingScale(yGap)}px -${spacingScale(xGap)}px` }}>
    {items.map((item, i) => (
      <div
        key={i}
        className={cx(
          'display--inlineBlock',
          `valign--${valign}`,
          `margin--x--${xGap}`,
          `margin--y--${yGap}`
        )}
      >
        {item}
      </div>
    ))}
  </div>
);

const steps = ['1', '2', '3', '4', '5'];

GapList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, PropTypes.string]))
    .isRequired,
  xGap: PropTypes.oneOf(steps),
  /** Applies vertical margin given the FDS spacing scale */
  yGap: PropTypes.oneOf(steps),
  /** Nodes to render */
  /** Controls vertical-align property */
  valign: PropTypes.string,
  /** Applies horiztonal margin given the FDS spacing scale */
};

export default GapList;
