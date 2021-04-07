import React from 'react';
import cc from 'classcat';
import PropTypes from 'prop-types';

/**
 * @description map of alignment prop values to class names
 */
export const DirectionPropMap = {
  row: 'flex--row',
  column: 'flex--column',
};

/**
 * @description valid breakpoint values
 */
export const SwitchDirectionProps = ['xs', 's', 'm', 'l', 'xl'];

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
const Flex = ({
  align = 'stretch',
  direction = 'row',
  switchDirection: breakpoint,
  reverse,
  justify,
  noGutters,
  children,
}) => {
  const classNames = cc([
    'flex',
    AlignPropMap[align],
    DirectionPropMap[direction],
    {
      [`${breakpoint}:flex--${direction === 'row' ? 'column' : 'row'}`]: breakpoint,
    },
    {
      'flex--reverse': reverse,
    },
    {
      [JustifyPropMap[justify]]: justify,
    },
    {
      'flex--noGutters': noGutters,
    },
  ]);

  return <div className={classNames}>{children}</div>;
};

Flex.propTypes = {
  /** sets flex-direction (along with either 100% height or width) */
  direction: PropTypes.oneOf(Object.keys(DirectionPropMap)),

  /** switches flex-direction at a given breakpoint */
  switchDirection: PropTypes.oneOf(SwitchDirectionProps),

  /** sets standard justify-content */
  justify: PropTypes.oneOf(Object.keys(JustifyPropMap)),

  /** sets standard align-items */
  align: PropTypes.oneOf(Object.keys(AlignPropMap)),

  /** When set, gutters are removed from `FlexItem` children */
  noGutters: PropTypes.bool,

  /** When set, `FlexItem` order is rendered in reverse */
  reverse: PropTypes.bool,

  /** React children (should be of type `FlexItem`) */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
};

export default Flex;
