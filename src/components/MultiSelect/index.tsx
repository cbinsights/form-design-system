import React from 'react';
import Select, {
  MultiValue,
  Props,
  GroupBase,
  SelectInstance,
  Options,
} from 'react-select';
import { customComponents, customStyles, customThemes } from './CustomSelectUtils';
import { DropdownOption } from './CustomSelectComponents/DropdownOption';

declare module 'react-select/dist/declarations/src/Select' {
  export interface Props<
    Option,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    IsMulti extends boolean,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Group extends GroupBase<Option>
  > {
    cursorPosition?: number;
    onSetSearchItems?: (items: MultiValue<OptionProps>) => void;
    setCursorPosition?: (position: number) => void;
  }
}

export interface OptionProps {
  id: number | string;
  text: string;
  value?: string;
  type: string;
  label: string;
  category: string;
  defaultType?: string;
  uid: string;
  targetTab?: string;
  compoundId?: string;
  extraInfo?: string;
  idCollection?: number;
  idCompany?: number;
  idInvestor?: number;
  idOrg?: number;
  idUser?: number[];
  idTeam?: number;
  url?: string;
  isExpert?: boolean;
  boolean?: string;
  alias?: string;
}

export interface MultiSelectProps extends Props<OptionProps, true> {
  onChange?: (newValue: MultiValue<OptionProps>) => void;
  onClear?: () => void;
  onMenuClose?: () => void;
  onOptionClick?: () => void;
  inputValue?: string;
  searchItems?: MultiValue<OptionProps>;
  selectRef?: React.RefObject<SelectInstance<OptionProps, true>>;
}

const Search: React.FC<MultiSelectProps> = ({
  autoFocus,
  backspaceRemovesValue,
  cursorPosition,
  formatOptionLabel,
  inputValue,
  isClearable = false,
  onBlur,
  onChange,
  onClear,
  onFocus,
  onInputChange,
  onKeyDown,
  onMenuClose,
  onOptionClick,
  onSetSearchItems,
  openMenuOnClick,
  options,
  placeholder,
  searchItems,
  selectRef,
  setCursorPosition,
  styles = customStyles(),
  inputId,
}) => {
  const defaultFormatOptionLabel = React.useCallback(
    (item: OptionProps) => (
      <DropdownOption
        selectValue={item}
        query={inputValue}
        isHeader={false}
        handleOptionClick={onOptionClick}
      />
    ),
    [inputValue, onOptionClick]
  );

  return (
    <Select<OptionProps, true>
      inputId={inputId}
      autoFocus={autoFocus}
      backspaceRemovesValue={backspaceRemovesValue}
      captureMenuScroll={false}
      components={customComponents}
      cursorPosition={cursorPosition}
      filterOption={() => true}
      formatOptionLabel={formatOptionLabel ?? defaultFormatOptionLabel}
      // Use uid as option value to work around react-select's automatically given keys
      getOptionValue={(option: OptionProps) => option.uid}
      hideSelectedOptions={false}
      inputValue={inputValue}
      isClearable={isClearable}
      isMulti
      isOptionSelected={(option: OptionProps, selectedValue: Options<OptionProps>) =>
        selectedValue.some((i) => i === option)
      }
      onBlur={onBlur}
      onChange={(selectedOption, { action }) => {
        if (action === 'clear') {
          return onClear?.();
        }
        if (action === 'remove-value') {
          return null;
        }
        return onChange?.(selectedOption);
      }}
      onFocus={onFocus}
      onInputChange={onInputChange}
      onKeyDown={onKeyDown}
      onMenuClose={onMenuClose}
      onSetSearchItems={onSetSearchItems}
      openMenuOnClick={openMenuOnClick}
      options={options}
      placeholder={placeholder}
      ref={selectRef}
      setCursorPosition={setCursorPosition}
      styles={styles}
      theme={customThemes}
      value={searchItems}
    />
  );
};

export default Search;
