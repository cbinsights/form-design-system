import React from 'react';
import { action } from '@storybook/addon-actions';

import Radio from '.';

const Template = (args) => <Radio {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'radio-group-name',
  label: 'I agree to receive spam',
};

export const RadioGroups = (args) => (
  <React.Fragment>
    <Radio {...args} name="radio-group-story" label="Option one" />
    <Radio {...args} name="radio-group-story" label="Option two" />
    <Radio {...args} name="radio-group-story" label="Option three" />
  </React.Fragment>
);

RadioGroups.parameters = {
  docs: {
    description: {
      story:
        'You can create radio groups by rendering `Radio` components that share the same `name` prop.',
    },
  },
};

export const InitialSelection = (args) => (
  <React.Fragment>
    <Radio
      {...args}
      name="radio-group-initial"
      label="Selected by default"
      defaultChecked
    />
    <Radio {...args} name="radio-group-initial" label="The other option" />
  </React.Fragment>
);

InitialSelection.parameters = {
  docs: {
    description: {
      story: 'Use the `defaultChecked` prop to set initial selection in a radio group.',
    },
  },
};

export const ReadingSelectedValue = (args) => (
  <div onChange={(e) => action('change')(e.target.value)}>
    <Radio {...args} name="radio-group-onchange" label="Option one" value="1" />
    <Radio {...args} name="radio-group-onchange" label="Option two" value="2" />
    <Radio {...args} name="radio-group-onchange" label="Option three" value="3" />
  </div>
);

ReadingSelectedValue.parameters = {
  docs: {
    description: {
      story:
        'Place the `onChange` event on a parent element to read which radio of the group has been selected.',
    },
  },
};

export const Controlled = (args) => (
  <div onChange={(e) => action('change')(e.target.value)}>
    <Radio
      {...args}
      name="radio-group-onchange"
      label="Option one"
      value="1"
      checked={true}
    />
    <Radio {...args} name="radio-group-onchange" label="Option two" value="2" />
    <Radio {...args} name="radio-group-onchange" label="Option three" value="3" />
  </div>
);

export default {
  component: Radio,
  title: 'components/Radio',
  parameters: {
    componentSubtitle: 'Uncontrolled custom radio component with label.',
    docs: {
      fds: {
        attributes: ['rest'],
      },
    },
  },
};
