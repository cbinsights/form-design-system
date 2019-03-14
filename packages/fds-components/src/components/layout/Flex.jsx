import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

/**
 * @description map of alignment prop values to class names
 */
const DirectionPropMap = {
  row: 'flex--row',
  column: 'flex--column',
};

/**
 * @description map of justify prop values to class names
 */
const JustifyPropMap = {
  end: 'flex--justifyEnd',
  center: 'flex--justifyCenter',
  spaceBetween: 'flex--justifySpaceBetween',
  spaceAround: 'flex--justifySpaceAround',
};

/**
 * @description map of align prop values to class names
 */
const AlignPropMap = {
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
    },
    props.className
  );

  return (
    <div className={classNames} data-test={props.dataTest}>
      {props.children}
    </div>
  );
};

Flex.defaultProps = {
  direction: 'row',
  align: 'stretch',
  dataTest: '',
};

Flex.propTypes = {
  direction: PropTypes.oneOf(Object.keys(DirectionPropMap)),
  justify: PropTypes.oneOf(Object.keys(JustifyPropMap)),
  align: PropTypes.oneOf(Object.keys(AlignPropMap)),

  /** When set, gutters are removed from `FlexItem` children */
  noGutters: PropTypes.bool,

  /** When set, `FlexItem` children are allowed to wrap */
  wrap: PropTypes.bool,

  /** When set, `FlexItem` order is rendered in reverse */
  reverse: PropTypes.bool,

  /** Classes to pass to flex parent */
  className: PropTypes.string,

  /** React children (should be of type `FlexItem`) */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,

  /** dataTest to pass to flex parent */
  dataTest: PropTypes.string,
};

export default Flex;
