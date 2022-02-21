import Header, { HeaderProps } from './index';
import React from 'react';
import { StoryObj } from '@storybook/react';
import { MultiValue, SelectInstance } from 'react-select';
import { mockFetchData } from 'util/mockFetchData';
import { filterByStringProp } from 'util/mockFetchData/filterData';
import { mockOptions } from '../MultiSelect/mockData';
import { MultiSelectProps, OptionProps } from '../MultiSelect';
import cbiLogo from './CBI-logo-white.svg';

export const Primary: StoryObj<HeaderProps> = {
  args: {
    showLogo: true,
    logoImg: cbiLogo,
  },
  argTypes: {
    onSearchClick: {
      action: 'onSearchClick',
    },
    onAdvancedSearchClick: {
      action: 'onAdvancedSearchClick',
    },
    smartInputProps: {
      onChange: {
        action: 'smartInputProps/onChange',
      },
      onClear: {
        action: 'smartInputProps/onClear',
      },
      onMenuClose: {
        action: 'smartInputProps/onMenuClose',
      },
      onBlur: {
        action: 'smartInputProps/onBlur',
      },
      onFocus: {
        action: 'smartInputProps/onFocus',
      },
      onKeyDown: {
        action: 'smartInputProps/onKeyDown',
      },
      onOptionClick: {
        action: 'smartInputProps/onOptionClick',
      },
    },
  },
  render: ({ showLogo, logoImg, onSearchClick, onAdvancedSearchClick }): JSX.Element => {
    const [searchItems, setSearchItems] = React.useState<MultiValue<OptionProps>>();
    const [options, setOptions] = React.useState<OptionProps[]>([]);
    // const [cursorPosition, setCursorPosition] = React.useState(0);
    const ref = React.useRef<SelectInstance<OptionProps, true>>(null);
    const [inputValue, setInputValue] = React.useState('');

    const onChange = () => {};
    const onClear = () => {};
    const onMenuClose = () => {};
    const onBlur = () => {};
    const onFocus = () => {};
    const onOptionClick = () => {};
    const onKeyDown = () => {};

    const onSetSearchItems = (items: MultiValue<OptionProps>) => {
      console.log('items', items);
      setSearchItems(items);
    };

    const onInputChange = (value: string) => {
      const opts = filterByStringProp(mockOptions, 'label', 'contains', value);
      setInputValue(value);
      setOptions(opts);
    };

    React.useEffect(() => {
      const getData = async () => {
        const data = await mockFetchData(mockOptions, 1000);
        setOptions(data);
      };

      getData();
    }, [mockFetchData, setOptions]);

    const mergedSmartInputProps: MultiSelectProps = {
      onBlur,
      onChange,
      onClear,
      onFocus,
      onInputChange,
      onKeyDown,
      onMenuClose,
      onOptionClick,
      onSetSearchItems,

      placeholder: 'Search for companies',
      options,
      searchItems,
      inputValue,

      selectRef: ref,
    };

    return (
      <Header
        onSearchClick={onSearchClick}
        showLogo={showLogo}
        logoImg={logoImg}
        onAdvancedSearchClick={onAdvancedSearchClick}
        smartInputProps={mergedSmartInputProps}
      />
    );
  },
};

export default {
  component: Header,
  title: 'components/Header',
};
