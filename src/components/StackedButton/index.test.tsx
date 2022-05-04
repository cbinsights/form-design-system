import React from 'react';
import { render, screen } from '@testing-library/react';

import StackedButton from '.';

describe('StackedButton component', () => {
  it('renders component (default props)', () => {
    render(<StackedButton label="Button" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders component (set all props)', () => {
    render(
      <StackedButton
        Link={() => <a href="#"></a>}
        disabled
        Icon={() => null}
        label="button"
        isActive
      />
    );
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
