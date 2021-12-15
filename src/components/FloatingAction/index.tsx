import React from 'react';
import Icon from 'components/Icon';
import IconButton from 'components/IconButton';

type VALID_FAB_THEMES = 'aqua' | 'outlined';

export interface FloatingActionProps {
  /** Used to render a FDS Icon (should obnly be used for FDS Icons) */
  Icon: Icon;

  /** Accessibility label */
  label: string;

  /** Show loading spinner if true */
  isLoading?: boolean;

  /** Controls active style UI of button */
  isActive?: boolean;

  /** Theme of IconButton in the FloatingAction VALID_FAB_THEMES */
  theme?: VALID_FAB_THEMES;
}

const FloatingAction = ({
  theme = 'aqua',
  Icon,
  label,
  isActive,
  isLoading,
  ...rest
}: FloatingActionProps): JSX.Element => (
  <div className={`shape--circle elevation--2 display--inlineBlock bgColor--${theme}`}>
    <IconButton
      isActive={isActive}
      isLoading={isLoading}
      Icon={Icon}
      label={label}
      size="m"
      radius="circle"
      theme={theme}
      {...rest}
    />
  </div>
);

export default FloatingAction;
