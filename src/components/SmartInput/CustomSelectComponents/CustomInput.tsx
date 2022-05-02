import React from 'react';
import { components, InputProps } from 'react-select';
import { OptionProps } from '..';

const CustomInput = (props: InputProps<OptionProps>): JSX.Element => (
  <components.Input {...props} isHidden={false} />
);

export default CustomInput;
