import React from 'react';
import { render, screen } from '@testing-library/react';

import Indicator from '.';

describe('Indicator component', () => {
  it('renders component (default props)', () => {
    render(<Indicator label="badge" />);
    expect(screen.getByText('badge')).toBeInTheDocument();
  });

  it('renders component (set all props)', () => {
    render(<Indicator label="badge" size="xs" data-test="test" />);
    expect(screen.getByText('badge')).toBeInTheDocument();
  });
});
