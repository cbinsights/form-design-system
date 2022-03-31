import React from 'react';
import { components, MultiValueProps } from 'react-select';
import { OptionProps } from '..';
import CustomSelectedValue from './CustomSelectedValue';

const CustomMultiValue = (props: MultiValueProps<OptionProps, true>): JSX.Element => (
  <components.MultiValue {...props}>
    <CustomSelectedValue item={props.data} selectProps={props.selectProps} />
  </components.MultiValue>
);

export default CustomMultiValue;
