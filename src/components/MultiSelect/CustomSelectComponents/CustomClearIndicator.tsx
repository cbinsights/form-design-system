import React from 'react';
import { ClearIndicatorProps, components } from 'react-select';
import DenyIcon from 'icons/react/DenyIcon';
import { OptionProps } from '..';

const CustomClearIndicator = (
  props: ClearIndicatorProps<OptionProps, true>
): JSX.Element => {
  const innerProps = { ...props.innerProps, role: 'button', 'aria-hidden': false };
  return (
    <components.ClearIndicator {...props} innerProps={innerProps}>
      <span data-testid="pointer" className={`margin--x--s pointer`}>
        <DenyIcon size="xs" />
      </span>
    </components.ClearIndicator>
  );
};

export default CustomClearIndicator;
