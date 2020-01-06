import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

const renderComponent = (props) => shallow(<Button {...props} />);

const buttons = {
  Link: () => {}, disabled: true, Icon: () => {}, label: 'button', isActive: true
};

describe('ButtonGroup component', () => {

  it('matches snapshot (default props)', () => {
    const component = renderComponent({ label: 'Button' });
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot (set all props)', () => {
    const component = renderComponent(buttons);
    expect(component).toMatchSnapshot();
  });
});
