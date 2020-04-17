import React from 'react';
import { mount } from 'enzyme';

import Button from './Button';

describe('ButtonGroup component', () => {

  it('matches snapshot (default props)', () => {
    const component = mount(<Button label="Button" />);
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot (set all props)', () => {
    const component = mount(<Button 
      label="Button" Link={(props) => <a href="#" {...props} />} isLoading isDestructive disabled IconLeft={"Icon"} IconRight={"Icon"} isFullWidth theme='outlined' hasCaret
    />)
    expect(component).toMatchSnapshot();
  });
});
