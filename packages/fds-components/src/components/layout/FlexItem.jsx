import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

/**
 * @description map of justify prop values to class names
 */
const JustifyPropMap = {
  flexEnd: 'flexItem--justifyEnd',
  center: 'flexItem--justifyCenter',
  spaceBetween: 'flexItem--justifySpaceBetween',
  spaceAround: 'flexItem--justifySpaceAround',
};

/**
 * @description map of align prop values to class names
 */
const AlignPropMap = {
  flexStart: 'flexItem--alignStart',
  center: 'flexItem--alignCenter',
  flexEnd: 'flexItem--alignEnd',
};

/**
 * This is the `FlexItem` description.
 *
 * @example ./Flex-FlexItem.md
 *
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
    },
    props.classNames
  );

  return <div className={classNames}>{props.children}</div>;
};

FlexItem.defaultProps = {
  shrink: false,
};

FlexItem.propTypes = {
  justify: PropTypes.oneOf(Object.keys(JustifyPropMap)),
  align: PropTypes.oneOf(Object.keys(AlignPropMap)),

  /** When set, the `FlexItem` will shrink to content size */
  shrink: PropTypes.bool,

  /** Classes to pass to flex child */
  classNames: PropTypes.string,

  /** React children */
  children: PropTypes.node,
};

export default FlexItem;
