import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Checkbox from '.';

describe('Checkbox component', () => {
  it('passes the `disabled` prop', () => {
    const { container } = render(
      <Checkbox label="change callback" disabled name="disabled-test" />
    );
    const input = screen.getByLabelText('change callback');
    expect(input).toBeDisabled();

    userEvent.click(input);
    expect(input).not.toBeChecked();
    expect(screen.getByRole('checkbox')).toHaveAttribute('disabled');
    expect(container.querySelector('.fdsCheckable')).toHaveClass(
      'fdsCheckable--disabled'
    );
  });

  it('fires change callback when checking', () => {
    const mockOnChange = jest.fn();
    render(
      <Checkbox
        label="change callback"
        name="check-callback-test"
        onChange={mockOnChange}
      />
    );
    const input = screen.getByLabelText('change callback', { exact: false });
    expect(mockOnChange).not.toHaveBeenCalled();
    userEvent.click(input);
    expect(input).toBeChecked();
    userEvent.type(input, 'change callback');
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('fires change callback when unchecking', () => {
    const mockOnChange = jest.fn();
    render(
      <Checkbox
        defaultChecked
        label="unchecking callback"
        name="uncheck-callback-test"
        onChange={mockOnChange}
      />
    );

    const input = screen.getByLabelText('unchecking callback', { exact: false });
    expect(mockOnChange).not.toHaveBeenCalled();
    userEvent.click(input);
    expect(input).not.toBeChecked();
    userEvent.type(input, 'unchecking callback');
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('allows users to supply their own id', () => {
    render(
      <>
        <Checkbox id="checkbox-id" label="Component label" name="multiple labels" />
        <label htmlFor="checkbox-id">User label</label>
      </>
    );

    expect(screen.getByLabelText('Component label')).toBeInTheDocument();
    expect(screen.getByText('User label')).toBeInTheDocument();
  });
});
