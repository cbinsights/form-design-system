import React from 'react';
// import PropTypes from 'prop-types';
import IconButton, { THEMES } from 'components/IconButton';

export const VALID_FAB_THEMES = THEMES.filter((t) => t !== 'ghost');

export interface FloatingActionProps {
  /** Used to render a FDS Icon (should obnly be used for FDS Icons) */
  icon: any;

  /** Accessibility label */
  label: string;

  /** Show loading spinner if true */
  isLoading?: boolean;

  /** Controls active style UI of button */
  isActive?: boolean;

  /** Theme of IconButton in the FloatingAction VALID_FAB_THEMES */
  theme?: 'aqua' | 'outlined';
}

const FloatingAction = ({
  theme = 'aqua',
  icon,
  label,
  isActive,
  isLoading,
  ...rest
}: FloatingActionProps): JSX.Element => (
  <div className={`shape--circle elevation--2 display--inlineBlock bgColor--${theme}`}>
    <IconButton
      isActive={isActive}
      isLoading={isLoading}
      Icon={icon}
      label={label}
      size="m"
      radius="circle"
      theme={theme}
      {...rest}
    />
  </div>
);

// FloatingAction.propTypes = {
//   /** Used to render a FDS Icon (should only be used for FDS Icons) */
//   Icon: PropTypes.func.isRequired,

//   /** Accessibility label */
//   label: PropTypes.string.isRequired,

//   /** Show loading spinner if true */
//   isLoading: PropTypes.bool,

//   /** Controls active style UI of button */
//   isActive: PropTypes.bool,

//   /** Theme of IconButton in the FloatingAction */
//   theme: PropTypes.oneOf(VALID_FAB_THEMES),
// };

export default FloatingAction;
