import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { Button } from 'components';
import Prompt from '.';

describe('Prompt component', () => {
  it('renders component (default props - isOpen false)', () => {
    render(
      <Prompt
        primaryButton={<Button label="foo" />}
        secondaryButton={<Button label="bar" />}
      />
    );
    const dialog = screen.queryByRole('alertdialog');
    expect(dialog).toBeNull();
  });

  it('renders component (default props - isOpen true)', () => {
    render(
      <Prompt
        primaryButton={<Button label="foo" />}
        secondaryButton={<Button label="bar" />}
        isOpen
      />
    );
    const dialog = screen.getByRole('alertdialog');
    const { getAllByRole, getByRole } = within(dialog);
    const buttons = getAllByRole('button');
    expect(buttons.length).toEqual(2);
    expect(getByRole('button', { name: 'foo' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'bar' })).toBeInTheDocument();
  });

  it('renders component (set all props)', () => {
    render(
      <Prompt
        primaryButton={<Button label="foo" />}
        secondaryButton={<Button label="bar" />}
        title="title"
        desc="desc"
        isOpen
      />
    );
    const dialog = screen.getByRole('alertdialog');
    const { getAllByRole, getByRole, getByText } = within(dialog);
    const buttons = getAllByRole('button');
    expect(buttons.length).toEqual(2);
    expect(getByRole('button', { name: 'foo' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'bar' })).toBeInTheDocument();
    expect(getByText('title')).toBeInTheDocument();
    expect(getByText('desc')).toBeInTheDocument();
  });
});
