import React from 'react';

import StarFilledIcon from 'lib/icons/react/StarFilledIcon';
import { StoryWrapper, StoryItem } from 'util/storybook-docs/StoryLayout';

import Avatar, { BG_COLORS, SIZES, RADII } from '.';

const Template = (args) => (
  <StoryWrapper>
    <StoryItem>
      <Avatar {...args} />
    </StoryItem>
    <StoryItem>
      <Avatar {...args} imgUrl="http://placeimg.com/80/81/animals" />
    </StoryItem>
  </StoryWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  name: 'Samuel Jackson',
};

export const PlaceholderIcon = Template.bind({});
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

export const Colors = () => (
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

export const Images = () => (
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

export const Sizes = () => (
  <StoryWrapper>
    {SIZES.map((size, idx) => (
      <StoryItem key={idx}>
        <Avatar name="Hello Impecable " size={size} />
      </StoryItem>
    ))}
  </StoryWrapper>
);

export const Radii = () => (
  <StoryWrapper>
    {RADII.map((radius, idx) => (
      <StoryItem key={idx}>
        <Avatar name="Hello Impecable " radius={radius} />
      </StoryItem>
    ))}
  </StoryWrapper>
);

export const Button = () => (
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
      attributes: ['rest'],
      description: {
        component: '',
      },
    },
  },
};
