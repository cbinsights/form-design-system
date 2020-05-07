import React from 'react';
import { shallow } from 'enzyme';

import StackedButton from './StackedButton';

describe('StackedButton component', () => {

  it('matches snapshot (default props)', () => {
    const component = shallow(<StackedButton label="Button" />);
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot (set all props)', () => {
    const component = shallow(<StackedButton 
      Link={() => {}} disabled Icon={() => {}} label='button' isActive
    />);
    expect(component).toMatchSnapshot();
  });
});
