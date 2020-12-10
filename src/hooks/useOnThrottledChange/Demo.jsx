import React from 'react';
import TextInput from 'components/TextInput';
import { action } from '@storybook/addon-actions';
import useOnThrottledChange from '.';

const Demo = () => {
  const onThrottledChange = action('input');
  const [throttleCallback] = useOnThrottledChange(onThrottledChange); // onChange is optional
  return <TextInput onChange={throttleCallback} label="Label" />;
};

export default Demo;
