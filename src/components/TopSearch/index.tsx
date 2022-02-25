import React from 'react';
import { MultiValue, SelectInstance } from 'react-select';
import Search, { SelectProps } from './Search';
import { mockOptions } from './mockData';
import { mockFetchData } from 'util/mockFetchData';
import { filterByStringProp } from 'util/mockFetchData/filterData';

export const TopSearch = (): JSX.Element => {
  const [searchItems, setSearchItems] = React.useState<MultiValue<SelectProps>>();
  // const [cursorPosition, setCursorPosition] = React.useState(0);
  const [options, setOptions] = React.useState<SelectProps[]>([]);
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

  const handleInputChange = (value: string) => {
    const opts = filterByStringProp(mockOptions, 'label', 'contains', value);
    setOptions(opts);
  };
  const handleKeyDown = () => {};

  React.useEffect(() => {
    const getData = async () => {
      const data = await mockFetchData(mockOptions, 1000);
      setOptions(data);
    };

    getData();
  }, [mockFetchData, setOptions]);

  return (
    <Search
      // cursorPosition={cursorPosition}
      handleBlur={handleBlur}
      handleChange={handleChange}
      handleClear={handleClear}
      handleFocus={handleFocus}
      handleInputChange={handleInputChange}
      handleKeyDown={handleKeyDown}
      handleMenuClose={handleMenuClose}
      isCustomQueryInput={true}
      options={options}
      selectRef={ref}
      searchItems={searchItems}
      handleSetSearchItems={handleSetSearchItems}
      // setCursorPosition={setCursorPosition}
    />
  );
};

export default TopSearch;
