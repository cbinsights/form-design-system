import React from 'react';
import { shallow, mount } from 'enzyme';

import CountdownButton, { getCircleInfo } from './CountdownButton';

const renderComponent = (props) => shallow(<CountdownButton {...props} />);

const MOCK_PROPS = { duration: 666 };

describe('CountdownButton', () => {

  it('matches snapshot', () => {
    const component = renderComponent(MOCK_PROPS);
    expect(component).toMatchSnapshot();
  });

  it('renders a custom icon', () => {
    const testClass = 'customIcon';
    const component = renderComponent({
      icon: <div className={testClass} />,
      ...MOCK_PROPS
    });

    expect(component.find(`.${testClass}`)).toHaveLength(1);
  });

  it('calculates circle dimensions correctly', () => {
    const actual = getCircleInfo(90, 10);
    const expected = {
      r: 40,
      c: Math.PI * 40 * 2,
      centerOffset: 45
    };

    Object.keys(expected).forEach((k) => {
      expect(actual[k]).toEqual(expected[k])
    })
  })

  describe('CountdownButton animation', () => {
    const component = mount(<CountdownButton {...MOCK_PROPS} />);
    const { strokeDashoffset } = component.find('circle').get(0).props.style;

    it('shows a full timer stroke on mount', () => {
      expect(strokeDashoffset).toBe(0);
    });

  });
});
