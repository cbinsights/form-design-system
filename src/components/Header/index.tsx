import { Flex, FlexItem } from 'components';
import React from 'react';
import MultiSelect, { SmartInputProps, OptionProps } from '../SmartInput';
import { default as Logo } from './Logo';
import Button from 'components/Button';
import FDS from 'dictionary/js/styleConstants';
import { SearchIcon } from 'icons/react';
import DropdownOption from 'components/SmartInput/CustomSelectComponents/DropdownOption';
import { customStyles } from 'components/SmartInput/CustomSelectUtils';

export interface HeaderProps {
  onAdvancedSearchClick: React.MouseEventHandler<HTMLButtonElement>;
  onSearchClick: React.MouseEventHandler<HTMLButtonElement>;
  showLogo: boolean;
  logoImg: string;
  Link?: React.ComponentType;
  smartInputProps: SmartInputProps;
}

export const Header = ({
  onAdvancedSearchClick,
  onSearchClick,
  showLogo,
  logoImg,
  Link,
  smartInputProps: {
    isClearable = true,
    styles = customStyles(true),
    selectRef = React.useRef(null),
    ...smartInputProps
  },
}: HeaderProps): JSX.Element => {
  const defaultFormatOptionLabel = (item: OptionProps) => (
    <DropdownOption
      type="detailed"
      option={item}
      query={smartInputProps.inputValue ?? selectRef?.current?.inputRef?.value}
      onOptionClick={smartInputProps.onOptionClick}
    />
  );

  smartInputProps.formatOptionLabel =
    smartInputProps.formatOptionLabel ?? defaultFormatOptionLabel;

  return (
    <div className="fdsHeaderWrapper">
      <Flex>
        {showLogo && (
          <FlexItem shrink align="center">
            <Logo src={logoImg} Link={Link} />
          </FlexItem>
        )}
        <FlexItem>
          <Flex noGutters>
            <FlexItem>
              <MultiSelect
                {...smartInputProps}
                isClearable={isClearable}
                styles={styles}
                selectRef={selectRef}
              />
            </FlexItem>
            <FlexItem shrink>
              <Button
                data-testid="search-button"
                label="Search"
                IconLeft={SearchIcon}
                style={{
                  backgroundColor: FDS.COLOR_BLUE,
                  borderRadius: `0 ${FDS.SPACE_XS} ${FDS.SPACE_XS} 0`,
                }}
                onClick={onSearchClick}
              />
            </FlexItem>
          </Flex>
        </FlexItem>
        <FlexItem shrink>
          <div className="inverted">
            <Button
              data-testid="advanced-search-button"
              label="Advanced Search"
              theme="ghost"
              onClick={onAdvancedSearchClick}
            />
          </div>
        </FlexItem>
      </Flex>
    </div>
  );
};

export default Header;
