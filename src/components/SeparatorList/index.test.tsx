import React from 'react';
import { render, screen } from '@testing-library/react';

import SeparatorList from '.';

describe('Section component', () => {
  it('renders string items', () => {
    render(
      <SeparatorList
        separator="🐍"
        items={['why', 'did', 'it', 'have', 'to', 'be', 'snakes?']}
      />
    );
    const items = screen.getAllByRole('listitem');
    expect(items.length).toEqual(7);
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
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText('snapshot')).toBeInTheDocument();
  });

  it('renders all list items include the correct data-separator attribute', () => {
    const TEST_SEPARATOR = '・';
    render(<SeparatorList separator={TEST_SEPARATOR} items={['one', 'two', 'three']} />);
    const items = screen.getAllByRole('listitem');
    expect(items.length).toEqual(3);
    items.forEach((item) => {
      expect(item.getAttribute('data-separator')).toEqual('・');
    });
  });
});
