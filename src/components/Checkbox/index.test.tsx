import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Checkbox from '.';

describe('Checkbox component', () => {
  it('passes the `disabled` prop', () => {
    render(<Checkbox label="change callback" disabled name="disabled-test" />);
    const input = screen.getByLabelText('change callback');
    expect(input).toBeDisabled();

    userEvent.click(input);
    expect(input).not.toBeChecked();
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
    const mockOnChange = jest.fn();
    render(
      <>
        <Checkbox
          id="checkbox-id"
          label="Component label"
          showLabel={false}
          name="multiple labels"
          onChange={mockOnChange}
        />
        <label htmlFor="checkbox-id">User label</label>
      </>
    );

    expect(screen.queryByLabelText('Component label')).not.toBeInTheDocument();
    expect(screen.getByText('User label')).toBeInTheDocument();

    const input = screen.getByText('User label', { exact: false });
    expect(mockOnChange).not.toHaveBeenCalled();
    userEvent.click(input);
    expect(input).not.toBeChecked();
    userEvent.type(input, 'User label');
    expect(mockOnChange).toHaveBeenCalled();
  });
});
