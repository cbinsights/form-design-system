import React from 'react';
import { shallow } from 'enzyme';

import Indicator from '.';

describe('Indicator component', () => {
  it('matches snapshot (default props)', () => {
    const component = shallow(<Indicator label="badge" />);
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot (set all props)', () => {
    const component = shallow(<Indicator label="badge" size="xs" data-test="test" />);
    expect(component).toMatchSnapshot();
  });
});
