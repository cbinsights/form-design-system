import React from 'react';
import { render, screen } from '@testing-library/react';

import IconButton from '.';

describe('ButtonGroup component', () => {
  it('renders component (default props)', () => {
    render(<IconButton Icon={() => null} label="Label" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders component (set all props)', () => {
    render(
      <IconButton
        Icon={() => null}
        label="Label"
        isActive={true}
        radius="circle"
        size="s"
        isLoading
        theme="aqua"
        isDestructive
        disabled
      />
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
