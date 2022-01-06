import React from 'react';
import Tooltip from 'components/Tooltip';
import FeedIcon from 'icons/react/FeedIcon';
import State from 'util/storybook-docs/State';
import { Story } from '@storybook/react';
import ButtonGroup, { ButtonGroupProps } from '.';
import { noop } from 'util/index';

const Template = (args: ButtonGroupProps): JSX.Element => <ButtonGroup {...args} />;

export const Primary: Story<ButtonGroupProps> = Template.bind({});
Primary.args = {
  buttons: [
    { label: 'Lorem', value: 1, key: 1, disabled: true, onClick: noop },
    { label: 'Ipsum', value: 2, key: 2, onClick: noop },
    { label: 'Dolor', value: 3, key: 3, isActive: true, onClick: noop },
  ],
};

export const ActiveStates = (): JSX.Element => (
  <State
    initialValue={1}
    render={(value, setValue) => (
      <ButtonGroup
        buttons={['Lorem', 'Sit', 'Ipsum'].map((label, idx) => ({
          label,
          onClick: () => setValue(idx),
          isActive: value === idx,
          key: idx,
          value: idx,
        }))}
      />
    )}
  />
);

export const Wrapper: Story<ButtonGroupProps> = Template.bind({});
Wrapper.args = {
  buttons: [
    {
      label: 'Tooltip',
      onClick: noop,
      key: 1,
      value: 1,
      Wrapper: (props) => (
        <Tooltip trigger={<>{props.children}</>} message="hey" maxWidth={240} />
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

export const Icons: Story<ButtonGroupProps> = Template.bind({});
Icons.args = {
  buttons: [
    { label: 'Lorem', Icon: FeedIcon, onClick: noop, value: 1, key: 1 },
    { label: 'Sit', Icon: FeedIcon, onClick: noop, value: 2, key: 2 },
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
