import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Popover from '.';

describe('Popover component', () => {

  it('tests that trigger text gets rendered', () => {
    render(<Popover triggerElement={<button>trigger</button>}><p>popover content</p></Popover>);
    expect(screen.queryByText('popover content')).toBeNull();
    expect(screen.getByText('trigger')).toBeTruthy();
  });

  it('tests that trigger and content text gets rendered', () => {
    render(<Popover isOpen triggerElement={<button>trigger</button>}><p>popover content</p></Popover>);
    expect(screen.getByText('popover content')).toBeTruthy();
    expect(screen.getByText('trigger')).toBeTruthy();
  });

});
