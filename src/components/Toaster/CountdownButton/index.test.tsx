import React from 'react';
import { shallow, mount } from 'enzyme';

import CountdownButton, { CountdownButtonProps, getCircleInfo, CircleInfo } from '.';

const renderComponent = (props: CountdownButtonProps) =>
  shallow(<CountdownButton {...props} />);

const MOCK_PROPS = { duration: 666 };

describe('CountdownButton', () => {
  it('matches snapshot', () => {
    const component = renderComponent(MOCK_PROPS);
    expect(component).toMatchSnapshot();
  });

  it('calculates circle dimensions correctly', () => {
    const actual = getCircleInfo(90, 10);
    const expected: CircleInfo = {
      radius: 40,
      circumference: Math.PI * 40 * 2,
      centerOffset: 45,
    };

    Object.keys(expected).forEach((k) => {
      expect(actual[k]).toEqual(expected[k]);
    });
  });

  describe('CountdownButton animation', () => {
    const component = mount(<CountdownButton {...MOCK_PROPS} />);
    const { strokeDashoffset } = component.find('circle').get(0).props.style;

    it('shows a full timer stroke on mount', () => {
      expect(strokeDashoffset).toBe(0);
    });
  });
});
