import React from 'react';
import CheckIcon from 'lib/icons/react/CheckIcon';
import NewsIcon from 'lib/icons/react/NewsIcon';
import Updatable from '.';

const Template = (args) => <Updatable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  message: '42',
  children: <button>lorem ipsum</button>,
};

export const Variations = () => (
  <>
    <Updatable message="alert">
      <div
        style={{
          border: '1px dashed #f09',
          padding: '5px',
        }}
      >
        Updatable can wrap <b>anything</b>!
      </div>
    </Updatable>
    <br />
    <br />
    <Updatable message={<CheckIcon size="xs" color="#fff" />}>
      <img src="https://placeimg.com/80/81/animals" />
    </Updatable>
  </>
);

export const dotOnly = (args) => (
  <Updatable {...args} showDot>
    <NewsIcon />
  </Updatable>
);

dotOnly.parameters = {
  docs: {
    description: {
      story:
        'When the `message` prop is falsy, the indicator will not be shown. To force a dot to render with an empty `message`, pass the `showDot` prop.',
    },
  },
};

export default {
  component: Updatable,
  title: 'components/Updatable',
  parameters: {
    docs: {
      description: {
        component:
          'Wraps children in an "updatable" container with a `message` displayed as a notification-style red bubble.',
      },
    },
  },
};
