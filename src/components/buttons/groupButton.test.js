import React from 'react';
import { shallow } from 'enzyme';

import GroupButton from './GroupButton';

const Icon = () => (
  <span>🌭</span>
);
const Wrapper = (props) => (
  <div {...props} data-test="snapshot-wrapper" />
);

describe('GroupButton component', () => {
  it('matches snapshot (set all props)', () => {
    expect(shallow(<GroupButton value='Feed' Icon={Icon} isActive={true} Wrapper={Wrapper} />)).toMatchSnapshot();
  });
});

