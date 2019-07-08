import React from 'react';
import { shallow } from 'enzyme';

import GroupButton from './GroupButton';

const renderComponent = (props) => shallow(<GroupButton {...props} />);

const Icon = () => (
  <span>🌭</span>
)

describe('GroupButton component', () => {

  it('matches snapshot (set all props)', () => {
    const component = renderComponent({
      Icon,
      onClick: () => false,
      active: true,
      className: 'foo',
    });
    expect(component).toMatchSnapshot();
  });
});
