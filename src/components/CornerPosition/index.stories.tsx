import React from 'react';
import CheckIcon from 'icons/react/CheckIcon';
import Badge from 'components/Badge';
import { StoryObj } from '@storybook/react';
import CornerPosition, { CornerPositionProps } from '.';

export const Primary: StoryObj<CornerPositionProps> = {
  args: {
    decoration: <Badge label="42" />,
    children: <button>lorem ipsum</button>,
  },
};

export const Variations = (): JSX.Element => (
  <>
    <CornerPosition decoration={<Badge label="alert" />}>
      <div
        style={{
          border: '1px dashed #f09',
          padding: '5px',
        }}
      >
        CornerPosition can wrap <b>anything</b>!
      </div>
    </CornerPosition>
    <br />
    <br />
    <CornerPosition decoration={<Badge label={<CheckIcon size="xs" color="#fff" />} />}>
      <img src="https://placeimg.com/80/81/animals" />
    </CornerPosition>
  </>
);

export default {
  component: CornerPosition,
  title: 'Components/CornerPosition',
  parameters: {
    componentSubtitle:
      'Absolutely positions a decoration node to the top right of another node.',
    docs: {
      fds: {
        related: ['Badge'],
      },
    },
  },
};
