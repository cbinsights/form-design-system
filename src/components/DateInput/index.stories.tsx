import React from 'react';
import { Story } from '@storybook/react';

import DateInput, { DateInputProps } from '.';

const Template = (args: DateInputProps) => <DateInput {...args} />;

export const Primary: Story<DateInputProps> = Template.bind({});
Primary.args = {};

export const DefaultSelectedDate: Story<DateInputProps> = Template.bind({});
DefaultSelectedDate.args = {
  defaultDate: '01/01/2010',
};

DefaultSelectedDate.parameters = {
  docs: {
    description: {
      story:
        'The input element in `DateInput` will be empty by default. Due to inconsistency across browsers with how native `Date` parsing works, we recommend passing a string to `defaultDate`.',
    },
  },
};

export const DateRange: Story<DateInputProps> = Template.bind({});
DateRange.args = {
  label: 'Enter a date in 2020',
  minDate: new Date('Jan 1 2020'),
  maxDate: new Date('Dec 31 2020'),
};

DateRange.parameters = {
  docs: {
    description: {
      story:
        ' Setting a range of selectable dates: `DateInput` accepts lower and/or upper bounds for a range of selectable dates with the `minDate` and `maxDate` props. Pass an instance of `Date` to set either end of the range. **Note:** This will restrict the days available in the popover calendar UI, but the user may still type dates outside of range directly into the input. Use the `onDateChange` event for extra validation if necessary.',
    },
  },
};

export const PopoverProps: Story<DateInputProps> = Template.bind({});
PopoverProps.args = {
  popoverProps: { alignment: 'end', children: null },
};

PopoverProps.parameters = {
  docs: {
    description: {
      story:
        'The `Popover` containing the date picker can be configured via `popoverProps`. Any valid `Popover` prop is accepted except for `trigger`, which the `DateInput` must control. In this example, the `alignment` prop of the popover has been set so the picker is right-aligned.',
    },
  },
};

export const LabelPosition: Story<DateInputProps> = Template.bind({});
LabelPosition.args = {
  label: 'DateInput',
  labelPosition: 'left',
};

export default {
  component: DateInput,
  title: 'components/DateInput',
  argTypes: {
    onInputChange: { action: 'onInputChange' },
    onDateChange: { action: 'onDateChange' },
  },
  parameters: {
    componentSubtitle: 'Input for a single date selection',
    docs: {
      fds: {
        attributes: ['rest'],
      },
      description: {
        component:
          'The `input` element will accept date text entry in "MDY", "DMY", or "YMD" formats, or the user can use the calendar popover. `DateInput` will use the American English ("MM/DD/YYYY") date format by default. You can change the date component order for Canadian or European style dates with the `dateFormat` prop. ',
      },
    },
  },
};
