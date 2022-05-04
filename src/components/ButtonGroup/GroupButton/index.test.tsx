import React from 'react';
import { render, screen } from '@testing-library/react';

import GroupButton, { ElementChildren } from '.';
import { noop } from 'util/index';

const Icon = () => <span>🌭</span>;
const Wrapper = (props: ElementChildren) => {
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
