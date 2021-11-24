import React from 'react';
import { shallow } from 'enzyme';

import CornerPosition from '.';

describe('CornerPosition component', () => {
  it('matches snapshot', () => {
    const component = shallow(
      <CornerPosition decoration={<span />}>
        <div />
      </CornerPosition>
    );
    expect(component).toMatchSnapshot();
  });
});
