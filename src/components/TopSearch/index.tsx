import React from 'react';
import { MultiValue, SelectInstance } from 'react-select';
import Search, { SelectProps } from './Search';
import { mockOptions } from './mockData';

export const TopSearch = (): JSX.Element => {
  const [searchItems, setSearchItems] = React.useState<MultiValue<SelectProps>>();
  const [cursorPosition, setCursorPosition] = React.useState(0);
  const ref = React.useRef<SelectInstance<SelectProps, true>>(null);

  const handleChange = () => {};

  const handleClear = () => {};

  const handleMenuClose = () => {};
  const handleSetSearchItems = (items: MultiValue<SelectProps>) => {
    setSearchItems(items);
    ref.current?.inputRef?.focus();
  };

  const handleBlur = () => {
    ref.current?.inputRef?.blur();
  };
  const handleFocus = () => {
    ref.current?.inputRef?.focus();
  };

  const handleInputChange = () => {};
  const handleKeyDown = () => {};

  return (
    <Search
      cursorPosition={cursorPosition}
      handleBlur={handleBlur}
      handleChange={handleChange}
      handleClear={handleClear}
      handleFocus={handleFocus}
      handleInputChange={handleInputChange}
      handleKeyDown={handleKeyDown}
      handleMenuClose={handleMenuClose}
      isCustomQueryInput={true}
      options={mockOptions}
      selectRef={ref}
      searchItems={searchItems}
      handleSetSearchItems={handleSetSearchItems}
      setCursorPosition={setCursorPosition}
    />
  );
};

export default TopSearch;
