import React from 'react';
import StarFilledIcon from 'lib/icons/react/StarFilledIcon';
import { Story } from '@storybook/react';
import { StoryWrapper, StoryItem } from 'util/storybook-docs/StoryLayout';
import Chip, { THEMES, SIZES, ChipProps } from '.';

const Template = (args: ChipProps) => <Chip {...args} />;

export const Primary: Story<ChipProps> = Template.bind({});
Primary.args = {
  label: 'Hello world',
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

export const isActive = (): JSX.Element => (
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

export const Subtitle: Story<ChipProps> = Template.bind({});
Subtitle.args = {
  label: 'Chip',
  subtitle: 'subtitle',
};

export const Icon: Story<ChipProps> = Template.bind({});
Icon.args = {
  label: 'Chip',
  Icon: StarFilledIcon,
};

export const Close: Story<ChipProps> = Template.bind({});
Close.args = {
  label: 'Chip',
  onClose: () => {},
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
