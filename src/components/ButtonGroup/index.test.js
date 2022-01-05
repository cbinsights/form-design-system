import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import ButtonGroup from '.';

const Icon = () => <span>🌭</span>;

const buttons = [
  { label: 'Feed', Icon, isActive: true },
  { label: 'Table', Icon, onClick: () => {}, disabled: true },
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
