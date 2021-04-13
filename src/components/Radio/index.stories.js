import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Radio from '.';

const Template = (args) => <Radio {...args} value="1" />;
const MultiTemplate = ({ multi = {}, ...args }) => {
  const [isChecked, setIsChecked] = useState('1');
  const onChange = (e) => {
    setIsChecked(e.target.value);
  };
  return (
    <div onChange={onChange}>
      <Radio {...args} {...multi.one} checked={isChecked === '1'} value="1" />
      <Radio {...args} {...multi.two} checked={isChecked === '2'} value="2" />
      <Radio {...args} {...multi.three} checked={isChecked === '3'} value="3" />
    </div>
  );
};

MultiTemplate.propTypes = {
  multi: PropTypes.object,
};

export const Primary = Template.bind({});
Primary.args = {
  name: 'radio-group-name',
  label: 'I agree to receive spam',
};

export const RadioGroups = MultiTemplate.bind({});
RadioGroups.args = {
  name: 'radio-group-story',
  multi: {
    one: { label: 'Option one' },
    two: { label: 'Option two' },
    three: { label: 'Option three' },
  },
};

RadioGroups.parameters = {
  docs: {
    description: {
      story:
        'You can create radio groups by rendering `Radio` components that share the same `name` prop.',
    },
  },
};

export default {
  component: Radio,
  title: 'components/Radio',
  argTypes: { onChange: { action: 'onChange' } },
  parameters: {
    docs: {
      fds: {
        attributes: ['rest'],
      },
      description: {
        component: 'Uncontrolled custom radio component with label.',
      },
    },
  },
};
