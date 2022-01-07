import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import ButtonGroup from '.';
import { noop } from 'util/index';

const Icon = () => <span>🌭</span>;

const buttons = [
  { label: 'Feed', Icon, isActive: true, onClick: noop, key: 'Feed', value: 1 },
  { label: 'Table', Icon, onClick: noop, disabled: true, key: 'Table', value: 2 },
];

describe('ButtonGroup component', () => {
  it('renders correctly', () => {
    render(<ButtonGroup buttons={buttons}></ButtonGroup>);
    expect(screen.getByText('Feed')).toBeInTheDocument();
  });

  it('calls onChange with "Feed"', () => {
    const mockOnChange = jest.fn();
    render(<ButtonGroup buttons={buttons} onChange={mockOnChange}></ButtonGroup>);
    fireEvent.click(screen.getByText('Feed'));
    expect(mockOnChange).toHaveBeenCalledWith('Feed');
  });
});
