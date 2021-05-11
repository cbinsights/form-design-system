import React from 'react';
import { render, screen } from '@testing-library/react';

import DateInputPopover from '.';

describe('DateInputPopover component', () => {
  it('tests that trigger text gets rendered', () => {
    render(
      <DateInputPopover trigger={<button>trigger</button>}>
        <p>popover content</p>
      </DateInputPopover>
    );
    expect(screen.queryByText('popover content')).toBeNull();
    expect(screen.getByText('trigger')).toBeTruthy();
  });

  it('tests that trigger and content text gets rendered', () => {
    render(
      <DateInputPopover
        isOpen
        trigger={<button>trigger</button>}
        interactionMode="controlled"
      >
        <p>popover content</p>
      </DateInputPopover>
    );
    expect(screen.getByText('trigger')).toBeTruthy();
    expect(screen.getByText('popover content')).toBeTruthy();
  });
});
