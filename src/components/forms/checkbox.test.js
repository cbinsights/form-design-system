import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from './Checkbox';

describe('Checkbox component', () => {

  it('matches snapshot (without label)', () => {
    const wrapper = shallow(<Checkbox name="snapshot_checkbox" showLabel={false} label="snapshot checkbox" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot (with label)', () => {
    const wrapper = shallow(<Checkbox label="Snapshot Label" name="snapshot_checkbox" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot (disabled)', () => {
    const wrapper = shallow(<Checkbox disabled label="Snapshot Label" name="snapshot_checkbox" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('fires change callback when checking', () => {
    const changeFn = jest.fn();
    const input = shallow(<Checkbox label="change callback" name="check-callback-test" onChange={changeFn} />)
      .find('input');

    expect(changeFn).not.toHaveBeenCalled();
    input.simulate('change', { target: { checked: true } })
    expect(changeFn).toHaveBeenCalled();
  });

  it('fires change callback when unchecking', () => {
    const changeFn = jest.fn();
    const input = shallow(<Checkbox defaultChecked label="unchecking callback" name="uncheck-callback-test" onChange={changeFn} />)
      .find('input');

    expect(changeFn).not.toHaveBeenCalled();
    input.simulate('change', { target: { checked: false } })
    expect(changeFn).toHaveBeenCalled();
  });

});
