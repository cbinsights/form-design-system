import React from 'react';
import { render } from '@testing-library/react';

import CustomValueContainer from './CustomValueContainer';

describe('CustomValueContainer component', () => {
  const defaultProps = {
    children: <div data-testid="children"></div>,
    isDisabled: false,
    clearValue: jest.fn(),
    cx: jest.fn(),
    getStyles: jest.fn(),
    getValue: jest.fn(),
    hasValue: true,
    isMulti: false,
    isRtl: false,
    options: [],
    selectOption: jest.fn(),
    selectProps: {
      cursorPosition: undefined,
    },
    setValue: jest.fn(),
    theme: undefined,
  };

  it('tests default rendering', () => {
    const { getByTestId } = render(<CustomValueContainer {...defaultProps} />);

    expect(getByTestId('children')).toBeInTheDocument();
  });

  it('should slice child array if hasValue and cursorPosition is defined', () => {
    const { getAllByRole } = render(
      <CustomValueContainer
        {...defaultProps}
        selectProps={{ cursorPosition: 0 }}
        hasValue={true}
      >
        <div data-testid="child-1" role="alert">
          child-1
        </div>
        <span data-testid="child-3" role="alert">
          child-2
        </span>
        <p data-testid="child-5" role="alert">
          child-3
        </p>
      </CustomValueContainer>
    );
    expect(getAllByRole('alert')).toHaveLength(3);
    expect(getAllByRole('alert')[1]).toHaveTextContent('child-3');
  });
});
