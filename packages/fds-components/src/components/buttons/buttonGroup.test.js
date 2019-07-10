import React from 'react';
import { shallow } from 'enzyme';

import ButtonGroup from './ButtonGroup';

const renderComponent = (props) => shallow(<ButtonGroup {...props} />);

const Icon = () => (
  <span>🌭</span>
)

const buttons = [
  { value: 'Feed', icon: Icon},
  { value: 'Table', icon: Icon, onClick: () => console.log('additional console')},
];

describe('ButtonGroup component', () => {

  it('matches snapshot (set all props)', () => {
    const component = renderComponent({
      activeValue: 'Feed',
      buttons,
      onChange: () => console.log('changed')
    });
    expect(component).toMatchSnapshot();
  });
});
