import React from 'react';
import { shallow, mount } from 'enzyme';

import InputGroup from './InputGroup';

describe('InputGroup component', () => {
  it('matches snapshot (set all props)', () => {
    const wrapper = shallow(
      <InputGroup>
        <input type="text" />
        <input type="text" />
        <select name="type">
          <option value="1">Horse-size duck</option>
          <option value="2">Duck-size horse</option>
        </select>
      </InputGroup>
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe('Applies flex grow and shrink correctly', () => {
    const flexItems = mount(
      <InputGroup>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </InputGroup>
    ).find('.flexItem');

    it('applies shrink to first item', () => {
      expect(flexItems.first().hasClass('flexItem--shrink')).toBe(true);
    });

    it('applies shrink to last item', () => {
      expect(flexItems.last().hasClass('flexItem--shrink')).toBe(true);
    });

    it('does NOT apply shrink to middle items', () => {
      const itemsWithoutShrink = flexItems.filter(':not(.flexItem--shrink)');
      expect(itemsWithoutShrink).toHaveLength(2);
    });

  });

});
