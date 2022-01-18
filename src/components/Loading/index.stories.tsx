import { StoryObj } from '@storybook/react';
import Loading, { Props } from '.';

export const Default: StoryObj<Props> = {
  parameters: {
    layout: 'centered',
  },
};

export default {
  component: Loading,
  title: 'components/Loading',
};
