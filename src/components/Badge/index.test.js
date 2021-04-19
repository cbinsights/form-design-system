import React from 'react';
import { render } from '@testing-library/react';

import Badge from '.';

const SELECTOR_NOTIF = '[aria-label="Notification badge"]';
const SELECTOR_COUNT = '[aria-label="Count badge"]';

describe('Badge component', () => {
  it('renders correctly as notif with label', () => {
    const { container } = render(<Badge label="666" />);
    const notif = container.querySelector(SELECTOR_NOTIF);
    const count = container.querySelector(SELECTOR_COUNT);
    expect(count).toBeFalsy();
    expect(notif).toBeTruthy();
    expect(notif).toHaveClass('color--white');
    expect(notif).toHaveClass('bgColor--red');
    expect(notif).not.toHaveClass('color--aqua');
    expect(notif).not.toHaveClass('bgColor--aqua');
  });

  it('renders correctly as notif without label', () => {
    const { container } = render(<Badge />);
    const notif = container.querySelector(SELECTOR_NOTIF);
    const count = container.querySelector(SELECTOR_COUNT);
    expect(count).toBeFalsy();
    expect(notif).toBeNull();
  });

  it('renders correctly as notif without label with showDot true', () => {
    const { container } = render(<Badge showDot={true} />);
    const notif = container.querySelector(SELECTOR_NOTIF);
    expect(notif).toBeTruthy();
  });

  it('renders correctly as count with label', () => {
    const { container } = render(<Badge label="666" type="count" />);
    const notif = container.querySelector(SELECTOR_NOTIF);
    const count = container.querySelector(SELECTOR_COUNT);
    expect(notif).toBeFalsy();
    expect(count).toBeTruthy();
    expect(count).toHaveClass('color--aqua');
    expect(count).not.toHaveClass('color--white');
    expect(count).not.toHaveClass('bgColor--red');
    expect(count).not.toHaveClass('shape--circle');
  });

  it('renders correctly as count without label', () => {
    const { container } = render(<Badge type="count" />);
    const notif = container.querySelector(SELECTOR_NOTIF);
    const count = container.querySelector(SELECTOR_COUNT);
    expect(notif).toBeFalsy();
    expect(count).toBeNull();
  });
});
