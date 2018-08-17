import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import childrenOfType from '../../util/propValidation';

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
  flexEnd: 'flex--justifyEnd',
  center: 'flex--justifyCenter',
  spaceBetween: 'flex--justifySpaceBetween',
  spaceAround: 'flex--justifySpaceAround',
};

/**
 * @description map of align prop values to class names
 */
const AlignPropMap = {
  flexStart: 'flex--alignStart',
  center: 'flex--alignCenter',
  flexEnd: 'flex--alignEnd',
};

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const Flex = (props) => {
  const classNames = cx(
    'flex',
    DirectionPropMap[props.direction],
    {
      [`flex--${props.direction}--reverse`]: props.reverse,
    },
    {
      [JustifyPropMap[props.justify]]: props.justify,
      [AlignPropMap[props.align]]: props.align,
    },
    {
      'flex--wrap': props.wrap,
      'flex--noGutters': props.noGutters,
    },
    props.className
  );

  return <div className={classNames}>{props.children}</div>;
};

Flex.defaultProps = {
  direction: 'row',
  noGutters: false,
};

Flex.propTypes = {
  direction: PropTypes.oneOf(Object.keys(DirectionPropMap)),
  justify: PropTypes.oneOf(Object.keys(JustifyPropMap)),
  align: PropTypes.oneOf(Object.keys(AlignPropMap)),
  noGutters: PropTypes.bool,
  wrap: PropTypes.bool,
  reverse: PropTypes.bool,
  className: PropTypes.string,
  children: childrenOfType(['FlexItem']),
};

export default Flex;
