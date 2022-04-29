import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Menu } from 'components';
import userEvent from '@testing-library/user-event';

describe('Menu component', () => {
  it('renders component (strings)', () => {
    render(
      <Menu defaultOpen>
        <Menu.Trigger>
          <a href="#">trigger</a>
        </Menu.Trigger>
        <Menu.Content>
          <Menu.Item onSelect={jest.fn()}>First</Menu.Item>
          <Menu.Item onSelect={jest.fn()}>Second</Menu.Item>
          <Menu.Item onSelect={jest.fn()}>Third</Menu.Item>
        </Menu.Content>
      </Menu>
    );
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
    expect(screen.getByText('Third')).toBeInTheDocument();
  });

  it('renders component (JSX items)', () => {
    render(
      <Menu defaultOpen>
        <Menu.Trigger>
          <a href="#">trigger</a>
        </Menu.Trigger>
        <Menu.Content>
          <Menu.Item onSelect={jest.fn()}>
            <p>First</p>
          </Menu.Item>
          <Menu.Item onSelect={jest.fn()}>
            <p>Second</p>
          </Menu.Item>
          <Menu.Item onSelect={jest.fn()}>
            <p>Third</p>
          </Menu.Item>
        </Menu.Content>
      </Menu>
    );
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
    expect(screen.getByText('Third')).toBeInTheDocument();
  });

  it('renders trigger element only', () => {
    render(
      <Menu>
        <Menu.Trigger>
          <a href="#">trigger</a>
        </Menu.Trigger>
      </Menu>
    );
    expect(screen.getByRole('link')).toBeInTheDocument();
    // Menu.Items are not expected to be rendered so we check for them to be null
    expect(screen.queryByText('First')).toBeNull();
  });
});

it('shows content on Menu open', async () => {
  render(
    <Menu>
      <Menu.Trigger>
        <a href="#">trigger</a>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item onSelect={jest.fn()}>First</Menu.Item>
        <Menu.Item onSelect={jest.fn()}>Second</Menu.Item>
        <Menu.Item onSelect={jest.fn()}>Third</Menu.Item>
      </Menu.Content>
    </Menu>
  );
  userEvent.type(screen.getByRole('link', { name: 'trigger' }), '{arrowdown}');
  await waitFor(() => {
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
    expect(screen.getByText('Third')).toBeInTheDocument();
  });
});
