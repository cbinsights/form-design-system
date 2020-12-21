import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import GapList from '.';

describe('GapList component', () => {
  it('renders the items passed', () => {
    render(<GapList items={['why', 'did', 'it', 'have', 'to', 'be', 'snakes?']} />);
    expect(screen.getByText('why')).toBeTruthy();
    expect(screen.getByText('did')).toBeTruthy();
    expect(screen.getByText('it')).toBeTruthy();
    expect(screen.getByText('have')).toBeTruthy();
    expect(screen.getByText('to')).toBeTruthy();
    expect(screen.getByText('be')).toBeTruthy();
    expect(screen.getByText('snakes?')).toBeTruthy();
  });

  it('applies correct gap classes', () => {
    render(<GapList xGap="xl" yGap="l" items={['hello']} />);
    expect(screen.getByText('hello')).toHaveClass('margin--x--xl');
    expect(screen.getByText('hello')).toHaveClass('margin--y--l');
  });
});
