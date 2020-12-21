import React from 'react';
import { shallow } from 'enzyme';

import Radio from '.';

// uuid will break snapshots, so we must mock it.
jest.mock('uuid/v4', () => jest.fn().mockReturnValue('mock-universal-unique-identifier'));

describe('Radio component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
      <Radio label="Snapshot Label" name="snapshot-radio" value="test-value" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot (disabled)', () => {
    const wrapper = shallow(
      <Radio disabled label="Snapshot Label" name="snapshot-radio" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot (checked)', () => {
    const wrapper = shallow(
      <Radio defaultChecked label="Snapshot Label" name="snapshot-radio" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('fires change callback when checking', () => {
    const changeFn = jest.fn();
    const input = shallow(
      <Radio name="callback-test" onChange={changeFn} label="Test change" />
    ).find('input');

    expect(changeFn).not.toHaveBeenCalled();
    input.simulate('change', { target: { checked: true } });
    expect(changeFn).toHaveBeenCalled();
  });
});
