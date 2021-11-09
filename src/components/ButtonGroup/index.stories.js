import React from 'react';
import Tooltip from 'components/Tooltip';
import FeedIcon from 'icons/react/FeedIcon';
import State from 'util/storybook-docs/State';
import ButtonGroup from '.';

const Template = (args) => <ButtonGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttons: [
    { label: 'Lorem', disabled: true },
    { label: 'Ipsum' },
    { label: 'Dolor', isActive: true },
  ],
};

export const ActiveStates = () => (
  <State
    initialValue={1}
    render={(value, setValue) => (
      <ButtonGroup
        buttons={['Lorem', 'Sit', 'Ipsum'].map((label, idx) => ({
          label,
          onClick: () => setValue(idx),
          isActive: value === idx,
        }))}
      />
    )}
  />
);

export const Wrapper = Template.bind({});
Wrapper.args = {
  buttons: [
    {
      label: 'Tooltip',
      // eslint-disable-next-line
      Wrapper: (props) => (
        // eslint-disable-next-line
        <Tooltip trigger={props.children} message="hey" maxWidth={240} />
      ),
    },
  ],
};

Wrapper.parameters = {
  docs: {
    description: {
      story: 'Allows you to render a component around any of the individual buttons',
    },
  },
};

export const Icons = Template.bind({});
Icons.args = {
  buttons: [
    { label: 'Lorem', Icon: FeedIcon },
    { label: 'Sit', Icon: FeedIcon },
  ],
};

Icons.parameters = {
  docs: {
    description: {
      story: 'Displays on the left',
    },
  },
};

export default {
  component: ButtonGroup,
  title: 'components/ButtonGroup',
};
