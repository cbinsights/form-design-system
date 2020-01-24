import React from 'react';
import { shallow } from 'enzyme';

import Radio from './Radio';

// uuid will break snapshots, so we must mock it.
jest.mock('uuid/v4', () => jest.fn().mockReturnValue('mock-universal-unique-identifier'));

describe('Radio component', () => {

  it('matches snapshot', () => {
    const wrapper = shallow(<Radio label="Snapshot Label" name="snapshot-radio" value="test-value" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot (disabled)', () => {
    const wrapper = shallow(<Radio disabled label="Snapshot Label" name="snapshot-radio" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('fires change callback when checking', () => {
    const changeFn = jest.fn();
    const input = shallow(<Radio name="callback-test" onChange={changeFn} label="Test change" />)
      .find('input');

    expect(changeFn).not.toHaveBeenCalled();
    input.simulate('change', { target: { checked: true } })
    expect(changeFn).toHaveBeenCalled();
  });

  describe('Radio icons', () => {
    it('uses unchecked icon when unchecked', () => {
      const wrapper = shallow(<Radio name="unchecked-icon" label="unchecked" />);
      expect(wrapper.exists('RadioEmptyIcon')).toBe(true);
    });

    it('uses checked icon when checked', () => {
      const wrapper = shallow(<Radio name="checked-icon" checked label="checked" />);
      expect(wrapper.exists('RadioFilledIcon')).toBe(true);
    });
  });

  describe('`checked` prop', () => {

    it('sets initial state to unchecked when `checked` prop is NOT passed', () => {
      const input = shallow(<Radio name="unchecked-initial" />)
        .find('input');
      expect(input.prop('defaultChecked')).toBe(false);
    });

    it('sets initial state to checked when `checked` prop is passed', () => {
      const input = shallow(<Radio name="checked-initial" checked />)
        .find('input');
      expect(input.prop('defaultChecked')).toBe(true);
    });

  });

});
