import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Dialog from '.';

describe('Dialog', () => {
  const dismiss = jest.fn();

  it('tests that dialog renders properly', () => {
    // Scrolling should not be locked before dialog is open
    expect(window.getComputedStyle(document.body).getPropertyValue('overflow')).toBe('');

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
        subTitle="subTitle"
      />
    );

    /* Test that content renders properly */
    /* ================================== */
    expect(screen.getByText('content')).toBeInTheDocument();
    expect(screen.getByText('footerContent')).toBeInTheDocument();
    expect(screen.getByText('title')).toBeInTheDocument();
    expect(screen.getByText('subTitle')).toBeInTheDocument();

    /* Tests that onDismiss gets fired correctly */
    /* ========================================= */
    fireEvent.click(screen.getByLabelText('Close'));
    // Pressing esc anywhere in dialog should trigger a close
    fireEvent.keyDown(screen.getByText('content'), { key: 'Escape', code: 27 });
    expect(dismiss).toHaveBeenCalledTimes(2);

    /* Tests styles */
    /* ============ */
    const computedStyles = window.getComputedStyle(screen.getByRole('dialog'));
    expect(computedStyles.getPropertyValue('max-height')).toBe('1000px');
    expect(computedStyles.getPropertyValue('max-width')).toBe('1000px');
    // Scrolling should be locked when dialog is open
    expect(
      window.getComputedStyle(document.documentElement).getPropertyValue('overflow')
    ).toBe('hidden');
  });
});
