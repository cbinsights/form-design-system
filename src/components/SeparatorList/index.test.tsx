import React from 'react';
import { render, screen, within } from '@testing-library/react';

import SeparatorList from '.';

describe('Section component', () => {
  it('renders string items', () => {
    const initialItems = ['why', 'did', 'it', 'have', 'to', 'be', 'snakes?'];
    render(<SeparatorList separator="🐍" items={initialItems} />);
    const list = screen.getByRole('list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toEqual(7);
    const text = items.map((item) => item.textContent);
    expect(text).toEqual(initialItems);
  });

  it('renders mixed strings and components', () => {
    render(
      <SeparatorList
        separator="🎃"
        items={[
          <a key="👻" href="#">
            Spooky
          </a>,
          'snapshot',
        ]}
      />
    );
    const list = screen.getByRole('list');
    const { getAllByRole, getByRole, getByText } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toEqual(2);
    expect(getByRole('link')).toBeInTheDocument();
    expect(getByText('snapshot')).toBeInTheDocument();
  });

  it('renders all list items include the correct data-separator attribute', () => {
    const TEST_SEPARATOR = '・';
    const initialItems = ['one', 'two', 'three'];
    render(<SeparatorList separator={TEST_SEPARATOR} items={initialItems} />);
    const list = screen.getByRole('list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toEqual(3);
    const text = items.map((item) => item.textContent);
    expect(text).toEqual(initialItems);
    items.forEach((item) => {
      expect(item.getAttribute('data-separator')).toEqual('・');
    });
  });
});
