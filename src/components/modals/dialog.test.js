import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Dialog from './Dialog'

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
      />
    )
    /* Test that content renders properly */
    /* ================================== */
    expect(screen.getByText('content')).toBeTruthy();
    expect(screen.getByText('footerContent')).toBeTruthy();
    expect(screen.getByText('title')).toBeTruthy();

    /* Tests that onDismiss gets fired correctly */
    /* ========================================= */
    // The close button is the first thing focused / active
    fireEvent.click(document.activeElement);
    fireEvent.click(screen.getByLabelText('Close'));
    // Pressing esc anywhere in dialog should trigger a close
    fireEvent.keyDown(screen.getByText('content'), { key: 'Escape', code: 27 })
    expect(dismiss).toHaveBeenCalledTimes(3)


    /* Tests styles */
    /* ============ */
    expect(window.getComputedStyle(screen.getByRole('dialog'))['max-height']).toBe('1000px');
    expect(window.getComputedStyle(screen.getByRole('dialog'))['max-width']).toBe('1000px');
    // Scrolling should be locked when dialog is open
    expect(window.getComputedStyle(document.body).overflow).toBe('hidden');
  })

})
