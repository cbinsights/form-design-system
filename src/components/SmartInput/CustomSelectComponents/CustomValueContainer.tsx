import React from 'react';
import { components, ValueContainerProps } from 'react-select';
import { OptionProps } from '..';

const CustomValueContainer = ({
  children,
  ...props
}: ValueContainerProps<OptionProps, boolean>): JSX.Element => {
  const innerProps = { ...props.innerProps, role: 'list' };
  const { cursorPosition } = props.selectProps;
  const hasSelectedValues = Array.isArray(children) && !!children[0]?.length;
  const selectedValues = hasSelectedValues ? children[0] : [];
  const input = hasSelectedValues ? children[1] : null;
  const els =
    hasSelectedValues && cursorPosition !== undefined
      ? [
          selectedValues.slice(0, cursorPosition < 0 ? 0 : cursorPosition + 1),
          input,
          selectedValues.slice(cursorPosition < 0 ? 0 : cursorPosition + 1),
        ]
      : children;
  return (
    <components.ValueContainer {...props} innerProps={innerProps}>
      {els}
    </components.ValueContainer>
  );
};

export default CustomValueContainer;
