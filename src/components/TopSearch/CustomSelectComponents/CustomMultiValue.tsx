import React from 'react';
import { components, MultiValueProps } from 'react-select';
import { SelectProps } from '../Search';
import CustomSelectedValue from './CustomSelectedValue';

const CustomMultiValue = (props: MultiValueProps<SelectProps, true>): JSX.Element => (
  <components.MultiValue {...props}>
    <CustomSelectedValue item={props.data} selectProps={props.selectProps} />
  </components.MultiValue>
);

export default CustomMultiValue;
