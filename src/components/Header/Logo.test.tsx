import React from 'react';
import { render } from '@testing-library/react';

import Logo from './Logo';

describe('Logo component', () => {
  it('should include alt property', () => {
    const { getByAltText } = render(<Logo src="src" />);
    expect(getByAltText('logo')).toBeInTheDocument();
  });
});
