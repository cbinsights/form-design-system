import React from 'react';
import { render, screen } from '@testing-library/react';

import TextInput from '.';

describe('TextInput component', () => {
  it('renders component (default props)', () => {
    render(<TextInput label="label" />);
    expect(screen.getByRole('textbox', { name: 'label' })).toBeInTheDocument();
  });

  it('renders component (all props)', () => {
    render(
      <TextInput
        label="label"
        errorText="errorText"
        onChange={() => {}}
        before="before"
        after="after"
        type="number"
        labelPosition="left"
        required
        labelWidth="200px"
      />
    );
    expect(screen.getByRole('spinbutton', { name: 'label' })).toBeInTheDocument();
  });
});
