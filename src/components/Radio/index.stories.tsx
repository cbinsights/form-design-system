import React from 'react';
import { action } from '@storybook/addon-actions';

import Radio, { RadioProps } from '.';

const Template = (args: RadioProps): JSX.Element => <Radio {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'radio-group-name',
  label: 'I agree to receive spam',
};

export const radioGroups = (args: RadioProps): JSX.Element => (
  <React.Fragment>
    <Radio {...args} name="radio-group-story" label="Option one" />
    <Radio {...args} name="radio-group-story" label="Option two" />
    <Radio {...args} name="radio-group-story" label="Option three" />
  </React.Fragment>
);

radioGroups.parameters = {
  docs: {
    description: {
      story:
        'You can create radio groups by rendering `Radio` components that share the same `name` prop.',
    },
  },
};

export const initialSelection = (args: RadioProps): JSX.Element => (
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

initialSelection.parameters = {
  docs: {
    description: {
      story: 'Use the `defaultChecked` prop to set initial selection in a radio group.',
    },
  },
};

export const readingSelectedValue = (args: RadioProps): JSX.Element => (
  <div onChange={(e) => action('change')((e.target as HTMLInputElement).value)}>
    <Radio {...args} name="radio-group-onchange" label="Option one" value="1" />
    <Radio {...args} name="radio-group-onchange" label="Option two" value="2" />
    <Radio {...args} name="radio-group-onchange" label="Option three" value="3" />
  </div>
);

readingSelectedValue.parameters = {
  docs: {
    description: {
      story:
        'Place the `onChange` event on a parent element to read which radio of the group has been selected.',
    },
  },
};

export const controlled = (args: RadioProps): JSX.Element => (
  <div onChange={(e) => action('change')((e.target as HTMLInputElement).value)}>
    <Radio
      {...args}
      name="radio-group-onchange"
      label="Option one"
      value="1"
      defaultChecked
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
