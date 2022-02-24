import React from 'react';
import Select, {
  InputActionMeta,
  MultiValue,
  Props,
  GroupBase,
  SelectInstance,
  ActionMeta,
} from 'react-select';
import { customComponents, customThemes, customStyles } from './CustomSelectUtils';
import styles from './styles.css';

declare module 'react-select/dist/declarations/src/Select' {
  export interface Props<
    Option,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    IsMulti extends boolean,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Group extends GroupBase<Option>
  > {
    cursorPosition?: number;
    handleSetSearchItems: (items: MultiValue<SelectProps>) => void;
    setCursorPosition?: (position: number) => void;
  }
}

export interface SelectProps {
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
}

export interface SearchProps extends Props<SelectProps, true> {
  controlledInput?: string;
  customClassName?: string;
  handleBlur?: React.FocusEventHandler<HTMLInputElement>;
  handleChange: (newValue: MultiValue<SelectProps>) => void;
  handleClear: () => void;
  handleFocus?: React.FocusEventHandler<HTMLInputElement>;
  handleInputChange?: (newValue: string, actionMeta: InputActionMeta) => void;
  handleKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  handleMenuClose: () => void;
  inputValue?: string;
  isCustomQueryInput: boolean;
  searchItems?: MultiValue<SelectProps>;
  selectRef?: React.RefObject<SelectInstance<SelectProps, true>>;
}

export const Search: React.FC<SearchProps> = ({
  controlledInput,
  cursorPosition,
  // customClassName,
  formatOptionLabel,
  handleBlur,
  handleChange,
  handleClear,
  handleFocus,
  handleInputChange,
  handleKeyDown,
  handleMenuClose,
  handleSetSearchItems,
  inputValue,
  isCustomQueryInput,
  options,
  searchItems,
  selectRef,
  setCursorPosition,
}) => {
  return (
    <Select<SelectProps, true>
      inputId={styles.topSearchSelectInput}
      ref={selectRef}
      onMenuClose={handleMenuClose}
      value={searchItems}
      theme={customThemes}
      onBlur={handleBlur}
      onFocus={handleFocus}
      options={options}
      onKeyDown={handleKeyDown}
      openMenuOnClick={false}
      components={customComponents}
      placeholder={
        !isCustomQueryInput ? 'Try searching for companies or keywords' : 'Search'
      }
      isClearable={!isCustomQueryInput}
      formatOptionLabel={formatOptionLabel}
      onInputChange={handleInputChange}
      styles={customStyles({ isCustomQueryInput })}
      isMulti
      backspaceRemovesValue={false}
      inputValue={isCustomQueryInput ? controlledInput || inputValue : inputValue}
      setCursorPosition={setCursorPosition}
      cursorPosition={cursorPosition}
      handleSetSearchItems={handleSetSearchItems}
      // Use uid as option value to work around react-select's automatically given keys
      getOptionValue={(option: SelectProps) => option.uid}
      autoFocus={isCustomQueryInput}
      onChange={(
        selectedOption: readonly SelectProps[],
        { action }: ActionMeta<SelectProps>
      ) => {
        if (action === 'clear') return handleClear();
        if (action === 'remove-value') return null;
        return handleChange(selectedOption);
      }}
      hideSelectedOptions={false}
      captureMenuScroll={false}
      isOptionSelected={(option: SelectProps, selectedValue: SelectProps[]) =>
        selectedValue.some((i) => i === option)
      }
      filterOption={() => true}
    />
  );
};

export default Search;
