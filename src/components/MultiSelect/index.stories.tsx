import { StoryObj } from '@storybook/react';
import MultiSelect, { MultiSelectProps } from '.';
import { mockOptions } from './mockData';

export const Primary: StoryObj<MultiSelectProps> = {
  argTypes: {
    onChange: {
      action: 'onChange',
    },
    onClear: {
      action: 'onClear',
    },
    onMenuClose: {
      action: 'onMenuClose',
    },
    onBlur: {
      action: 'onBlur',
    },
    onFocus: {
      action: 'onFocus',
    },
    onKeyDown: {
      action: 'onKeyDown',
    },
    onOptionClick: {
      action: 'onOptionClick',
    },
    placeholder: {
      type: 'string',
    },
    searchItems: {
      table: { expanded: true },
    },
  },
  args: {
    options: mockOptions.slice(0, 5),
    isClearable: true,
    menuIsOpen: false,
  },
};

export default {
  component: MultiSelect,
  title: 'components/MultiSelect',
};
