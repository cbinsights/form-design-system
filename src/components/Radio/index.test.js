import React from 'react';
import { shallow } from 'enzyme';

import Radio from '.';

describe('Radio component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
      <Radio label="Snapshot Label" name="snapshot-radio" value="test-value" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot (disabled)', () => {
    const wrapper = shallow(
      <Radio disabled label="Snapshot Label" name="snapshot-radio" value="test-value" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot (checked)', () => {
    const wrapper = shallow(
      <Radio label="Snapshot Label" name="snapshot-radio" value="test-value" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('fires change callback when checking', () => {
    const changeFn = jest.fn();
    const input = shallow(
      <Radio
        name="callback-test"
        onChange={changeFn}
        label="Test change"
        value="test-value"
      />
    ).find('input');

    expect(changeFn).not.toHaveBeenCalled();
    input.simulate('change', { target: { checked: true } });
    expect(changeFn).toHaveBeenCalled();
  });
});
