import React from 'react';
import { shallow } from 'enzyme';

import Flex from './Flex';

describe('Flex component', () => {
  const flex = shallow(<Flex />);

  it('matches snapshot', () => {
    expect(flex).toMatchSnapshot();
  });
});
