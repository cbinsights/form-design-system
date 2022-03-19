import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import CustomSelectedValue, { SelectedValueProps } from './CustomSelectedValue';

describe('CenteredHighlightedText component', () => {
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
    const { getByTestId } = render(<CustomSelectedValue {...defaultProps} />);
    expect(getByTestId('custom-selected-value')).toBeInTheDocument();
  });

  it('should trigger setCursorPosition callback when the custom-selected-value item is clicked', () => {
    const { getByTestId } = render(<CustomSelectedValue {...defaultProps} />);
    fireEvent.click(getByTestId('custom-selected-value'));
    expect(setCursorPosition).toHaveBeenCalled();
    expect(onSetSearchItems).not.toHaveBeenCalled();
  });

  it('should trigger onSetSearchItems callback when the custom-selected-value item is double clicked', () => {
    const { getByTestId } = render(<CustomSelectedValue {...defaultProps} />);
    fireEvent.doubleClick(getByTestId('custom-selected-value'));
    expect(setCursorPosition).toHaveBeenCalled();
    expect(onSetSearchItems).toHaveBeenCalled();
  });

  it('should trigger onSetSearchItems callback without the deleted item', () => {
    const { getByTestId } = render(<CustomSelectedValue {...defaultProps} />);
    fireEvent.doubleClick(getByTestId('custom-selected-value'));
    expect(onSetSearchItems).toHaveBeenCalledWith([item2]);
  });
});
