import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Radio from '.';

// uuid will break snapshots, so we must mock it.
jest.mock('uuid', () => ({
  v4: jest.fn().mockReturnValue('mock-universal-unique-identifier'),
}));

describe('Radio component', () => {
  it('renders component', () => {
    render(<Radio label="Snapshot Label" name="snapshot-radio" value="test-value" />);
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('renders component (disabled)', () => {
    render(
      <Radio disabled label="Snapshot Label" name="snapshot-radio" value="test-value" />
    );
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('renders component (checked)', () => {
    render(
      <Radio
        defaultChecked
        label="Snapshot Label"
        name="snapshot-radio"
        value="test-value"
      />
    );
    expect(screen.getByRole('radio')).toBeChecked();
  });

  it('fires change callback when checking', () => {
    const changeFn = jest.fn();
    render(
      <Radio
        name="callback-test"
        onChange={changeFn}
        label="Test change"
        value="test-value"
      />
    );
    const radio = screen.getByRole('radio');

    expect(changeFn).not.toHaveBeenCalled();
    fireEvent.click(radio);
    expect(changeFn).toHaveBeenCalled();
  });
});
