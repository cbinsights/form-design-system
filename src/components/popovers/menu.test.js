import React from 'react';
import { shallow } from 'enzyme';

import Menu from './Menu';

describe('Popover component', () => {

  /**
   * `@reach/menu-button` has its own test coverage.
   * FDS provides only styling overrides, so snapshots will be adequate coverage for our code.
   */
  it('matches snapshot (string items)', () => {
    const wrapper = mount(
      <Menu trigger={<button>trigger</button>}>
        <MenuItem>First</MenuItem>
        <MenuItem>Second</MenuItem>
        <MenuItem>Third</MenuItem>
      </Menu>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('matches snapshot (JSX items)', () => {
    const wrapper = mount(
      <Menu trigger={<button>trigger</button>}>
        <MenuItem><p>First</p></MenuItem>
        <MenuItem><p>Second</p></MenuItem>
        <MenuItem><p>Third</p></MenuItem>
      </Menu>
    );
    expect(wrapper).toMatchSnapshot();
  });

});
