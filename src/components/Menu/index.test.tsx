import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Menu, MenuItem } from 'components';
import userEvent from '@testing-library/user-event';
// import { debugTest } from 'testing-library-visualizer';

describe('Menu component', () => {
  it('renders component (strings)', () => {
    render(
      <Menu trigger={<a href="#">trigger</a>} defaultOpen>
        <MenuItem onSelect={jest.fn()}>First</MenuItem>
        <MenuItem onSelect={jest.fn()}>Second</MenuItem>
        <MenuItem onSelect={jest.fn()}>Third</MenuItem>
      </Menu>
    );
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
    expect(screen.getByText('Third')).toBeInTheDocument();
  });

  it('renders component (JSX items)', () => {
    render(
      <Menu trigger={<a href="#">trigger</a>} defaultOpen>
        <MenuItem onSelect={jest.fn()}>
          <p>First</p>
        </MenuItem>
        <MenuItem onSelect={jest.fn()}>
          <p>Second</p>
        </MenuItem>
        <MenuItem onSelect={jest.fn()}>
          <p>Third</p>
        </MenuItem>
      </Menu>
    );
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
    expect(screen.getByText('Third')).toBeInTheDocument();
  });

  it('renders trigger element only', () => {
    const mockOnClick = jest.fn();
    render(
      <Menu
        isDisabled
        trigger={
          <a href="#" onClick={mockOnClick}>
            trigger
          </a>
        }
      >
        <MenuItem onSelect={jest.fn()}>First</MenuItem>
        <MenuItem onSelect={jest.fn()}>Second</MenuItem>
        <MenuItem onSelect={jest.fn()}>Third</MenuItem>
      </Menu>
    );
    expect(screen.getByRole('link')).toBeInTheDocument();
    // MenuItems are not expected to be rendered so we check for them to be null
    expect(screen.queryByText('First')).toBeNull();
    expect(screen.queryByText('Second')).toBeNull();
    expect(screen.queryByText('Third')).toBeNull();
  });
});

it('shows content on Menu open', async () => {
  render(
    <Menu trigger={<a href="#">trigger</a>}>
      <MenuItem onSelect={jest.fn()}>First</MenuItem>
      <MenuItem onSelect={jest.fn()}>Second</MenuItem>
      <MenuItem onSelect={jest.fn()}>Third</MenuItem>
    </Menu>
  );
  userEvent.type(screen.getByRole('link', { name: 'trigger' }), '{arrowdown}');
  await waitFor(() => {
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
    expect(screen.getByText('Third')).toBeInTheDocument();
  });
});
