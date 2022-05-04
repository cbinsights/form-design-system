import React from 'react';
import { render } from '@testing-library/react';

import FlexItem, { FlexItemProps } from '.';

const renderComponent = (props?: FlexItemProps) => render(<FlexItem {...props} />);

describe('Flex component', () => {
  it('renders component (default props)', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders component (set all props)', () => {
    const { container } = renderComponent({
      shrink: true,
      align: 'center',
      justify: 'spaceBetween',
    });
    expect(container.firstChild).toHaveClass(
      'flexItem--alignCenter flexItem--justifySpaceBetween flexItem--shrink flexItem'
    );
  });
});
