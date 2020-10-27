import React from 'react';
import { shallow } from 'enzyme';

import Count from '.';

describe('Count component', () => {

  it('matches snapshot (default props, has label)', () => {
    const component = shallow(<Count label="test" />);
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot (update dot)', () => {
    const component = shallow(<Count />)
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot (count dot)', () => {
    const component = shallow(<Count type="passive" />)
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot (count with label)', () => {
    const component = shallow(<Count label="42" type="passive" />)
    expect(component).toMatchSnapshot();
  });
});
