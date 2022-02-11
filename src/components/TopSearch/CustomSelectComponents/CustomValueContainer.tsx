import React from 'react';
import { components, ValueContainerProps } from 'react-select';
import { SelectProps } from '../Search';

const CustomValueContainer = ({
  children,
  ...props
}: ValueContainerProps<SelectProps, true>): JSX.Element => {
  const { cursorPosition } = props.selectProps;
  const childrenArray = React.Children.toArray(children);
  const firstChildArray = React.Children.toArray(childrenArray[0]);
  const hasSelectedValues = !!firstChildArray.length;
  const selectedValues = hasSelectedValues ? [...firstChildArray] : [];
  const input = childrenArray[1];
  // insert the input after the cursor position
  const els = hasSelectedValues
    ? [
        selectedValues.slice(0, cursorPosition < 0 ? 0 : cursorPosition + 1),
        input,
        selectedValues.slice(cursorPosition < 0 ? 0 : cursorPosition + 1),
      ]
    : children;
  return (
    <components.ValueContainer {...props} setValue={props.setValue}>
      {els}
    </components.ValueContainer>
  );
};

export default CustomValueContainer;
