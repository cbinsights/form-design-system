import React from 'react';
import { render, screen } from '@testing-library/react';

import Loading from '.';

describe('Loading component', () => {
  it('renders correctly as notif with label', () => {
    render(<Loading />);
    expect(screen.getByRole('img')).toBeTruthy();
  });
});
