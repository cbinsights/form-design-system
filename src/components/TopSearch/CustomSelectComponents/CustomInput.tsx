import React from 'react';
import { components, InputProps } from 'react-select';
import { SelectProps } from '../Search';

const CustomInput = (props: InputProps<SelectProps, true>): JSX.Element => (
  <components.Input {...props} isHidden={false} />
);

export default CustomInput;
