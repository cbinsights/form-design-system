import React from 'react';
import { shallow, mount } from 'enzyme';

import TextInput, { throttleInput } from './TextInput';

describe('TextInput component', () => {

  it('fires throttleFunctions', () => {
    const throttleFn = jest.fn()
    const wrapper = mount(<TextInput onThrottledChange={throttleFn} />);
    const input = wrapper.find('input')
    input.simulate('change', { target: { value: 'aaa' } });
    expect(throttleFn).toHaveBeenCalled();
  });

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
        onThrottledChange={() => {}}
        before="before"
        after="after"
        type="number"
        required
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

});

describe('throttleInput', () => {
  let throttleFn;
  let debounceFn

  beforeEach(() => {
    throttleFn = jest.fn();
    debounceFn = jest.fn();
  })

  it('calls throttleFn when less than 5 characters', () => {
    throttleInput('aaa', throttleFn, debounceFn)
    expect(throttleFn).toHaveBeenCalled();
    expect(debounceFn).not.toHaveBeenCalled();
  });

  it('calls throttleFn when a space is the last character', () => {
    throttleInput('aaaaaaaaaaa ', throttleFn, debounceFn)
    expect(throttleFn).toHaveBeenCalled();
    expect(debounceFn).not.toHaveBeenCalled();
  });

  it('calls debounceFn with 5 characters or more', () => {
    throttleInput('aaaaa', throttleFn, debounceFn)
    expect(throttleFn).not.toHaveBeenCalled();
    expect(debounceFn).toHaveBeenCalled();
  });

});
