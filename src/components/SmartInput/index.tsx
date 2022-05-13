import React from 'react';
import Select, {
  Props,
  GroupBase,
  SelectInstance,
  Options,
  PropsValue,
} from 'react-select';
import { customComponents, customStyles, customThemes } from './CustomSelectUtils';
import DropdownOption from './CustomSelectComponents/DropdownOption';
import { noop } from 'util/index';

declare module 'react-select/dist/declarations/src/Select' {
  // signature has to be identical for module augmentation so these Generics need ot be here
  // eslint doesn't like it, so were compromising and disabling them.
  export interface Props<
    Option,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    IsMulti extends boolean,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Group extends GroupBase<Option>
  > {
    cursorPosition?: number;
    hideSelectedItems?: boolean;
    isFocused?: boolean;
    onSetSearchItems?: (items: PropsValue<Option>) => void;
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

export interface SmartInputProps extends Props<OptionProps> {
  onChange?: (newValue: PropsValue<OptionProps>) => void;
  onClear?: () => void;
  onMenuClose?: () => void;
  onOptionClick?: () => void;
  inputValue?: string;
  searchItems?: PropsValue<OptionProps>;
  selectRef?: React.RefObject<SelectInstance<OptionProps, boolean>>;
}

const Search = ({
  autoFocus,
  backspaceRemovesValue,
  cursorPosition,
  formatOptionLabel,
  inputId,
  inputValue,
  isClearable = false,
  menuShouldScrollIntoView = false,
  onBlur = noop,
  onChange = noop,
  onClear = noop,
  onFocus = noop,
  onInputChange = noop,
  onKeyDown = noop,
  onMenuClose = noop,
  onOptionClick = noop,
  onSetSearchItems = noop,
  openMenuOnClick = true,
  options,
  placeholder,
  searchItems,
  selectRef = React.useRef(null),
  setCursorPosition = noop,
  styles = customStyles(),
  ...rest
}: SmartInputProps): JSX.Element => {
  const defaultFormatOptionLabel = (item: OptionProps) => (
    <DropdownOption
      type="condensed"
      option={item}
      query={inputValue ?? selectRef?.current?.inputRef?.value}
      onOptionClick={onOptionClick}
    />
  );

  return (
    <Select<OptionProps, boolean>
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
      inputId={inputId}
      inputValue={inputValue}
      isClearable={isClearable}
      isOptionSelected={(option: OptionProps, selectedValue: Options<OptionProps>) =>
        selectedValue.some((i) => i === option)
      }
      menuShouldScrollIntoView={menuShouldScrollIntoView}
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
      isFocused={selectRef.current?.state.isFocused}
      setCursorPosition={setCursorPosition}
      styles={styles}
      theme={customThemes}
      value={searchItems}
      {...rest}
    />
  );
};

export default Search;
