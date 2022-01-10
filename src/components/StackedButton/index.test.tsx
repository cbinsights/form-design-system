import React from 'react';
import { shallow } from 'enzyme';

import StackedButton from '.';

describe('StackedButton component', () => {
  it('matches snapshot (default props)', () => {
    const component = shallow(<StackedButton label="Button" />);
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot (set all props)', () => {
    const component = shallow(
      <StackedButton
        Link={() => null}
        disabled
        Icon={() => null}
        label="button"
        isActive
      />
    );
    expect(component).toMatchSnapshot();
  });
});
