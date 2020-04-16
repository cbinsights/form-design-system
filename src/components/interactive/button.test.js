import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('ButtonGroup component', () => {

  it('matches snapshot (default props)', () => {
    const component = shallow(<Button label="Button" />);
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot (set all props)', () => {
    const component = shallow(<Button 
      label="Button" Link={() => {}} isLoading isDestructive disabled IconLeft={() => {}} IconRight={() => {}} isFullWidth theme='outlined' hasCaret
    />)
    expect(component).toMatchSnapshot();
  });
});
