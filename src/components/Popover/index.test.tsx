import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import Popover from '.';

describe('Popover component', () => {
  it('tests that trigger text gets rendered', () => {
    render(
      <Popover trigger={<button>trigger</button>}>
        <p>popover content</p>
      </Popover>
    );
    expect(screen.queryByText('popover content')).toBeNull();
    expect(screen.getByText('trigger')).toBeInTheDocument();
  });

  it('tests that trigger and content text gets rendered', () => {
    render(
      <Popover isOpen trigger={<button>trigger</button>} interactionMode="controlled">
        <p>popover content</p>
      </Popover>
    );
    expect(screen.getByText('trigger')).toBeInTheDocument();
    expect(screen.getByText('popover content')).toBeInTheDocument();
  });
});
