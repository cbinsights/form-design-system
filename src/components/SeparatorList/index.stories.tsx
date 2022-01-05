import React from 'react';
import SeparatorList, { SeparatorListProps } from '.';
import { Story } from '@storybook/react';

const Template = (args: SeparatorListProps): JSX.Element => <SeparatorList {...args} />;

export const Primary: Story<SeparatorListProps> = Template.bind({});
Primary.args = {
  separator: '✈️',
  items: ['New York', 'Paris', 'Schenectady', 'Los Angeles', 'Hong Kong'],
};

export const Pipes: Story<SeparatorListProps> = Template.bind({});
Pipes.args = {
  separator: '|️',
  items: [
    <a key="some" className="type--link">
      Some
    </a>,
    <a key="footer" className="type--link">
      Footer
    </a>,
    <a key="links" className="type--link">
      Links
    </a>,
    <a key="or" className="type--link">
      Or
    </a>,
    <a key="something" className="type--link">
      Something
    </a>,
  ],
};

export const Breadcrumbs: Story<SeparatorListProps> = Template.bind({});
Breadcrumbs.args = {
  separator: '/',
  items: [
    <a key="main" className="type--link">
      Main
    </a>,
    'Retail',
  ],
};

export default {
  component: SeparatorList,
  title: 'components/SeparatorList',
  parameters: {
    componentSubtitle: 'Renders inline-block list with a custom separator',
    docs: {},
  },
};
