import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContextMenu from '.';

describe('<ContextMenu />', () => {
  it('renders custom context menu on right click the trigger', () => {
    render(
      <ContextMenu>
        <ContextMenu.Trigger>
          <div>right click here</div>
        </ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Item onSelect={jest.fn()}>First</ContextMenu.Item>
          <ContextMenu.Item onSelect={jest.fn()}>Second</ContextMenu.Item>
          <ContextMenu.Item onSelect={jest.fn()}>Third</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu>
    );
    userEvent.click(screen.getByText('right click here'), { button: 2 });
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
    expect(screen.getByText('Third')).toBeInTheDocument();
  });

  it('calls only items that are not disabled', () => {
    const mockOnSelect = jest.fn();
    render(
      <ContextMenu>
        <ContextMenu.Trigger>
          <div>right click here</div>
        </ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Item disabled onSelect={mockOnSelect}>
            First
          </ContextMenu.Item>
          <ContextMenu.Item onSelect={mockOnSelect}>Second</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu>
    );
    userEvent.click(screen.getByText('right click here'), { button: 2 });
    userEvent.click(screen.getByText('First'));
    expect(mockOnSelect).not.toHaveBeenCalled();
    userEvent.click(screen.getByText('Second'));
    expect(mockOnSelect).toHaveBeenCalled();
  });
});
