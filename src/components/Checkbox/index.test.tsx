import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Checkbox from '.';

describe('Checkbox component', () => {
  it('passes the `disabled` prop', () => {
    const { container } = render(
      <Checkbox label="change callback" disabled name="disabled-test" />
    );
    const input = screen.getByLabelText('change callback', { exact: false });
    expect(input).toBeDisabled();

    fireEvent.click(input);
    expect(input).toBeChecked();
    expect(screen.getByRole('checkbox')).toHaveAttribute('disabled');
    expect(container.querySelector('.fdsCheckable')).toHaveClass(
      'fdsCheckable--disabled'
    );
  });

  it('fires change callback when checking', () => {
    const changeFn = jest.fn();
    render(
      <Checkbox label="change callback" name="check-callback-test" onChange={changeFn} />
    );
    const input = screen.getByLabelText('change callback', { exact: false });
    expect(changeFn).not.toHaveBeenCalled();
    fireEvent.click(input);
    expect(input).toBeChecked();
    fireEvent.change(input, { target: input });
    expect(changeFn).toHaveBeenCalled();
  });

  it('fires change callback when unchecking', () => {
    const changeFn = jest.fn();
    render(
      <Checkbox
        defaultChecked
        label="unchecking callback"
        name="uncheck-callback-test"
        onChange={changeFn}
      />
    );

    const input = screen.getByLabelText('unchecking callback', { exact: false });
    expect(changeFn).not.toHaveBeenCalled();
    fireEvent.click(input);
    expect(input).not.toBeChecked();
    fireEvent.change(input, { target: input });
    expect(changeFn).toHaveBeenCalled();
  });

  it('allows users to supply their own id', () => {
    render(
      <>
        <Checkbox
          id="checkbox-id"
          label="Component label"
          showLabel={false}
          name="multiple labels"
        />
        <label htmlFor="checkbox-id">User label</label>
      </>
    );

    expect(screen.getByLabelText('Component label')).toBeInTheDocument();
    expect(screen.getByLabelText('User label')).toBeInTheDocument();
  });
});
