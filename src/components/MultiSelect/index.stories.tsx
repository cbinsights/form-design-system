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
  },
  args: {
    options: mockOptions.slice(0, 5),
    isClearable: true,
  },
};

export default {
  component: MultiSelect,
  title: 'components/MultiSelect',
};
