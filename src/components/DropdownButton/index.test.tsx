import React from 'react';
import { screen, render } from '@testing-library/react';
import DropdownButton from '.';

describe('DropdownButton component', () => {
  it('renders correctly', () => {
    render(<DropdownButton>Dropdown</DropdownButton>);
    const child = screen.getByText('Dropdown');
    expect(child).toBeDefined();
  });
});
