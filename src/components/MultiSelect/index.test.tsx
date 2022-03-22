import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MultiSelect from '.';

describe('<MultiSelect />', () => {
  it('renders <MultiSelect />', () => {
    render(<MultiSelect />);
    expect(screen.queryByRole('combobox')).toBeInTheDocument();
  });

  it('changes value on user input', () => {
    render(<MultiSelect />);
    const input = screen.queryByRole<HTMLInputElement>('combobox');
    userEvent.type(input, 'apple');
    expect(input.value).toEqual('apple');
  });
});
