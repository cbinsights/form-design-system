import React from 'react';
import cc from 'classcat';

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

export interface FlexItemProps {
  /** Sets standard justify-content */
  justify?: 'start' | 'end' | 'center' | 'spaceBetween' | 'spaceAround';

  /** Sets standard align-items */
  align?: 'start' | 'end' | 'center';

  /** When set, the `FlexItem` will shrink to content size */
  shrink?: boolean;

  /** React children */
  children?: React.ReactNode;
}

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const FlexItem = ({
  shrink = false,
  justify,
  align,
  children,
}: FlexItemProps): JSX.Element => {
  const classNames = cc([
    align && AlignPropMap[align],
    justify && JustifyPropMap[justify],
    {
      'flexItem--shrink': shrink,
    },
    'flexItem',
  ]);

  return <div className={classNames}>{children}</div>;
};

export default FlexItem;
