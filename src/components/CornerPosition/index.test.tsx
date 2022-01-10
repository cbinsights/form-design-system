import React from 'react';
import { render, screen } from '@testing-library/react';

import CornerPosition from '.';

describe('CornerPosition component', () => {
  it('renders component', () => {
    render(
      <CornerPosition decoration={<span>42</span>}>
        <div />
      </CornerPosition>
    );
    expect(screen.getByText('42')).toBeInTheDocument();
  });
});
