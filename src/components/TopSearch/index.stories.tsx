import { StoryObj } from '@storybook/react';
import Search, { SearchProps } from './Search';

// export const CustomInputExample: StoryObj<any> = {
//   args: {
//     isHidden: false,
//   },
//   render: (props) => {
//     return <CustomInput {...props} />;
//   },
// };

export const Primary: StoryObj<SearchProps> = {
  args: {},
};

export default {
  component: Search,
  title: 'components/TopSearch',
};
