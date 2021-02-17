import React from 'react';
import { shallow } from 'enzyme';

import TextInput from '.';

describe('TextInput component', () => {
  it('matches snapshot (default)', () => {
    const wrapper = shallow(<TextInput label="label" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot (all props)', () => {
    const wrapper = shallow(
      <TextInput
        label="label"
        errorText="errorText"
        IconLeft={() => {}}
        IconRight={() => {}}
        onChange={() => {}}
        before="before"
        after="after"
        type="number"
        labelPosition="left"
        required
        labelWidth="200px"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
