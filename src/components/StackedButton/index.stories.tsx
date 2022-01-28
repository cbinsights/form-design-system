import React from 'react';
import { StarFilledIcon, CollectionPublicIcon, SalesforceIcon } from 'icons/react';
import State from 'util/storybook-docs/State';
import StackedButton, { StackedButtonProps } from '.';
import { StoryObj } from '@storybook/react';

export const Primary: StoryObj<StackedButtonProps> = {
  // render: (args: StackedButtonProps): JSX.Element => (
  //   <StackedButton {...args} Icon={StarFilledIcon} label="Stacked Button" />
  // ),
  args: {
    Icon: StarFilledIcon,
    label: 'Stacked Button',
  },
};

export const IsActiveAndToggled: StoryObj<StackedButtonProps> = {
  render: (args: StackedButtonProps): JSX.Element => (
    <State
      initialValue={{}}
      render={(value: Record<number, boolean>, setValue) => (
        <>
          {[
            {
              label: 'isActive',
              Icon: SalesforceIcon,
            },
            {
              label: 'isToggled',
              Icon: StarFilledIcon,
            },
          ].map((item, idx) => (
            <StackedButton
              key={idx}
              {...args}
              Icon={item.Icon}
              label={item.label}
              isToggled={item.label === 'isToggled' && value[idx]}
              isActive={item.label === 'isActive' && value[idx]}
              onClick={() => setValue({ ...value, [idx]: !value[idx] })}
            />
          ))}
        </>
      )}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Click to toggle on and off',
      },
    },
  },
};

export const Miscellaneous: StoryObj<StackedButtonProps> = {
  render: (args: StackedButtonProps): JSX.Element => (
    <>
      <StackedButton
        {...args}
        Icon={CollectionPublicIcon}
        label="Add to Collections"
        hasCaret
      />
      <StackedButton
        {...args}
        Icon={CollectionPublicIcon}
        label="Add to Collections"
        hasCaret
        href="#"
      />
    </>
  ),
};

export default {
  component: StackedButton,
  title: 'components/StackedButton',
  parameters: {
    docs: {
      fds: {
        attributes: ['rest'],
      },
    },
  },
};
