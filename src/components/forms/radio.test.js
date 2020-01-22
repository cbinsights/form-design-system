import React from 'react';
import uuidv4 from 'uuid/v4';
import { shallow, mount } from 'enzyme';

// uuid will break snapshots, so we must mock it.
jest.mock('uuid/v4', () => jest.fn().mockReturnValue('mock-universal-unique-identifier'));

import Radio from './Radio';

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

});
