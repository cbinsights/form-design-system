import { StoryObj } from '@storybook/react';
import Loading, { Props } from '.';

export const Primary: StoryObj<Props> = {
  parameters: {
    layout: 'centered',
  },
};

export default {
  component: Loading,
  title: 'Components/Loading',
};
