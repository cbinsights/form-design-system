import React from 'react';
import { StoryObj } from '@storybook/react';
import StarFilledIcon from 'icons/react/StarFilledIcon';
import { StoryWrapper, StoryItem } from 'util/storybook-docs/StoryLayout';
import Avatar, { AvatarProps, BG_COLORS, SIZES, RADII } from '.';

export const Primary: StoryObj<AvatarProps> = {
  render: (args: AvatarProps) => (
    <StoryWrapper>
      <StoryItem>
        <Avatar {...args} />
      </StoryItem>
      <StoryItem>
        <Avatar {...args} imgUrl="http://placeimg.com/80/81/animals" />
      </StoryItem>
    </StoryWrapper>
  ),
  args: {
    name: 'Samuel Jackson',
  },
};

export const PlaceholderIcon: StoryObj<AvatarProps> = {
  render: (args: AvatarProps) => (
    <StoryWrapper>
      <StoryItem>
        <Avatar {...args} />
      </StoryItem>
      <StoryItem>
        <Avatar {...args} imgUrl="http://placeimg.com/80/81/animals" />
      </StoryItem>
    </StoryWrapper>
  ),
  args: {
    PlaceholderIcon: StarFilledIcon,
  },
  parameters: {
    docs: {
      description: {
        story: 'Renders if `name` and `imgUrl` are not present.',
      },
    },
  },
};

export const Colors: StoryObj<AvatarProps> = {
  render: (args: AvatarProps): JSX.Element => (
    <StoryWrapper>
      <StoryItem>
        <Avatar {...args} name="default" />
      </StoryItem>
      {BG_COLORS.map((bgColor, idx) => (
        <StoryItem key={idx}>
          <Avatar
            {...args}
            name={`${bgColor.slice(0, 1)} ${bgColor.slice(1, 2)}`}
            bgColor={bgColor}
          />
        </StoryItem>
      ))}
    </StoryWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Accepted colors are based off [background color classes](?path=/docs/style-utilities-background--background-colors).',
      },
    },
  },
};

export const Images: StoryObj<AvatarProps> = {
  render: (args: AvatarProps): JSX.Element => (
    <StoryWrapper>
      <StoryItem>
        <Avatar
          {...args}
          name="Hello Impecable"
          imgUrl="http://placeimg.com/80/81/animals"
        />
      </StoryItem>
      <StoryItem>
        <Avatar {...args} name="Hello Impecable" imgUrl="invalid url" />
      </StoryItem>
    </StoryWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Initials will show either if you don't pass an image, the image doesn't load, or it hasn't loaded yet.",
      },
    },
  },
};

export const Sizes: StoryObj<AvatarProps> = {
  render: (args: AvatarProps): JSX.Element => (
    <StoryWrapper>
      {SIZES.map((size, idx) => (
        <StoryItem key={idx}>
          <Avatar {...args} name="Hello Impecable " size={size} />
        </StoryItem>
      ))}
    </StoryWrapper>
  ),
};

export const Radii: StoryObj<AvatarProps> = {
  render: (args: AvatarProps): JSX.Element => (
    <StoryWrapper>
      {RADII.map((radius, idx) => (
        <StoryItem key={idx}>
          <Avatar {...args} name="Hello Impecable " radius={radius} />
        </StoryItem>
      ))}
    </StoryWrapper>
  ),
};

export const Button: StoryObj<AvatarProps> = {
  render: (args: AvatarProps): JSX.Element => (
    <StoryWrapper>
      <StoryItem>
        <Avatar {...args} name="Hello Impecable" href="#" />
      </StoryItem>
      <StoryItem>
        <Avatar {...args} name="Hello Impecable" />
      </StoryItem>
      <StoryItem>
        <Avatar
          {...args}
          name="Hello Impecable"
          imgUrl="http://placeimg.com/80/81/animals"
          href="#"
        />
      </StoryItem>
    </StoryWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Avatar will render as a button if you pass it a href, onClick, or Link to it.',
      },
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
