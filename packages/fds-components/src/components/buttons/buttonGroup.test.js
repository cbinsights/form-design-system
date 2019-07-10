import React from 'react';
import { shallow } from 'enzyme';

import ButtonGroup from './ButtonGroup';

const renderComponent = (props) => shallow(<ButtonGroup {...props} />);

const Icon = () => (
  <span>🌭</span>
)

const buttons = [
  { value: 'Feed', icon: Icon, isActive: true },
  { value: 'Table', icon: Icon, onClick: () => console.log('additional console'), disabled: true },
];

describe('ButtonGroup component', () => {

  it('matches snapshot (default props)', () => {
    const component = renderComponent({
      buttons,
    });
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot (set all props)', () => {
    const component = renderComponent({
      buttons,
      className: 'foo',
      onChange: () => console.log('changed')
    });
    expect(component).toMatchSnapshot();
  });
});
