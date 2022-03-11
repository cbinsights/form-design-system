import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Dialog from '.';

describe('Dialog', () => {
  const dismiss = jest.fn();
  const dialog = (
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

  it('tests that scrolling is locked before dialog is open', () => {
    // Scrolling should not be locked before dialog is open
    expect(window.getComputedStyle(document.body).getPropertyValue('overflow')).toBe('');
  });

  it('tests that dialog renders properly', () => {
    render(dialog);

    expect(screen.getByText('content')).toBeInTheDocument();
    expect(screen.getByText('footerContent')).toBeInTheDocument();
    expect(screen.getByText('title')).toBeInTheDocument();
    expect(screen.getByText('subTitle')).toBeInTheDocument();
  });

  it('tests that onDismiss gets fired onClick of close', () => {
    render(dialog);

    expect(screen.getByText('content')).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText('Close'));
    expect(screen.queryByText('content')).not.toBeInTheDocument();
    expect(dismiss).toHaveBeenCalledTimes(1);
  });

  it('tests that pressing Esc anywhere in dialog should trigger a close', () => {
    render(dialog);

    fireEvent.keyDown(screen.getByTestId('dialog'), { key: 'Escape', code: 27 });
    expect(dismiss).toHaveBeenCalledTimes(1);
  });

  it('tests that styles are correct', () => {
    render(dialog);

    const computedStyles = window.getComputedStyle(screen.getByTestId('dialog'));
    expect(computedStyles.getPropertyValue('max-height')).toBe('1000px');
    expect(computedStyles.getPropertyValue('max-width')).toBe('1000px');
  });
});
