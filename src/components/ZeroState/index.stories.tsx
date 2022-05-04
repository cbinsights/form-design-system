import DenyIcon from 'icons/react/DenyIcon';
import { StoryObj } from '@storybook/react';
import SearchIcon from 'icons/react/SearchIcon';
import TableIcon from 'icons/react/TableIcon';
import ZeroState, { Props } from '.';

export const Primary: StoryObj<Props> = {
  args: {
    label: 'This is empty',
    height: '150px',
    Icon: TableIcon,
  },
};

export const Secondary: StoryObj<Props> = {
  args: {
    label: 'There are no results',
    height: '300px',
    Icon: SearchIcon,
  },
};

export const ViewportHeight: StoryObj<Props> = {
  args: {
    label: 'This sheet is empty',
    height: '100vh',
    Icon: TableIcon,
  },
};

export const OnlyIcon: StoryObj<Props> = {
  args: {
    Icon: DenyIcon,
    height: '300px',
  },
};

export const NoIcon: StoryObj<Props> = {
  args: {
    label: 'There is no icon',
    height: '300px',
  },
};

export default {
  component: ZeroState,
  title: 'components/ZeroState',
  parameters: {
    componentSubtitle: 'Placeholder component',
  },
};
