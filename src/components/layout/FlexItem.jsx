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
    {
      'flexItem--shrink': props.shrink,
    },
    {
      [JustifyPropMap[props.justify]]: props.justify,
      [AlignPropMap[props.align]]: props.align,
    }
  );

  return <div className={classNames}>{props.children}</div>;
};

FlexItem.defaultProps = {
  shrink: false,
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
