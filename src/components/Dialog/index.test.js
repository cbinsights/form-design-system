import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Dialog from '.';

describe('Dialog', () => {
  const dismiss = jest.fn();

  it('tests that dialog renders properly', () => {
    // Scrolling should not be locked before dialog is open
    expect(window.getComputedStyle(document.body).overflow).toBe('');

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
        headerFooter="headerFooter"
      />
    );

    /* Test that content renders properly */
    /* ================================== */
    expect(screen.getByText('content')).toBeTruthy();
    expect(screen.getByText('footerContent')).toBeTruthy();
    expect(screen.getByText('title')).toBeTruthy();
    expect(screen.getByText('headerFooter')).toBeTruthy();

    /* Tests that onDismiss gets fired correctly */
    /* ========================================= */
    fireEvent.click(screen.getByLabelText('Close'));
    // Pressing esc anywhere in dialog should trigger a close
    fireEvent.keyDown(screen.getByText('content'), { key: 'Escape', code: 27 });
    expect(dismiss).toHaveBeenCalledTimes(2);

    /* Tests styles */
    /* ============ */
    expect(window.getComputedStyle(screen.getByRole('dialog'))['max-height']).toBe(
      '1000px'
    );
    expect(window.getComputedStyle(screen.getByRole('dialog'))['max-width']).toBe(
      '1000px'
    );
    // Scrolling should be locked when dialog is open
    expect(window.getComputedStyle(document.documentElement).overflow).toBe('hidden');
  });
});
