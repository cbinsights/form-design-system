import React from 'react';
import { shallow } from 'enzyme';

import GroupButton from './GroupButton';

describe('GroupButton component', () => {
  it('matches snapshot', () => {
    expect(shallow(<GroupButton />)).toMatchSnapshot();
  });
});

