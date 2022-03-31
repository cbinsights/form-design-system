import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CustomSelectedValue, { SelectedValueProps } from './CustomSelectedValue';

describe('CustomSelectedValue component', () => {
  const setCursorPosition = jest.fn();
  const onSetSearchItems = jest.fn();

  const item = {
    id: 'id',
    text: 'text',
    label: 'label',
    type: 'type',
    category: 'category',
    uid: 'uid',
  };

  const item2 = {
    id: 'id2',
    text: 'text',
    label: 'label',
    type: 'type',
    category: 'category',
    uid: 'uid',
  };
  const defaultProps: SelectedValueProps = {
    item,
    selectProps: {
      setCursorPosition,
      value: [item, item2],
      onSetSearchItems,
    },
  };

  it('tests default rendering', () => {
    render(<CustomSelectedValue {...defaultProps} />);
    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });

  it('should trigger setCursorPosition when a selected value item is clicked', () => {
    render(<CustomSelectedValue {...defaultProps} />);
    userEvent.click(screen.getByRole('listitem'));
    expect(setCursorPosition).toHaveBeenCalled();
    expect(onSetSearchItems).not.toHaveBeenCalled();
  });

  it('should trigger onSetSearchItems when a selected value item is double clicked', () => {
    render(<CustomSelectedValue {...defaultProps} />);
    userEvent.dblClick(screen.getByRole('listitem'));
    expect(setCursorPosition).toHaveBeenCalled();
    expect(onSetSearchItems).toHaveBeenCalled();
  });

  it('should trigger onSetSearchItems callback without the deleted item', () => {
    render(<CustomSelectedValue {...defaultProps} />);
    userEvent.dblClick(screen.getByRole('listitem'));
    expect(onSetSearchItems).toHaveBeenCalledWith([item2]);
  });
});
