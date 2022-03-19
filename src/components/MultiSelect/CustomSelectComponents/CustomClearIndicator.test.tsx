import React from 'react';
import { render } from '@testing-library/react';

import CustomClearIndicator from './CustomClearIndicator';

describe('CenteredHighlightedText component', () => {
  const defaultProps = {
    text: '',
    id: '',
    hasValue: false,
    setValue: jest.fn(),
    cx: jest.fn(),
    getStyles: jest.fn(),
    getValue: jest.fn(),
    isMulti: false,
    isRtl: false,
    options: [],
    selectedOption: jest.fn(),
    clearValue: jest.fn(),
    isFocused: false,
    selectOption: jest.fn(),
    innerProps: undefined,
    selectProps: undefined,
    theme: undefined,
  };

  it('tests default rendering', () => {
    const { getByTestId } = render(<CustomClearIndicator {...defaultProps} />);
    expect(getByTestId('pointer')).toBeInTheDocument();
  });
});
