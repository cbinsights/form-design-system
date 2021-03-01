import React from 'react';
import { shallow } from 'enzyme';

import ButtonGroup from '.';

const renderComponent = (props) => shallow(<ButtonGroup {...props} />);

const Icon = () => <span>🌭</span>;

const buttons = [
  { label: 'Feed', Icon, isActive: true },
  { label: 'Table', Icon, onClick: () => {}, disabled: true },
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
      onChange: () => {},
    });
    expect(component).toMatchSnapshot();
  });
});
