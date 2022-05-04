import React from 'react';
import Tooltip from 'components/Tooltip';
import FeedIcon from 'icons/react/FeedIcon';
import State from 'util/storybook-docs/State';
import { StoryObj } from '@storybook/react';
import ButtonGroup, { ButtonGroupProps } from '.';
import { noop } from 'util/index';
export const Primary: StoryObj<ButtonGroupProps> = {
  args: {
    buttons: [
      {
        label: 'Lorem',
        value: 1,
        key: 1,
        disabled: true,
        onClick: noop,
      },
      {
        label: 'Ipsum',
        value: 2,
        key: 2,
        onClick: noop,
      },
      {
        label: 'Dolor',
        value: 3,
        key: 3,
        isActive: true,
        onClick: noop,
      },
    ],
  },
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

export const Wrapper: StoryObj<ButtonGroupProps> = {
  args: {
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
  },
  parameters: {
    docs: {
      description: {
        story: 'Allows you to render a component around any of the individual buttons',
      },
    },
  },
};

export const Icons: StoryObj<ButtonGroupProps> = {
  args: {
    buttons: [
      {
        label: 'Lorem',
        Icon: FeedIcon,
        onClick: noop,
        value: 1,
        key: 1,
      },
      {
        label: 'Sit',
        Icon: FeedIcon,
        onClick: noop,
        value: 2,
        key: 2,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays on the left',
      },
    },
  },
};

export default {
  component: ButtonGroup,
  title: 'Components/ButtonGroup',
};
