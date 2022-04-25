import React from 'react';
import { OptionProps } from '..';
import { components, SingleValueProps } from 'react-select';

const CustomSingleValue = (
  props: SingleValueProps<OptionProps, boolean>
): JSX.Element => {
  const { hideSelectedItems } = props.selectProps;
  if (hideSelectedItems) return <></>;
  return (
    <components.SingleValue {...props}>
      {props.data.value || props.data.text}
    </components.SingleValue>
  );
};

export default CustomSingleValue;
