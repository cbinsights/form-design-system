import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Dialog from '.'

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

    fireEvent.click(screen.getByLabelText('Close'));
    fireEvent.keyDown(screen.getByText('content'), { key: 'Escape', code: 27 })

    /* Tests styles */
    /* ============ */
    expect(window.getComputedStyle(screen.getByRole('dialog'))['max-height']).toBe('1000px');
    expect(window.getComputedStyle(screen.getByRole('dialog'))['max-width']).toBe('1000px');
    // Scrolling should be locked when dialog is open
    expect(window.getComputedStyle(document.documentElement).overflow).toBe('hidden');
  })

})