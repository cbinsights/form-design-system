import React from 'react';
import cx from 'classnames';
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
const FlexItem = (props) => {
  const classNames = cx(
    'flexItem',
    AlignPropMap[props.align],
    JustifyPropMap[props.justify],
    {
      'flexItem--shrink': props.shrink,
    },
    props.className
  );

  return <div className={classNames}>{props.children}</div>;
};

FlexItem.defaultProps = {
  shrink: false,
  align: 'start',
  justify: 'start',
};

FlexItem.propTypes = {
  justify: PropTypes.oneOf(Object.keys(JustifyPropMap)),
  align: PropTypes.oneOf(Object.keys(AlignPropMap)),

  /** When set, the `FlexItem` will shrink to content size */
  shrink: PropTypes.bool,

  /** Classes to pass to flex child */
  className: PropTypes.string,

  /** React children */
  children: PropTypes.node,
};

export default FlexItem;
