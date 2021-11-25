import React from 'react';
import cc from 'classcat';
import { FlexItemProps } from '../FlexItem';

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

export interface FlexProps {
  /** sets flex-direction (along with either 100% height or width) */
  direction?: 'row' | 'column';

  /** switches flex-direction at a given breakpoint */
  switchDirection?: 'xs' | 's' | 'm' | 'l' | 'xl';

  /** sets standard justify-content */
  justify?: 'end' | 'center' | 'spaceBetween' | 'spaceAround';

  /** sets standard align-items */
  align?: 'start' | 'end' | 'center' | 'stretch';

  /** When set, gutters are removed from `FlexItem` children */
  noGutters?: boolean;

  /** When set, `FlexItem` order is rendered in reverse */
  reverse?: boolean;

  /** React children (should be of type `FlexItem`) */
  children: React.ReactElement<FlexItemProps> | Array<React.ReactElement<FlexItemProps>>;
}

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
}: FlexProps): JSX.Element => {
  const classNames = cc([
    'flex',
    AlignPropMap[align],
    DirectionPropMap[direction],
    justify && JustifyPropMap[justify],
    {
      [`${breakpoint}:flex--${direction === 'row' ? 'column' : 'row'}`]: breakpoint,
    },
    {
      'flex--reverse': reverse,
    },
    {
      'flex--noGutters': noGutters,
    },
  ]);

  return <div className={classNames}>{children}</div>;
};

export default Flex;
