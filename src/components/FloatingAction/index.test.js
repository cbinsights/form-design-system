import React from 'react';
import { shallow } from 'enzyme';

import FloatingAction from '.';

describe('FloatingAction component', () => {
  it('matches snapshot (set all props)', () => {
    const component = shallow(
      <FloatingAction Icon={() => {}} label="delete the internet" />
    );
    expect(component).toMatchSnapshot();
  });
});
