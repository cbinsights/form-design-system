import React from 'react';
import { shallow } from 'enzyme';

import Badge from '.';

describe('Badge component', () => {
  it('matches snapshot (default props)', () => {
    const component = shallow(<Badge label="badge" />);
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot (set all props)', () => {
    const component = shallow(<Badge label="badge" size="xs" data-test="test" />);
    expect(component).toMatchSnapshot();
  });
});
