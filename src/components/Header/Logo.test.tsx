import React from 'react';
import { render, screen } from '@testing-library/react';

import Logo from './Logo';

describe('Logo component', () => {
  it('should include alt property', () => {
    render(<Logo src="src" />);
    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });
});
