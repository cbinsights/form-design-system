import { Flex, FlexItem } from 'components';
import React from 'react';
import MultiSelect, { MultiSelectProps, OptionProps } from '../MultiSelect';
import { default as Logo } from './Logo';
import Button from 'components/Button';
import FDS from 'dictionary/js/styleConstants';
import { SearchIcon } from 'icons/react';
import { DropdownOption } from '../MultiSelect/CustomSelectComponents/DropdownOption';
import { customStyles } from 'components/MultiSelect/CustomSelectUtils';

export interface HeaderProps {
  onAdvancedSearchClick: React.MouseEventHandler<HTMLButtonElement>;
  onSearchClick: React.MouseEventHandler<HTMLButtonElement>;
  showLogo: boolean;
  logoImg: string;
  Link?: React.ComponentType;
  smartInputProps: MultiSelectProps;
}

const HeaderWrapper = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      backgroundColor: '#000d20',
      height: '60px',
      minWidth: '540px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
    }}
  >
    {children}
  </div>
);

export const Header = ({
  onAdvancedSearchClick,
  onSearchClick,
  showLogo,
  logoImg,
  Link,
  smartInputProps: {
    isClearable = true,
    styles = customStyles(true),
    ...smartInputProps
  },
}: HeaderProps): JSX.Element => {
  const formatOptionLabel = React.useCallback((item: OptionProps) => {
    return (
      <DropdownOption
        selectValue={item}
        query={smartInputProps.inputValue}
        handleOptionClick={smartInputProps.onOptionClick}
        isHeader={true}
      />
    );
  }, []);

  smartInputProps.formatOptionLabel =
    smartInputProps.formatOptionLabel ?? formatOptionLabel;

  return (
    <HeaderWrapper>
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
              />
            </FlexItem>
            <FlexItem shrink>
              <Button
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
              label="Advanced Search"
              theme="ghost"
              onClick={onAdvancedSearchClick}
            />
          </div>
        </FlexItem>
      </Flex>
    </HeaderWrapper>
  );
};

export default Header;
