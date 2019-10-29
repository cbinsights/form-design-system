import React from 'react';
import { shallow, mount } from 'enzyme';

import Popover, { getPopperPlacement } from './Popover';

const Trigger = () => (<button>trigger</button>);
const Content = () => (<p>popover content</p>);

const SELECTOR_TRIGGER = '[aria-haspopup] > div';
const SELECTOR_CONTENT = 'Popper'; // react-popper content displayName

/**
 * @param {ReactWrapper} w enzyme react wrapper
 * @returns {Boolean} if the popper exists in the DOM
 */
const isPopperOpen = (w) => w.exists(SELECTOR_CONTENT);


describe('Popover component', () => {

  it('matches snapshot (default props)', () => {
    const wrapper = mount(
      <Popover trigger={<Trigger />}>
        <Content />
      </Popover>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('ignores `isOpen` prop when not in controlled mode', () => {
    const wrapper = shallow(
      <Popover
        trigger={<Trigger />}
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

    beforeEach(() => {
      wrapper = mount(
        <Popover trigger={<Trigger />} interactionMode="click">
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
      triggerEl.simulate('click');
      expect(isPopperOpen(wrapper)).toBe(false);
    });

    it('closes on clicks away from popover', () => {
      expect(isPopperOpen(wrapper)).toBe(false);
      triggerEl.simulate('click');
      expect(isPopperOpen(wrapper)).toBe(true);
      triggerEl.simulate('click', { target: '<p>lol not the popover</p>' });
      expect(isPopperOpen(wrapper)).toBe(false);
    });
  });

  describe('interactionMode="hover"', () => {
    let wrapper;
    let triggerEl;

    beforeEach(() => {
      wrapper = mount(
        <Popover trigger={<Trigger />} interactionMode="hover">
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
      ['onMouseEnter', 'onFocus', 'onBlur', 'tabIndex'].forEach((prop) => {
        expect(triggerPropNames).toContain(prop);
      });
    });

    it('opens and closes popover on focus/blur', () => {
      expect(isPopperOpen(wrapper)).toBe(false);
      triggerEl.simulate('focus');
      expect(isPopperOpen(wrapper)).toBe(true);
      triggerEl.simulate('blur');
      expect(isPopperOpen(wrapper)).toBe(false);
    });

    it('opens on hover', () => {
      expect(isPopperOpen(wrapper)).toBe(false);
      triggerEl.simulate('mouseenter');
      expect(isPopperOpen(wrapper)).toBe(true);
    });

    it('closes on mousemove outside of Popover elements', () => {
      expect(isPopperOpen(wrapper)).toBe(false);
      triggerEl.simulate('mouseenter');
      expect(isPopperOpen(wrapper)).toBe(true);
      triggerEl.simulate('mousemove', { target: '<p>lol not the popover</p>' });
    });

  });

});
