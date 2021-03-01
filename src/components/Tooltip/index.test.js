import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import Tooltip from '.';

describe('Tooltip component', () => {
  it('tests that message gets rendered on hover', async () => {
    render(<Tooltip trigger={<button>trigger</button>} message="lol" />);
    userEvent.hover(screen.getByText('trigger'));
    await waitFor(() => {
      expect(screen.getByText('lol')).toBeTruthy();
    });
  });
});
