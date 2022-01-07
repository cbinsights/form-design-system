import React from 'react';
import { shallow } from 'enzyme';

import FlexItem, { FlexItemProps } from '.';

const renderComponent = (props?: FlexItemProps) => shallow(<FlexItem {...props} />);

describe('Flex component', () => {
  it('matches snapshot (default props)', () => {
    const flex = renderComponent();
    expect(flex).toMatchSnapshot();
  });

  it('matches snapshot (set all props)', () => {
    const flex = renderComponent({
      shrink: true,
      align: 'center',
      justify: 'spaceBetween',
    });
    expect(flex).toMatchSnapshot();
  });
});
