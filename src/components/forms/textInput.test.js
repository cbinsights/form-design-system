import React from 'react';
import { shallow, mount } from 'enzyme';

import TextInput from './TextInput';

describe('TextInput component', () => {
  it('matches snapshot (default)', () => {
    const wrapper = shallow(<TextInput />);
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot (default)', () => {
    const wrapper = shallow(
      <TextInput 
        label="label"
        errorText="errorText"
        IconLeft={() => {}}
        IconRight={() => {}}
        onChange={() => {}}
        throttleOnChange={() => {}}
        before="before"
        after="after"
        type="number"
        required
      />
    );
    expect(wrapper).toMatchSnapshot();
  });


});
