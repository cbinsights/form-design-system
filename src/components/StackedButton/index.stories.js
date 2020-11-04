import React from 'react';
import { StarFilledIcon, CollectionPublicIcon, SalesforceIcon } from 'lib/icons/react';

import State from 'util/storybook-docs/State';

import StackedButton from '.';

export const Primary = (args) => (
  <StackedButton {...args} Icon={StarFilledIcon} label="Stacked Button" />
);

export const isActiveAndToggled = (args) => (
  <State
    initialValue={{}}
    render={(value, setValue) => (
      <>
        {[
          { label: 'isActive', Icon: SalesforceIcon },
          { label: 'isToggled', Icon: StarFilledIcon },
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
);

isActiveAndToggled.parameters = {
  docs: {
    description: {
      story: 'Click to toggle on and off',
    },
  },
};

export const Miscellaneous = (args) => (
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
);

export default {
  component: StackedButton,
  title: 'components/StackedButton',
  parameters: {
    docs: {
      attributes: ['rest'],
    },
  },
};
