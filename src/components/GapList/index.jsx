import React from 'react';
import cc from 'classcat';
import PropTypes from 'prop-types';

export const SIZES = ['xs', 's', 'm', 'l', 'xl'];

const GapList = ({ items, xGap = 'm', yGap = 'm', valign = 'top' }) => (
  <div
    style={{ margin: `calc(var(--space-${yGap}) * -1) calc(var(--space-${xGap}) * -1)` }}
  >
    {items.map((item, i) => (
      <div
        key={i}
        className={cc([
          'display--inlineBlock',
          `valign--${valign}`,
          `margin--x--${xGap}`,
          `margin--y--${yGap}`,
        ])}
      >
        {item}
      </div>
    ))}
  </div>
);

GapList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, PropTypes.string]))
    .isRequired,
  xGap: PropTypes.oneOf(SIZES),
  /** Applies vertical margin given the FDS spacing scale */
  yGap: PropTypes.oneOf(SIZES),
  /** Nodes to render */
  /** Controls vertical-align property */
  valign: PropTypes.string,
  /** Applies horiztonal margin given the FDS spacing scale */
};

export default GapList;
