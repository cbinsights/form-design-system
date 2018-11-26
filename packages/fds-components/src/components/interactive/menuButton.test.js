import React from 'react';
import { shallow } from 'enzyme';

import MenuButton from './MenuButton';

const renderComponent = (props) => shallow(<MenuButton {...props} />);

describe('MenuButton component', () => {

  it('matches snapshot (default props)', () => {
    const component = renderComponent({
      label: 'My Label',
      iconComponent: (<span>🌭</span>),
    });
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot (set all props)', () => {
    const component = renderComponent({
      disabled: true,
      onClick: () => false,
      labelClassName: 'myCustomClass',
      className: 'foo',
      label: 'My Label',
      iconComponent: (<span>🌭</span>),
    });
    expect(component).toMatchSnapshot();
  });
});
