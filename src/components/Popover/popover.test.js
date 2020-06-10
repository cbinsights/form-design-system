import React from 'react';
import { shallow, mount } from 'enzyme';

import Popover from '.';
import { getPopperPlacement } from './util';

const Content = () => (<p>popover content</p>);
const triggerJsx = (<button>trigger</button>);

const SELECTOR_TRIGGER = '[aria-haspopup] button';

/**
 * @param {ReactWrapper} w enzyme react wrapper
 * @returns {Boolean} if the CSSTransition `in` prop is allowing the content to display
 */
const isPopperOpen = (w) => w.find('CSSTransition').prop('in');

describe('Popover component', () => {

  it('matches snapshot (default props)', () => {
    const wrapper = mount(<Popover trigger={triggerJsx}><Content /></Popover>);
    expect(wrapper).toMatchSnapshot();
  });

  it('uses Portal by default', () => {
    const wrapper = mount(<Popover trigger={triggerJsx}><Content /></Popover>);
    expect(wrapper.exists('Portal')).toBe(true);
  });

  it('does NOT use Portal when disablePortal is set', () => {
    const wrapper = mount(<Popover trigger={triggerJsx} disablePortal><Content /></Popover>);
    expect(wrapper.exists('Portal')).toBe(false);
  });

  it('ignores `isOpen` prop when not in controlled mode', () => {
    const wrapper = shallow(
      <Popover
        trigger={triggerJsx}
        isOpen
      >
        <Content />
      </Popover>
    );
    expect(isPopperOpen(wrapper)).toBe(false);
  });

  describe('getPopperPlacement', () => {
    it('returns an alignment in the placement', () => {
      const actual = getPopperPlacement('bottom', 'start');
      const expected = 'bottom-start';
      expect(actual).toBe(expected);
    });
    it('does not return alignment when none is passed in', () => {
      const actual = getPopperPlacement('bottom');
      const expected = 'bottom';
      expect(actual).toBe(expected);
    });
    it('does not return placement alignment when "center" alignment is passed', () => {
      const actual = getPopperPlacement('bottom', 'center');
      const expected = 'bottom';
      expect(actual).toBe(expected);
    });
  });

  describe('interactionMode="click"', () => {
    let wrapper;
    let triggerEl;
    let onOpen;
    let onClose;

    beforeEach(() => {
      onOpen = jest.fn()
      onClose = jest.fn()
      wrapper = mount(
        <Popover trigger={triggerJsx} interactionMode="click" onOpen={onOpen} onClose={onClose} >
          <Content />
        </Popover>
      );
      triggerEl = wrapper.find(SELECTOR_TRIGGER);
    });

    afterEach(() => {
      wrapper = null;
      triggerEl = null;
    });

    it('adds click-related props to trigger', () => {
      const triggerPropNames = Object.keys(triggerEl.props());
      expect(triggerPropNames).toContain('onClick');
    });

    it('opens and closes popover on trigger clicks', () => {
      expect(isPopperOpen(wrapper)).toBe(false);

      triggerEl.simulate('click');
      expect(isPopperOpen(wrapper)).toBe(true);
      expect(onOpen).toHaveBeenCalled()

      triggerEl.simulate('click');
      expect(isPopperOpen(wrapper)).toBe(false);
      expect(onClose).toHaveBeenCalled()
    });

    it('closes on clicks away from popover', () => {
      expect(isPopperOpen(wrapper)).toBe(false);

      triggerEl.simulate('click');
      expect(isPopperOpen(wrapper)).toBe(true);
      expect(onOpen).toHaveBeenCalled()

      triggerEl.simulate('click', { target: '<p>lol not the popover</p>' });
      expect(isPopperOpen(wrapper)).toBe(false);
      expect(onClose).toHaveBeenCalled()
    });
  });

  describe('interactionMode="hover"', () => {
    let wrapper;
    let triggerEl;
    let onOpen;
    let onClose;

    beforeEach(() => {
      onOpen = jest.fn()
      onClose = jest.fn()
      wrapper = mount(
        <Popover trigger={triggerJsx} interactionMode="hover"  onOpen={onOpen} onClose={onClose} >
          <Content />
        </Popover>
      );
      triggerEl = wrapper.find(SELECTOR_TRIGGER);
    });

    afterEach(() => {
      wrapper = null;
      triggerEl = null;
    });

    it('adds hover-related props to trigger', () => {
      const triggerPropNames = Object.keys(triggerEl.props());
      ['onMouseEnter', 'onKeyUp', 'onKeyDown', 'tabIndex'].forEach((prop) => {
        expect(triggerPropNames).toContain(prop);
      });
    });

    it('opens and closes popover on keyboard navigating in and out via Tab', () => {
      expect(isPopperOpen(wrapper)).toBe(false);

      triggerEl.simulate('keyup', { key: 'Tab' });
      expect(isPopperOpen(wrapper)).toBe(true);
      expect(onOpen).toHaveBeenCalled()

      triggerEl.simulate('keydown', { key: 'Tab' });
      expect(isPopperOpen(wrapper)).toBe(false);
      expect(onClose).toHaveBeenCalled()
    });

    it('closes on mouseleave outside of Popover elements', () => {
      expect(isPopperOpen(wrapper)).toBe(false);

      triggerEl.simulate('mouseenter');
      expect(isPopperOpen(wrapper)).toBe(true);
      expect(onOpen).toHaveBeenCalled()

      triggerEl.simulate('mouseleave', { target: '<p>lol not the popover</p>' });
      expect(isPopperOpen(wrapper)).toBe(false);
      expect(onClose).toHaveBeenCalled()
    });

  });

});
