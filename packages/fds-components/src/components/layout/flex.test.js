import React from 'react';
import { shallow } from 'enzyme';

import Flex from './Flex';

const renderComponent = (props) => shallow(<Flex {...props} />);

describe('Flex component', () => {

  it('matches snapshot (default props)', () => {
    const flex = renderComponent();
    expect(flex).toMatchSnapshot();
  });

  it('matches snapshot (set all props)', () => {
    const flex = renderComponent({
      noGutters: true,
      wrap: true,
      reverse: true,
      direction: 'column',
      align: 'end',
      justify: 'spaceBetween',
      className: 'foo'
    });
    expect(flex).toMatchSnapshot();
  });
});
