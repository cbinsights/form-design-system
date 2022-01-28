import React from 'react';
import StarFilledIcon from 'icons/react/StarFilledIcon';
import { StoryObj } from '@storybook/react';
import { StoryWrapper, StoryItem } from 'util/storybook-docs/StoryLayout';
import Chip, { THEMES, SIZES, ChipProps } from '.';

export const Primary: StoryObj<ChipProps> = {
  args: {
    label: 'Hello world',
  },
};

export const Themes = (): JSX.Element => (
  <StoryWrapper>
    {THEMES.map((theme, idx) => (
      <StoryItem key={idx}>
        <Chip theme={theme} label={theme} />
      </StoryItem>
    ))}
  </StoryWrapper>
);

export const IsActive = (): JSX.Element => (
  <StoryWrapper>
    {THEMES.map((theme, idx) => (
      <StoryItem key={idx}>
        <Chip theme={theme} label={theme} isActive />
      </StoryItem>
    ))}
  </StoryWrapper>
);

export const Sizes = (): JSX.Element => (
  <StoryWrapper>
    {SIZES.map((size, idx) => (
      <div key={idx} className="margin--right--s margin--bottom--s display--inlineBlock">
        <Chip size={size} label={`Size: ${size}`} />
      </div>
    ))}
  </StoryWrapper>
);

export const Subtitle: StoryObj<ChipProps> = {
  args: {
    label: 'Chip',
    subtitle: 'subtitle',
  },
};

export const Icon: StoryObj<ChipProps> = {
  args: {
    label: 'Chip',
    Icon: StarFilledIcon,
  },
};

export const Close: StoryObj<ChipProps> = {
  args: {
    label: 'Chip',
    onClose: () => {},
  },
};

export default {
  component: Chip,
  title: 'components/Chip',
  parameters: {
    docs: {
      fds: {
        attributes: ['rest'],
      },
    },
  },
};
