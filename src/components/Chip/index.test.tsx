import React from 'react';
import { render, screen } from '@testing-library/react';
import StarFilledIcon from 'icons/react/StarFilledIcon';
import Chip, { ChipProps } from '.';

describe('Chip component', () => {
  it('renders component (default props)', () => {
    render(<Chip label={'foo'} />);
    expect(screen.getByText('foo')).toBeInTheDocument();
  });

  it('renders component (set all props)', () => {
    const props: ChipProps = {
      label: 'foo',
      isActive: true,
      subtitle: 'bar',
      onClose: jest.fn(),
      Icon: StarFilledIcon,
      size: 'm',
      theme: 'blue',
    };
    render(<Chip {...props} />);
    expect(screen.getByText('foo')).toBeInTheDocument();
  });
});
