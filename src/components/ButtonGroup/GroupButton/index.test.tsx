import React from 'react';
import { render, screen } from '@testing-library/react';

import GroupButton from '.';
import { noop } from '../../../util';

const Icon = () => <span>🌭</span>;
const Wrapper = (props) => {
  return <div {...props} data-test="snapshot-wrapper" />;
};

describe('GroupButton component', () => {
  it('renders component', () => {
    render(
      <GroupButton
        label="Feed"
        Icon={Icon}
        isActive={true}
        Wrapper={Wrapper}
        onClick={noop}
      />
    );
    expect(screen.getByRole('button', { name: '🌭 Feed' })).toBeInTheDocument();
  });
});
