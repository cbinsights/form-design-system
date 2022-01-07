import React from 'react';
import { shallow } from 'enzyme';

import IconButton from '.';

describe('ButtonGroup component', () => {
  it('matches snapshot (default props)', () => {
    const component = shallow(<IconButton Icon={() => null} label="Label" />);
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot (set all props)', () => {
    const component = shallow(
      <IconButton
        Icon={() => null}
        label="Label"
        isActive={true}
        radius="circle"
        size="s"
        isLoading
        theme="aqua"
        isDestructive
        disabled
      />
    );
    expect(component).toMatchSnapshot();
  });
});
