import React from 'react';
import { shallow } from 'enzyme';

import Status from '.';

describe('Status component', () => {

  it('matches snapshot (default props, has label)', () => {
    const component = shallow(<Status label="test" />);
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot (update dot)', () => {
    const component = shallow(<Status />)
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot (count dot)', () => {
    const component = shallow(<Status type="count" />)
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot (count with label)', () => {
    const component = shallow(<Status label="42" type="count" />)
    expect(component).toMatchSnapshot();
  });
});
