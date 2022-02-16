import React from 'react';
import { MultiValue, SelectInstance } from 'react-select';
import Search, { SelectProps } from './Search';
import { mockOptions } from './mockData';

export const TopSearch = (): JSX.Element => {
  const [controlledInput, setControlledInput] = React.useState('');
  const [searchItems, setSearchItems] = React.useState<MultiValue<SelectProps>>();
  const [cursorPosition, setCursorPosition] = React.useState(0);
  const ref = React.useRef<SelectInstance<SelectProps, true>>(null);
  //   const ref = React.useRef(null);

  const handleChange = React.useCallback(
    (value) => {
      setControlledInput(value);
    },
    [setControlledInput]
  );

  const handleClear = () => {
    setControlledInput('');
  };

  const handleMenuClose = () => {};
  const handleSetSearchItems = (items: MultiValue<SelectProps>) => {
    setSearchItems([...items]);
  };

  const handleBlur = () => {
    ref.current?.inputRef?.blur();
  };
  const handleFocus = () => {
    ref.current?.inputRef?.focus();
  };

  const handleInputChange = () => {};
  const handleKeyDown = () => {};

  //   controlledInput?
  //   cursorPosition
  //   customClassName?
  //   handleBlur?
  //   handleChange
  //   handleClear
  //   handleFocus?
  //   handleInputChange?
  //   handleKeyDown?
  //   handleMenuClose
  //   handleSetSearchItems
  //   inputValue?
  //   isCustomQueryInput
  //   options?
  //   searchItems?
  //   selectRef?
  //   setCursorPosition

  //   const searchItems: MultiValue<SelectProps> = [
  //     {
  //       type: 'organization',
  //       uid: '4asd',
  //       text: 'test',
  //     },
  //   ];

  return (
    <Search
      controlledInput={controlledInput}
      cursorPosition={cursorPosition}
      handleBlur={handleBlur}
      handleChange={handleChange}
      handleClear={handleClear}
      handleFocus={handleFocus}
      handleInputChange={handleInputChange}
      handleKeyDown={handleKeyDown}
      handleMenuClose={handleMenuClose}
      handleSetSearchItems={handleSetSearchItems}
      //   inputValue={undefined}
      isCustomQueryInput={true}
      options={mockOptions}
      searchItems={searchItems}
      selectRef={ref}
      setCursorPosition={setCursorPosition}
    />
  );
};

export default TopSearch;
