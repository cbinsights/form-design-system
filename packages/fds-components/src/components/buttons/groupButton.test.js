import React from 'react';
import { shallow } from 'enzyme';

import GroupButton from './GroupButton';

const Icon = () => (
  <span>🌭</span>
)

const button = { value: 'Feed', icon: Icon, isActive: true }

describe('GroupButton component', () => {
  it('matches snapshot (set all props)', () => {
    expect(shallow(<GroupButton value='Feed' icon={Icon} isActive={true} />)).toMatchSnapshot();
  });
});

