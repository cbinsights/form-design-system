import React from 'react';
import { render, screen } from '@testing-library/react';

import DecoratedInput from '.';

describe('DecoratedInput component', () => {
  it('renders an input', () => {
    render(
      <DecoratedInput before="left boi" after="right boi">
        <input type="text" />
      </DecoratedInput>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
