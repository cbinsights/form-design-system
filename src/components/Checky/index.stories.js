import React from 'react';
import Checkbox from '.';

const Template = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  checked: true,
  value: 'spam',
  label: 'I agree to receive spam',
};

export const managingCheckedState = Template.bind({});

managingCheckedState.args = {
  defaultChecked: true,
  value: 'default-checked',
  label: 'Checked by default',
};

export const preventingUserInteraction = () => (
  <>
    <div>
      <Checkbox disabled name="disabled-unchecked" label="Disabled unchecked" />
    </div>
    <div>
      <Checkbox
        disabled
        defaultChecked
        name="disabled-checked"
        label="Disabled checked"
      />
    </div>
  </>
);

preventingUserInteraction.parameters = {
  docs: {
    description: {
      story:
        'Use the `disabled` prop to prevent the user from changing the checked state of the checkbox.',
    },
  },
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
  title: 'components/Checky',
  argTypes: { onChange: { action: 'onChange' } },
  parameters: {
    docs: {
      attributes: ['rest'],
      description: {
        component: 'Uncontrolled custom checkbox component with optional label.',
      },
    },
  },
};
