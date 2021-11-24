import React from 'react';
import { Story } from '@storybook/react';
import StarFilledIcon from 'icons/react/StarFilledIcon';
import { StoryWrapper, StoryItem } from 'util/storybook-docs/StoryLayout';

import Avatar, { AvatarProps, BG_COLORS, SIZES, RADII } from '.';

const Template = (args: AvatarProps) => (
  <StoryWrapper>
    <StoryItem>
      <Avatar {...args} />
    </StoryItem>
    <StoryItem>
      <Avatar {...args} imgUrl="http://placeimg.com/80/81/animals" />
    </StoryItem>
  </StoryWrapper>
);

export const Primary: Story<AvatarProps> = Template.bind({});
Primary.args = {
  name: 'Samuel Jackson',
};

export const PlaceholderIcon: Story<AvatarProps> = Template.bind({});
PlaceholderIcon.args = {
  PlaceholderIcon: StarFilledIcon,
};

PlaceholderIcon.parameters = {
  docs: {
    description: {
      story: 'Renders if `name` and `imgUrl` are not present.',
    },
  },
};

export const Colors = (): JSX.Element => (
  <StoryWrapper>
    <StoryItem>
      <Avatar name="default" />
    </StoryItem>
    {BG_COLORS.map((bgColor, idx) => (
      <StoryItem key={idx}>
        <Avatar
          name={`${bgColor.slice(0, 1)} ${bgColor.slice(1, 2)}`}
          bgColor={bgColor}
        />
      </StoryItem>
    ))}
  </StoryWrapper>
);

Colors.parameters = {
  docs: {
    description: {
      story:
        'Accepted colors are based off [background color classes](?path=/docs/style-utilities-background--background-colors).',
    },
  },
};

export const Images = (): JSX.Element => (
  <StoryWrapper>
    <StoryItem>
      <Avatar name="Hello Impecable" imgUrl="http://placeimg.com/80/81/animals" />
    </StoryItem>
    <StoryItem>
      <Avatar name="Hello Impecable" imgUrl="invalid url" />
    </StoryItem>
  </StoryWrapper>
);
Images.parameters = {
  docs: {
    description: {
      story:
        "Initials will show either if you don't pass an image, the image doesn't load, or it hasn't loaded yet.",
    },
  },
};

export const Sizes = (): JSX.Element => (
  <StoryWrapper>
    {SIZES.map((size, idx) => (
      <StoryItem key={idx}>
        <Avatar name="Hello Impecable " size={size} />
      </StoryItem>
    ))}
  </StoryWrapper>
);

export const Radii = (): JSX.Element => (
  <StoryWrapper>
    {RADII.map((radius, idx) => (
      <StoryItem key={idx}>
        <Avatar name="Hello Impecable " radius={radius} />
      </StoryItem>
    ))}
  </StoryWrapper>
);

export const Button = (): JSX.Element => (
  <StoryWrapper>
    <StoryItem>
      <Avatar name="Hello Impecable" href="#" />
    </StoryItem>
    <StoryItem>
      <Avatar name="Hello Impecable" />
    </StoryItem>
    <StoryItem>
      <Avatar
        name="Hello Impecable"
        imgUrl="http://placeimg.com/80/81/animals"
        href="#"
      />
    </StoryItem>
  </StoryWrapper>
);

Button.parameters = {
  docs: {
    description: {
      story:
        'Avatar will render as a button if you pass it a href, onClick, or Link to it.',
    },
  },
};

export default {
  component: Avatar,
  title: 'components/Avatar',
  parameters: {
    docs: {
      fds: {
        attributes: ['rest'],
        related: ['IconButton', 'StackedButton'],
      },
    },
  },
};
