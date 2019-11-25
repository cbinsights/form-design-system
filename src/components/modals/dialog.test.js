import React from 'react';
import { mount } from 'enzyme';
import Dialog from './Dialog'

describe('Dialog component', () => {

  it('dismisses modal when close icon is clicked', () => {
    const dismissFn = jest.fn()
    const wrapper = mount(<Dialog isOpen={true} onDismiss={dismissFn} content={<button>hey</button>} />);
    wrapper.find('.dialog-icon').prop('onClick')();
    expect(dismissFn).toHaveBeenCalled();
  });

  it('dismisses modal when esc is pressed', () => {
    const dismissFn = jest.fn()
    const wrapper = mount(<Dialog isOpen={true} onDismiss={dismissFn} content={<button>hey</button>} />);
    wrapper.find('.dialog').prop('onKeyDown')({ key: 'Escape' })  
    expect(dismissFn).toHaveBeenCalled();
  });

})