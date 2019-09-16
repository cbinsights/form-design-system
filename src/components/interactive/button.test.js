import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

const renderComponent = (props) => shallow(<Button {...props} />);

const buttons = {
  Link: () => {}, isLoading: true, isDestructive: true, disabled: true, iconPlacement: 'left',
  Icon: () => {}, block: true, theme: 'outlined'
};

describe('ButtonGroup component', () => {

  it('matches snapshot (default props)', () => {
    const component = renderComponent({ children: 'Button' });
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot (set all props)', () => {
    const component = renderComponent(buttons);
    expect(component).toMatchSnapshot();
  });
});
