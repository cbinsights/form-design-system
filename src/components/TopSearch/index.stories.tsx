import { StoryObj } from '@storybook/react';
import TopSearch from './index';

// export const CustomInputExample: StoryObj<any> = {
//   args: {
//     isHidden: false,
//   },
//   render: (props) => {
//     return <CustomInput {...props} />;
//   },
// };

export const Primary: StoryObj = {
  args: {},
};

export default {
  component: TopSearch,
  title: 'components/TopSearch',
};
