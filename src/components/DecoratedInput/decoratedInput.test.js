import React from 'react';
import { shallow } from 'enzyme';

import DecoratedInput from '.';

describe('DecoratedInput component', () => {
  it('matches snapshot (set all props)', () => {
    const wrapper = shallow(
      <DecoratedInput
        before="left boi"
        after="right boi"
      >
        <input type="text" />
      </DecoratedInput>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('does NOT add data attribute for before if undefined', () => {
    const wrapper = shallow(
      <DecoratedInput
        after="right boi"
      >
        <input type="text" />
      </DecoratedInput>
    );
    expect(wrapper.exists('[data-after]')).toBe(true);
    expect(wrapper.exists('[data-before]')).toBe(false);
  });

  it('does NOT add data attribute for after if undefined', () => {
    const wrapper = shallow(
      <DecoratedInput
        before="left boi"
      >
        <input type="text" />
      </DecoratedInput>
    );
    expect(wrapper.exists('[data-after]')).toBe(false);
    expect(wrapper.exists('[data-before]')).toBe(true);
  });
});
