import React from 'react';
import { components, MenuListProps } from 'react-select';
import { OptionProps } from '..';

const CustomMenuList = (props: MenuListProps<OptionProps>): JSX.Element => {
  const innerProps = { ...props.innerProps, role: 'listbox' };
  return <components.MenuList {...props} innerProps={innerProps} />;
};

export default CustomMenuList;
