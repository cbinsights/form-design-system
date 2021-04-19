import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import Avatar, { grabInitials, trimName } from '.';

describe('trimName', () => {
  expect(trimName('  ')).toBeNull();
  expect(trimName('')).toBeNull();
  expect(trimName('   hello world ')).toBe('hello world');
  expect(trimName('hello world')).toBe('hello world');
});

describe('grabInitials', () => {
  it('Outputs one initial for one word', () => {
    expect(grabInitials('George')).toBe('G');
  });

  it('Outputs two initials for two words', () => {
    expect(grabInitials('George Wallace')).toBe('GW');
  });

  it('Always outputs uppercase initials', () => {
    expect(grabInitials('george wallace')).toBe('GW');
  });

  it('Only ever outputs the first two initials', () => {
    expect(grabInitials('George Wallace Kennedy')).toBe('GW');
  });

  it('Only outputs one initial when we pass initialsCount of 1 in', () => {
    expect(grabInitials('George Wallace Kennedy', 1)).toBe('G');
  });
});

describe('Avatar component', () => {
  it('renders name', () => {
    render(<Avatar name="Joey Tribbiani" />);
    expect(screen.getByTitle('Joey Tribbiani', { name: 'JT' })).toBeTruthy();
  });

  it('renders proper sizes', () => {
    render(<Avatar name="Joey Tribbiani" />);
    expect(screen.getByTitle('Joey Tribbiani', { name: 'JT' })).toHaveClass(
      'fdsAvatar--m'
    );
    cleanup();
    render(<Avatar name="Joey Tribbiani" size="l" />);
    expect(screen.getByTitle('Joey Tribbiani', { name: 'JT' })).toHaveClass(
      'fdsAvatar--l'
    );
    cleanup();
    render(<Avatar name="Joey Tribbiani" size="s" />);
    expect(screen.getByTitle('Joey Tribbiani', { name: 'JT' })).toHaveClass(
      'fdsAvatar--s'
    );
  });

  it('renders proper initials', () => {
    render(<Avatar name="Joey" />);
    expect(screen.getByTitle('Joey', { name: 'J' })).toBeTruthy();
    cleanup();
    render(<Avatar name="Joey Tribbiani" size="l" />);
    expect(screen.getByTitle('Joey Tribbiani', { name: 'JT' })).toBeTruthy();
    cleanup();
    render(<Avatar name="Joey Tribbiani" size="s" initialsLength={1} />);
    expect(screen.getByTitle('Joey Tribbiani', { name: 'J' })).toBeTruthy();
    cleanup();
    render(<Avatar name=" Joey Tribbiani " size="s" initialsLength={1} />);
    expect(screen.getByTitle('Joey Tribbiani', { name: 'J' })).toBeTruthy();
  });

  it('does not render as an image if its a link', () => {
    render(<Avatar name="Joey" href="#" />);
    expect(screen.queryByRole('img')).toBeNull();
  });

  it('renders placeholder if title or img not passed in', () => {
    render(<Avatar />);
    expect(screen.getByTitle('Placeholder Avatar')).toBeTruthy();
  });
});
