import FDS from 'dictionary/js/styleConstants';
import CustomValueContainer from './CustomSelectComponents/CustomValueContainer';
import CustomClearIndicator from './CustomSelectComponents/CustomClearIndicator';
import CustomInput from './CustomSelectComponents/CustomInput';
import CustomMultiValue from './CustomSelectComponents/CustomMultiValue';
import CustomOption from './CustomSelectComponents/CustomOption';
import CustomMenuList from './CustomSelectComponents/CustomMenuList';
import { GroupBase, StylesConfig, ThemeConfig } from 'react-select';
import { SelectComponents } from 'react-select/dist/declarations/src/components';
import { OptionProps } from '.';

const SEARCH_BTN_OFFSET = 102;

const noopComponent = (): null => null;

const CustomDropdownIndicator = noopComponent;
const CustomIndicatorSeparator = noopComponent;
const CustomNoOptionsMessage = noopComponent;
const CustomMultiValueRemove = noopComponent;

export const customComponents: Partial<
  SelectComponents<OptionProps, true, GroupBase<OptionProps>>
> = {
  DropdownIndicator: CustomDropdownIndicator,
  IndicatorSeparator: CustomIndicatorSeparator,
  NoOptionsMessage: CustomNoOptionsMessage,
  MultiValueRemove: CustomMultiValueRemove,
  ValueContainer: CustomValueContainer,
  ClearIndicator: CustomClearIndicator,
  Input: CustomInput,
  MultiValue: CustomMultiValue,
  Option: CustomOption,
  MenuList: CustomMenuList,
};

export const customThemes: ThemeConfig = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary50: FDS.COLOR_AQUA,
  },
  spacing: {
    ...theme.spacing,
    controlHeight: 32,
    baseUnit: 0,
  },
});

export const customStyles = (isHeader?: boolean): StylesConfig<OptionProps, true> => {
  const focusedOptionColor = !isHeader ? 'rgba(64, 64, 64, 0.08)' : FDS.COLOR_AQUA;
  return {
    container: (base) => ({
      ...base,
      width: '100%',
      fontSize: `${FDS.FONT_SIZE_L} !important`,
    }),
    input: (base) => ({
      ...base,
      color: FDS.COLOR_SLATE,
      flex: 'none',
      cursor: 'pointer',
      input: {
        boxShadow: 'none !important',
        minHeight: 'var(--space-xl)',
      },
    }),
    menu: (base) => ({
      ...base,
      width: !isHeader ? '100%' : `calc(100% + ${SEARCH_BTN_OFFSET}px)`,
      zIndex: Number(FDS.ZINDEX_MODAL),
      margin: '1px 0',
    }),
    menuList: (base) => ({
      ...base,
      maxHeight: 'none',
      borderRadius: FDS.SPACE_XS,
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? focusedOptionColor : 'inherit',
      color: state.isFocused && !!isHeader ? FDS.COLOR_WHITE : FDS.COLOR_SLATE,
    }),
    control: (base) => ({
      ...base,
      paddingLeft: !isHeader ? FDS.SPACE_XS : '12px',
      border: !isHeader ? '' : 'none !important',
      boxShadow: 'none',
      borderRadius: !isHeader ? FDS.SPACE_XS : `${FDS.SPACE_XS} 0 0 ${FDS.SPACE_XS}`,
    }),
    multiValue: () => ({
      margin: !isHeader ? '0 2px' : '0 3px',
    }),
    multiValueLabel: () => ({}),
    placeholder: (base) => ({
      ...base,
      color: FDS.FONT_COLOR_HINT,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }),
    valueContainer: (base) => ({
      ...base,
      whiteSpace: !isHeader ? 'normal' : 'nowrap',
      overflow: 'auto',
      textOverflow: 'ellipsis',
      flexWrap: !isHeader ? 'wrap' : 'nowrap',
      msOverflowStyle: 'none',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        width: '0',
        display: 'none',
      },
    }),
  };
};
