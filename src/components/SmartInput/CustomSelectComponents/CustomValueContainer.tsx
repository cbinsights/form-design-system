import React from 'react';
import { components, ValueContainerProps } from 'react-select';
import { OptionProps } from '..';

const CustomValueContainer = ({
  children,
  ...props
}: ValueContainerProps<OptionProps, true>): JSX.Element => {
  const innerProps = { ...props.innerProps, role: 'list' };
  const { cursorPosition } = props.selectProps;
  const selectedValues = React.Children.toArray(children);
  const input = selectedValues.pop();
  const els =
    props.hasValue && cursorPosition !== undefined
      ? [
          selectedValues.slice(0, cursorPosition < 0 ? 0 : cursorPosition + 1),
          input,
          selectedValues.slice(cursorPosition < 0 ? 0 : cursorPosition + 1),
        ]
      : children;
  return (
    <components.ValueContainer
      {...props}
      innerProps={innerProps}
      setValue={props.setValue}
    >
      {els}
    </components.ValueContainer>
  );
};

export default CustomValueContainer;
