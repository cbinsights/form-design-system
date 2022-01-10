import React from 'react';
import { render, screen } from '@testing-library/react';

import CountdownButton, { getCircleInfo, CircleInfo } from '.';

const MOCK_PROPS = { duration: 666 };

describe('CountdownButton', () => {
  it('renders component', () => {
    render(<CountdownButton {...MOCK_PROPS} />);
    expect(screen.getByTitle('Close')).toBeInTheDocument();
  });

  describe('CountdownButton animation', () => {
    it('starts stroke at 0 on component mount', async () => {
      render(<CountdownButton {...MOCK_PROPS} />);
      const circle = screen.getByRole('alert');
      expect(
        window.getComputedStyle(circle).getPropertyValue('stroke-dashoffset')
      ).toEqual('0');
    });
  });
});

describe('getCircleInfo', () => {
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
});
