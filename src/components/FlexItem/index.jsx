import React from 'react';
import cc from 'classcat';
import PropTypes from 'prop-types';

/**
 * @description map of justify prop values to class names
 */
const JustifyPropMap = {
  start: 'flexItem--justifyStart',
  end: 'flexItem--justifyEnd',
  center: 'flexItem--justifyCenter',
  spaceBetween: 'flexItem--justifySpaceBetween',
  spaceAround: 'flexItem--justifySpaceAround',
};

/**
 * @description map of align prop values to class names
 */
const AlignPropMap = {
  start: 'flexItem--alignStart',
  end: 'flexItem--alignEnd',
  center: 'flexItem--alignCenter',
};

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const FlexItem = ({ shrink = false, justify, align, children }) => {
  if (!children) return null;
  const classNames = cc([
    {
      'flexItem--shrink': shrink,
    },
    {
      [JustifyPropMap[justify]]: justify,
      [AlignPropMap[align]]: align,
    },
    'flexItem',
  ]);

  return <div className={classNames}>{children}</div>;
};

FlexItem.propTypes = {
  /** Sets standard justify-content */
  justify: PropTypes.oneOf(Object.keys(JustifyPropMap)),

  /** Sets standard align-items */
  align: PropTypes.oneOf(Object.keys(AlignPropMap)),

  /** When set, the `FlexItem` will shrink to content size */
  shrink: PropTypes.bool,

  /** React children */
  children: PropTypes.node,
};

export default FlexItem;
