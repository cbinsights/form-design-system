import React from 'react';
import { render } from '@testing-library/react';
import { ClearIndicatorProps } from 'react-select';
import CustomClearIndicator from './CustomClearIndicator';
import { OptionProps } from '..';

interface Props extends ClearIndicatorProps<OptionProps, true> {
  selectProps: any;
  theme: any;
}

describe('CenteredHighlightedText component', () => {
  const defaultProps: Props = {
    hasValue: false,
    setValue: jest.fn(),
    cx: jest.fn(),
    getStyles: jest.fn(),
    getValue: jest.fn(),
    isMulti: false,
    isRtl: false,
    options: [],
    clearValue: jest.fn(),
    isFocused: false,
    selectOption: jest.fn(),
    innerProps: {},
    selectProps: {},
    theme: undefined,
  };

  it('tests default rendering', () => {
    const { getByTestId } = render(<CustomClearIndicator {...defaultProps} />);
    expect(getByTestId('pointer')).toBeInTheDocument();
  });
});
