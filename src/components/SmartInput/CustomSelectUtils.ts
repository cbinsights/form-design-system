import FDS from 'dictionary/js/styleConstants';
import CustomValueContainer from './CustomSelectComponents/CustomValueContainer';
import CustomClearIndicator from './CustomSelectComponents/CustomClearIndicator';
import CustomInput from './CustomSelectComponents/CustomInput';
import CustomMultiValue from './CustomSelectComponents/CustomMultiValue';
import CustomSingleValue from './CustomSelectComponents/CustomSingleValue';
import CustomMenuList from './CustomSelectComponents/CustomMenuList';
import { GroupBase, StylesConfig, ThemeConfig } from 'react-select';
import { SelectComponents } from 'react-select/dist/declarations/src/components';
import { OptionProps } from '.';

const SEARCH_BTN_OFFSET = 102;

const noopComponent = (): null => null;

export const customComponents: Partial<
  SelectComponents<OptionProps, boolean, GroupBase<OptionProps>>
> = {
  DropdownIndicator: noopComponent,
  IndicatorSeparator: noopComponent,
  NoOptionsMessage: noopComponent,
  MultiValueRemove: noopComponent,
  ValueContainer: CustomValueContainer,
  ClearIndicator: CustomClearIndicator,
  Input: CustomInput,
  MultiValue: CustomMultiValue,
  MenuList: CustomMenuList,
  SingleValue: CustomSingleValue,
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

export const customStyles = (
  useStylesForHeader?: boolean
): StylesConfig<OptionProps, boolean> => {
  const focusedOptionColor = useStylesForHeader
    ? FDS.COLOR_AQUA
    : 'rgba(64, 64, 64, 0.08)';
  return {
    container: (base) => ({
      ...base,
      width: '100%',
      fontSize: `${FDS.FONT_SIZE_L} !important`,
    }),
    input: (base, state) => {
      const isFocused = state?.selectProps?.isFocused || state?.selectProps?.menuIsOpen;
      const isLastCursorPosition = Array.isArray(state?.selectProps?.value)
        ? state?.selectProps?.value?.length === state?.selectProps?.cursorPosition ||
          state?.selectProps?.value?.length === 0
        : true;

      return {
        ...base,
        color: FDS.COLOR_SLATE,
        flex: 'none',
        cursor: 'pointer',
        display: useStylesForHeader && isLastCursorPosition ? 'block' : 'inline-grid',
        flexGrow: useStylesForHeader && isFocused && isLastCursorPosition ? 1 : 0,
        overflow: useStylesForHeader ? 'hidden' : 'inherit',
        ':after': useStylesForHeader
          ? {
              maxWidth: isLastCursorPosition ? '100%' : 'inherit',
              whiteSpace: 'nowrap',
            }
          : {},
        input: {
          boxShadow: 'none !important',
          minHeight: 'var(--space-xl)',
        },
      };
    },
    menu: (base) => ({
      ...base,
      width: useStylesForHeader ? `calc(100% + ${SEARCH_BTN_OFFSET}px)` : '100%',
      zIndex: Number(FDS.ZINDEX_MODAL),
      margin: '1px 0',
    }),
    menuList: (base) => ({
      ...base,
      borderRadius: FDS.SPACE_XS,
      maxHeight: 'none',
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? focusedOptionColor : 'inherit',
      color: state.isFocused && useStylesForHeader ? FDS.COLOR_WHITE : FDS.COLOR_SLATE,
    }),
    control: (base) => ({
      ...base,
      paddingLeft: useStylesForHeader ? '12px' : FDS.SPACE_S,
      border: 'none !important',
      boxShadow: 'none',
      borderRadius: useStylesForHeader
        ? `${FDS.SPACE_XS} 0 0 ${FDS.SPACE_XS}`
        : FDS.SPACE_XS,
    }),
    multiValue: () => ({
      margin: useStylesForHeader ? '0 3px' : '0 2px',
    }),
    singleValue: (base) => ({
      ...base,
      color: FDS.COLOR_SLATE,
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
      whiteSpace: useStylesForHeader ? 'nowrap' : 'normal',
      overflow: 'auto',
      textOverflow: 'ellipsis',
      flexWrap: useStylesForHeader ? 'nowrap' : 'wrap',
      msOverflowStyle: 'none',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        width: '0',
        display: 'none',
      },
    }),
  };
};
