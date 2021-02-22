import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Popover from '.';

describe('Popover component', () => {
  it('tests that trigger text gets rendered', async () => {
    render(
      <Popover triggerElement={<button>trigger</button>}>
        <p>popover content</p>
      </Popover>
    );
    expect(screen.queryByText('popover content')).toBeNull();
    await waitFor(() => expect(screen.getByText('trigger')).toBeTruthy());
  });

  it('tests that trigger and content text gets rendered', async () => {
    render(
      <Popover isOpen triggerElement={<button>trigger</button>}>
        <p>popover content</p>
      </Popover>
    );
    expect(screen.getByText('trigger')).toBeTruthy();
    await waitFor(() => expect(screen.getByText('popover content')).toBeTruthy());
  });
});
