import React from 'react';
import { shallow, mount } from 'enzyme';
import Dialog from './Dialog'

describe('Dialog component', () => {

  // Dialog component uses a library that uses window.scroll underneath the hood
  // so we just need to add this here to avoid errors
  window.scroll = () => {}

  it('dismisses modal when close icon is clicked', () => {
    const dismissFn = jest.fn()
    const wrapper = mount(<Dialog isOpen={true} onDismiss={dismissFn} content={<button>hey</button>} />);
    wrapper.find('.dialog-icon').simulate('click');
    expect(dismissFn).toHaveBeenCalled();
  });

  it('locks scrolling when visible', () => {
    mount(<Dialog isOpen={true} content={<button>hey</button>} />);
    expect(document.documentElement.style.overflow).toBe('hidden');
  });

  it('does not lock scrolling when not visible', () => {
    mount(<Dialog content={<button>hey</button>} />);
    expect(document.documentElement.style.overflow).toBe('');
  });

  it('matches snapshot (default props)', () => {
    const component = shallow(<Dialog isOpen={true} content="foo" />);
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot (set all props)', () => {
    const component = shallow(
      <Dialog 
        content="foo" 
        role="alertdialog" 
        isOpen={true} 
        canDismiss={true} 
        footerContent={<div>foo</div>} 
        content={<p>bar</p>} 
        title="hey" 
        onDismiss={(() => {})} 
      />
    );
    expect(component).toMatchSnapshot();
  });

})