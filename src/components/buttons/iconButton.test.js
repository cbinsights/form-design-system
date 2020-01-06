import React from 'react';
import { shallow } from 'enzyme';

import IconButton from './IconButton';

const renderComponent = (props) => shallow(<IconButton {...props} />);

const props = {
  Icon: () => {}, isActive: true, radius: 'circle', size: 's', isLoading: true, theme: 'aqua', isDestructive: true, disabled: true
};

describe('ButtonGroup component', () => {

  it('matches snapshot (default props)', () => {
    const component = renderComponent({ Icon: () => {} });
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot (set all props)', () => {
    const component = renderComponent(props);
    expect(component).toMatchSnapshot();
  });
});
