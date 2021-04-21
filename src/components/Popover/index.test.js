import React from 'react';
import { render, screen } from '@testing-library/react';

import Popover from '.';

describe('Popover component', () => {
  it('tests that trigger text gets rendered', () => {
    render(
      <Popover trigger={<button>trigger</button>}>
        <p>popover content</p>
      </Popover>
    );
    expect(screen.queryByText('popover content')).toBeNull();
    expect(screen.getByText('trigger')).toBeTruthy();
  });

  it('tests that trigger and content text gets rendered', () => {
    render(
      <Popover isOpen trigger={<button>trigger</button>} interactionMode="controlled">
        <p>popover content</p>
      </Popover>
    );
    expect(screen.getByText('trigger')).toBeTruthy();
    expect(screen.getByText('popover content')).toBeTruthy();
  });
});
