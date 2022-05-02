import React from 'react';
import { screen, render } from '@testing-library/react';
import { ClearIndicatorProps } from 'react-select';
import CustomClearIndicator from './CustomClearIndicator';
import { OptionProps } from '..';

describe('CustomClearIndicator component', () => {
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

  const defaultProps: ClearIndicatorProps<OptionProps> = {
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
    selectProps: mockSelectProps,
    theme: mockTheme,
  };

  it('tests default rendering', () => {
    render(<CustomClearIndicator {...defaultProps} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
