import React from 'react';
import CheckIcon from 'lib/icons/react/CheckIcon';
import Badge from 'components/Badge';
import CornerPosition from '.';

const Template = (args) => <CornerPosition {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  decoration: <Badge label="42" />,
  children: <button>lorem ipsum</button>,
};

export const Variations = () => (
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
  title: 'components/CornerPosition',
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
