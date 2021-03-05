import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dialog from '.';

describe('Dialog', () => {
  const dismiss = jest.fn();

  it('tests that dialog renders properly', () => {
    render(
      <Dialog
        content={<button>content</button>}
        isOpen
        footerContent={<div>footerContent</div>}
        title="title"
        onDismiss={dismiss}
        height="1000px"
        width="1000px"
        alwaysShowBorder
      />
    );

    expect(screen.getByLabelText('Close')).toHaveFocus();

    /* Test that content renders properly */
    /* ================================== */
    expect(screen.getByText('content')).toBeTruthy();
    expect(screen.getByText('footerContent')).toBeTruthy();
    expect(screen.getByText('title')).toBeTruthy();

    /* Tests that onDismiss gets fired correctly */
    /* ========================================= */
    userEvent.click(screen.getByLabelText('Close'));
    // Pressing esc anywhere in dialog should trigger a close
    userEvent.type(screen.getByText('content'), '{esc}');
    expect(dismiss).toHaveBeenCalledTimes(2);

    /* Tests styles */
    /* ============ */
    expect(window.getComputedStyle(screen.getByRole('dialog'))['max-height']).toBe(
      '1000px'
    );
    expect(window.getComputedStyle(screen.getByRole('dialog'))['max-width']).toBe(
      '1000px'
    );
  });
});
