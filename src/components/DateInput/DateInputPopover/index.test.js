import React from 'react';
import { shallow, mount } from 'enzyme';

import DateInputPopover from '.';
import { getPopperPlacement } from './util';

const Content = () => <p>popover content</p>;
const triggerJsx = <button>trigger</button>;

const SELECTOR_TRIGGER = '[aria-haspopup] button';

/**
 * @param {ReactWrapper} w enzyme react wrapper
 * @returns {Boolean} if the CSSTransition `in` prop is allowing the content to display
 */
const isPopperOpen = (w) => w.find('CSSTransition').prop('in');

describe('DateInputPopover component', () => {
  it('matches snapshot (default props)', () => {
    const wrapper = mount(
      <DateInputPopover trigger={triggerJsx}>
        <Content />
      </DateInputPopover>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('uses Portal by default', () => {
    const wrapper = mount(
      <DateInputPopover trigger={triggerJsx}>
        <Content />
      </DateInputPopover>
    );
    expect(wrapper.exists('Portal')).toBe(true);
  });

  it('does NOT use Portal when disablePortal is set', () => {
    const wrapper = mount(
      <DateInputPopover trigger={triggerJsx} disablePortal>
        <Content />
      </DateInputPopover>
    );
    expect(wrapper.exists('Portal')).toBe(false);
  });

  it('ignores `isOpen` prop when not in controlled mode', () => {
    const wrapper = shallow(
      <DateInputPopover trigger={triggerJsx} isOpen>
        <Content />
      </DateInputPopover>
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

  describe('interactionMode="controlled"', () => {
    const mountControlled = (isOpen, onUserDismiss) =>
      mount(
        <DateInputPopover
          trigger={triggerJsx}
          interactionMode="controlled"
          isOpen={isOpen}
          onUserDismiss={onUserDismiss}
        >
          <Content />
        </DateInputPopover>
      );

    it('can not be opened via user event if isOpen is false', () => {
      const wrapper = mountControlled(false);
      const triggerEl = wrapper.find(SELECTOR_TRIGGER);
      expect(isPopperOpen(wrapper)).toBe(false);
      triggerEl.simulate('click');
      expect(isPopperOpen(wrapper)).toBe(false);
    });

    it('can not be closed via user event if isOpen is true', () => {
      const wrapper = mountControlled(true);
      const triggerEl = wrapper.find(SELECTOR_TRIGGER);
      expect(isPopperOpen(wrapper)).toBe(true);

      // click on trigger to close
      triggerEl.simulate('click');
      expect(isPopperOpen(wrapper)).toBe(true);

      // click away
      triggerEl.simulate('click', { target: '<p>lol not the popover</p>' });
      expect(isPopperOpen(wrapper)).toBe(true);
    });
  });

  describe('interactionMode="click"', () => {
    let wrapper;
    let triggerEl;

    beforeEach(() => {
      wrapper = mount(
        <DateInputPopover trigger={triggerJsx} interactionMode="click">
          <Content />
        </DateInputPopover>
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
        <DateInputPopover trigger={triggerJsx} interactionMode="hover">
          <Content />
        </DateInputPopover>
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

      triggerEl.simulate('keydown', { key: 'Tab' });
      expect(isPopperOpen(wrapper)).toBe(false);
    });

    it('closes on mouseleave outside of DateInputPopover elements', () => {
      expect(isPopperOpen(wrapper)).toBe(false);

      triggerEl.simulate('mouseenter');
      expect(isPopperOpen(wrapper)).toBe(true);

      triggerEl.simulate('mouseleave', { target: '<p>lol not the popover</p>' });
      expect(isPopperOpen(wrapper)).toBe(false);
    });
  });
});
