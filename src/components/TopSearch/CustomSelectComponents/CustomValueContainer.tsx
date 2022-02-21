import React from 'react';
import { components, ValueContainerProps } from 'react-select';
import { SelectProps } from '../Search';

const CustomValueContainer = ({
  children,
  ...props
}: ValueContainerProps<SelectProps, true>): JSX.Element => {
  const { cursorPosition } = props.selectProps;
  // React.Children.toArray flattens the nested array, input ends up at the end, so we pop it into it's own variable.
  const selected = React.Children.toArray(children);
  const input = selected.pop();
  const hasSelectedValues = !!selected.length;
  const selectedValues = selected ?? [];
  const els =
    hasSelectedValues && cursorPosition !== undefined
      ? [
          selectedValues.slice(0, cursorPosition < 0 ? 0 : cursorPosition + 1),
          input,
          selectedValues.slice(cursorPosition < 0 ? 0 : cursorPosition + 1),
        ]
      : children;
  return (
    <components.ValueContainer {...props} setValue={props.setValue}>
      {'beta '}
      {els}
    </components.ValueContainer>
  );
};

export default CustomValueContainer;
