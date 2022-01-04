import React from 'react';
import { render, screen } from '@testing-library/react';

import GroupButton from '.';

const Icon = () => <span>🌭</span>;
const Wrapper = (props) => <div {...props} data-test="snapshot-wrapper" />;

describe('GroupButton component', () => {
  it('renders component', () => {
    render(<GroupButton value="Feed" Icon={Icon} isActive={true} Wrapper={Wrapper} />);
    expect(screen.getByRole('button', { name: '🌭' })).toBeInTheDocument();
  });
});
