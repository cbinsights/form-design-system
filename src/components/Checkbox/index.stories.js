import React, { useState } from 'react';
import Checkbox from '.';

const Template = (args) => {
  const [checked, setChecked] = useState(false);
  const onChange = (e) => {
    setChecked(e.target.checked);
  };
  return <Checkbox onChange={onChange} checked={checked} {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  value: 'spam',
  label: 'I agree to receive spam',
};

export const managingCheckedState = Template.bind({});

managingCheckedState.args = {
  checked: true,
  value: 'default-checked',
  label: 'Checked by default',
};

export const preventingUserInteraction = Template.bind({});

preventingUserInteraction.args = {
  disabled: true,
  name: 'disabled checked',
  label: 'Disabled: User cannot fire change event.',
};

export const checkboxWithoutLabel = Template.bind({});
checkboxWithoutLabel.args = {
  value: 'no-label',
  label: "I don't have a label",
  showLabel: false,
};

export const mixedCheckboxes = Template.bind({});
mixedCheckboxes.args = {
  checked: 'mixed',
  value: 'notsureif',
  label: 'Mixed checkbox',
};

export const readingTheValueOfACheckbox = Template.bind({});
readingTheValueOfACheckbox.args = {
  label: 'Option one',
};

readingTheValueOfACheckbox.parameters = {
  docs: {
    description: {
      story:
        ' The `onChange` prop will be spread on the `input` element the `Checkbox` component renders. Read the `checked` attribute of the event `currentTarget`.',
    },
  },
};

export default {
  component: Checkbox,
  title: 'components/Checkbox',
  parameters: {
    docs: {
      fds: {
        attributes: ['rest'],
      },
      description: {
        component: 'Uncontrolled custom checkbox component with optional label.',
      },
    },
  },
};
