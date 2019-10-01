import React from 'react';
import { shallow } from 'enzyme';

import Section, { getPaddingClasses, getBorderClasses } from './Section';

const renderComponent = (props) => shallow(<Section {...props}>Content</Section>);

describe('Section component', () => {

  it('matches snapshot (default props)', () => {
    const section = renderComponent();
    expect(section).toMatchSnapshot();
  });

  it('matches snapshot (all props set to user value)', () => {
    /* should also include `inverted` class for navy sections */
    const section = renderComponent({
      hPadding: 'double',
      vPadding: 'half',
      bgColor: 'navy',
      border: 'y',
    });
    expect(section).toMatchSnapshot();
  });

  describe('getPaddingClasses', () => {
    it('handles default padding', () => {
      const actual = getPaddingClasses('x', 'default');
      const expected = 'padding--left padding--right';
      expect(actual).toBe(expected);
    });
    it('handles double padding', () => {
      const actual = getPaddingClasses('y', 'double');
      const expected = 'padding--top--double padding--bottom--double';
      expect(actual).toBe(expected);
    });
  })

  describe('getBorderClasses', () => {
    it('sets border class for a specific direction', () => {
      const actual = getBorderClasses('top');
      const expected = 'border--top';
      expect(actual).toBe(expected);
    });
    it('sets border class for "all"', () => {
      const actual = getBorderClasses('all');
      const expected = 'border--all';
      expect(actual).toBe(expected);
    });
    it('sets border class for "h" sides', () => {
      const actual = getBorderClasses('x');
      const expected = 'border--left border--right';
      expect(actual).toBe(expected);
    });
    it('sets border class for "v" sides', () => {
      const actual = getBorderClasses('y');
      const expected = 'border--top border--bottom';
      expect(actual).toBe(expected);
    });
  })

});
