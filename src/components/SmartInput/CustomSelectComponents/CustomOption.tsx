import React from 'react';
import { components, OptionProps as OptionComponentProps } from 'react-select';
import { OptionProps } from '..';

const CustomOption = (props: OptionComponentProps<OptionProps, true>): JSX.Element => {
  const innerProps = { ...props.innerProps, role: 'option' };
  return <components.Option {...props} innerProps={innerProps} />;
};

export default CustomOption;
