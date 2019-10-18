import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

/**
 * @description map of alignment prop values to class names
 */
export const DirectionPropMap = {
  row: 'flex--row',
  column: 'flex--column',
};

/**
 * @description map of justify prop values to class names
 */
export const JustifyPropMap = {
  end: 'flex--justifyEnd',
  center: 'flex--justifyCenter',
  spaceBetween: 'flex--justifySpaceBetween',
  spaceAround: 'flex--justifySpaceAround',
};

/**
 * @description map of align prop values to class names
 */
export const AlignPropMap = {
  start: 'flex--alignStart',
  end: 'flex--alignEnd',
  center: 'flex--alignCenter',
  stretch: 'flex--alignStretch',
};

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const Flex = (props) => {
  const classNames = cx(
    'flex',
    AlignPropMap[props.align],
    DirectionPropMap[props.direction],
    {
      [`flex--${props.direction}--reverse`]: props.reverse,
    },
    {
      [JustifyPropMap[props.justify]]: props.justify,
    },
    {
      'flex--wrap': props.wrap,
      'flex--noGutters': props.noGutters,
    }
  );

  return <div className={classNames}>{props.children}</div>;
};

Flex.defaultProps = {
  direction: 'row',
  align: 'stretch',
};

Flex.propTypes = {
  /** sets flex-direction (along with either 100% height or width) */
  direction: PropTypes.oneOf(Object.keys(DirectionPropMap)),

  /** sets standard justify-content */
  justify: PropTypes.oneOf(Object.keys(JustifyPropMap)),

  /** sets standard align-items */
  align: PropTypes.oneOf(Object.keys(AlignPropMap)),

  /** When set, gutters are removed from `FlexItem` children */
  noGutters: PropTypes.bool,

  /** When set, `FlexItem` children are allowed to wrap */
  wrap: PropTypes.bool,

  /** When set, `FlexItem` order is rendered in reverse */
  reverse: PropTypes.bool,

  /** React children (should be of type `FlexItem`) */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
};

export default Flex;
