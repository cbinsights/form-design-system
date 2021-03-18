import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Checkbox from '.';

describe('Checkbox component', () => {
  it('has a checked label when appropriate', () => {
    render(<Checkbox checked label="change callback" name="check-callback-test" />);
    expect(screen.getByRole('checkbox', { checked: true })).toBeTruthy();
  });

  it('passes the `disabled` prop', () => {
    expect(screen.queryByRole('checkbox', { checked: true })).toBeNull();
    render(<Checkbox label="change callback" disabled name="disabled-test" />);
    const input = screen.getByLabelText('change callback');
    expect(input.disabled).toBeTruthy();
    expect(screen.getByRole('checkbox')).toHaveAttribute('disabled');
  });

  it('fires change callback when clicking', () => {
    const changeFn = jest.fn();
    render(
      <Checkbox label="change callback" name="check-callback-test" onChange={changeFn} />
    );
    expect(changeFn).not.toHaveBeenCalled();
    fireEvent.click(screen.getByLabelText('change callback'));
    expect(changeFn).toHaveBeenCalled();
  });
});
