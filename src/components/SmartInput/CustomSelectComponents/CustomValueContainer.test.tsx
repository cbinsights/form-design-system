import React from 'react';
import { screen, render } from '@testing-library/react';

import CustomValueContainer from './CustomValueContainer';

describe('CustomValueContainer component', () => {
  const mockTheme = {
    borderRadius: 0,
    colors: {
      primary: '',
      primary75: '',
      primary50: '',
      primary25: '',
      danger: '',
      dangerLight: '',
      neutral0: '',
      neutral5: '',
      neutral10: '',
      neutral20: '',
      neutral30: '',
      neutral40: '',
      neutral50: '',
      neutral60: '',
      neutral70: '',
      neutral80: '',
      neutral90: '',
    },
    spacing: {
      controlHeight: 50,
      menuGutter: 0,
      baseUnit: 1,
    },
  };

  const mockSelectProps = {
    backspaceRemovesValue: false,
    blurInputOnSelect: true,
    captureMenuScroll: false,
    closeMenuOnSelect: true,
    closeMenuOnScroll: false,
    components: {},
    controlShouldRenderValue: false,
    escapeClearsValue: false,
    filterOption: null,
    formatGroupLabel: () => null,
    getOptionLabel: jest.fn(),
    getOptionValue: jest.fn(),
    inputValue: '',
    isDisabled: false,
    isLoading: false,
    isOptionDisabled: jest.fn(),
    isMulti: true as const,
    isRtl: false,
    isSearchable: true,
    loadingMessage: jest.fn(),
    minMenuHeight: 0,
    maxMenuHeight: 0,
    menuIsOpen: false,
    menuPlacement: 'auto' as const,
    menuPosition: 'absolute' as const,
    menuShouldBlockScroll: false,
    menuShouldScrollIntoView: false,
    noOptionsMessage: jest.fn(),
    onChange: jest.fn(),
    onInputChange: jest.fn(),
    onMenuOpen: jest.fn(),
    onMenuClose: jest.fn(),
    openMenuOnFocus: false,
    openMenuOnClick: false,
    options: [],
    pageSize: 0,
    placeholder: '',
    screenReaderStatus: jest.fn(),
    styles: {},
    tabIndex: 1,
    tabSelectsValue: false,
    value: null,
  };
  const defaultProps = {
    clearValue: jest.fn(),
    cx: jest.fn(),
    getStyles: jest.fn(),
    getValue: jest.fn(),
    hasValue: true,
    isMulti: true as const,
    isRtl: false,
    options: [],
    selectOption: jest.fn(),
    selectProps: mockSelectProps,
    setValue: jest.fn(),
    theme: mockTheme,
  };

  it('tests default rendering', () => {
    render(
      <CustomValueContainer {...defaultProps} isDisabled={false}>
        <div role="presentation">mock value</div>
      </CustomValueContainer>
    );

    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });

  it('should slice child array if hasValue and cursorPosition is defined', () => {
    render(
      <CustomValueContainer
        {...defaultProps}
        selectProps={{ ...defaultProps.selectProps, cursorPosition: 0 }}
        hasValue={true}
        isDisabled={false}
      >
        <div role="presentation">
          child-1
          <span role="presentation">child-2</span>
        </div>
        <p role="presentation">child-3</p>
      </CustomValueContainer>
    );
    expect(screen.getAllByRole('presentation')).toHaveLength(3);
    expect(screen.getAllByRole('presentation')[1]).toHaveTextContent('child-3');
  });
});
