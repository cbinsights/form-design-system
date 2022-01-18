import React from 'react';
import { render, screen } from '@testing-library/react';

import FloatingAction from '.';

describe('FloatingAction component', () => {
  it('renders component (set all props)', () => {
    render(<FloatingAction Icon={() => null} label="delete the internet" />);
    expect(screen.getByTitle('delete the internet')).toBeInTheDocument();
  });
});
