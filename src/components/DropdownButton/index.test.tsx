import React from 'react';
import { render } from '@testing-library/react';
import DropdownButton from '.';

describe('DropdownButton component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<DropdownButton>Dropdown</DropdownButton>);
    const child = getByText('Dropdown');
    expect(child).toBeDefined();
  });
});
