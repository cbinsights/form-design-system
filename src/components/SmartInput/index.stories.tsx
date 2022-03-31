import { StoryObj } from '@storybook/react';
import SmartInput, { SmartInputProps } from '.';
import { mockOptions } from './mockData';

export const Primary: StoryObj<SmartInputProps> = {
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
    inputValue: {
      type: {
        name: 'string',
        required: false,
      },
      control: {
        type: 'text',
      },
    },
    menuIsOpen: {
      type: {
        name: 'boolean',
        required: false,
      },
    },
  },
  args: {
    options: mockOptions,
    isClearable: true,
    menuShouldScrollIntoView: false,
  },
};

export default {
  component: SmartInput,
  title: 'components/SmartInput',
};
