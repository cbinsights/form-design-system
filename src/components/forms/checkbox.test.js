import React from 'react';
import uuidv4 from 'uuid/v4';
import { shallow } from 'enzyme';

// uuid will break snapshots, so we must mock it.
jest.mock('uuid/v4', () => jest.fn().mockReturnValue('mock-universal-unique-identifier'));

import Checkbox from './Checkbox';

describe('Checkbox component', () => {

  it('matches snapshot (without label)', () => {
    const wrapper = shallow(<Checkbox name="snapshot_checkbox" label="snapshot checkbox" onChange={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot (with label)', () => {
    const wrapper = shallow(<Checkbox label="Snapshot Label" name="snapshot_checkbox" onChange={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot (disabled)', () => {
    const wrapper = shallow(<Checkbox disabled label="Snapshot Label" name="snapshot_checkbox" onChange={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('fires change callback when checking', () => {
    const changeFn = jest.fn();
    const input = shallow(<Checkbox name="check-callback-test" onChange={changeFn} />)
      .find('input');

    expect(changeFn).not.toHaveBeenCalled();
    input.simulate('change', { target: { checked: true } })
    expect(changeFn).toHaveBeenCalled();
  });

  it('fires change callback when unchecking', () => {
    const changeFn = jest.fn();
    const input = shallow(<Checkbox checked name="uncheck-callback-test" onChange={changeFn} />)
      .find('input');

    expect(changeFn).not.toHaveBeenCalled();
    input.simulate('change', { target: { checked: false } })
    expect(changeFn).toHaveBeenCalled();
  });

  describe('`checked` prop', () => {

    it('sets initial state to unchecked when `checked` prop is NOT passed', () => {
      const input = shallow(<Checkbox name="unchecked-initial" />)
        .find('input');
      expect(input.prop('checked')).toBe(false);
    });

    it('sets initial state to checked when `checked` prop is passed', () => {
      const input = shallow(<Checkbox name="checked-initial" checked />)
        .find('input');
      expect(input.prop('checked')).toBe(true);
    });

  });

  describe('checkbox icons', () => {

    it('uses unchecked icon when unchecked', () => {
      const wrapper = shallow(<Checkbox name="unchecked-icon" />);
      expect(wrapper.exists('CheckEmptyIcon')).toBe(true);
    });

    it('uses checked icon when checked', () => {
      const wrapper = shallow(<Checkbox name="checked-icon" checked />);
      expect(wrapper.exists('CheckFilledIcon')).toBe(true);
    });

    it('uses indeterminate check icon when `indeterminate` prop is passed and is checked', () => {
      const wrapper = shallow(<Checkbox name="indeterminate-initial" checked indeterminate />);
      expect(wrapper.exists('CheckIndeterminateIcon')).toBe(true);
    });

  });

});
