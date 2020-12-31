import React from 'react';
import StarFilledIcon from 'lib/icons/react/StarFilledIcon';
import { StoryWrapper, StoryItem } from 'util/storybook-docs/StoryLayout';
import Chip, { THEMES, SIZES } from '.';

const Template = (args) => <Chip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Hello world',
};

export const Themes = () => (
  <StoryWrapper>
    {THEMES.map((theme, idx) => (
      <StoryItem key={idx}>
        <Chip theme={theme} label={theme} />
      </StoryItem>
    ))}
  </StoryWrapper>
);

export const isActive = () => (
  <StoryWrapper>
    {THEMES.map((theme, idx) => (
      <StoryItem key={idx}>
        <Chip theme={theme} label={theme} isActive />
      </StoryItem>
    ))}
  </StoryWrapper>
);

export const Sizes = () =>
  SIZES.map((size, idx) => (
    <div key={idx} className="margin--right--s margin--bottom--s display--inlineBlock">
      <Chip size={size} label={`Size: ${size}`} />
    </div>
  ));

export const Subtitle = Template.bind({});
Subtitle.args = {
  label: 'Chip',
  subtitle: 'subtitle',
};

export const Icon = Template.bind({});
Icon.args = {
  label: 'Chip',
  Icon: StarFilledIcon,
};

export const Close = Template.bind({});
Close.args = {
  label: 'Chip',
  onClose: () => {},
};

export default {
  component: Chip,
  title: 'components/Chip',
  parameters: {
    docs: {
      attributes: ['rest'],
      description: {
        component: 'Used to display tags, members, filter settings, and other tokens.',
      },
    },
  },
};
