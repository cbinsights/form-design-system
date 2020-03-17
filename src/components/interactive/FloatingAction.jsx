import React from 'react';
import PropTypes from 'prop-types';
import IconButton, { THEMES } from 'components/interactive/IconButton';

export const VALID_FAB_THEMES = THEMES.filter((t) => t !== 'ghost');

const FloatingAction = ({
  theme = 'aqua',
  Icon,
  label,
  isActive,
  isLoading,
  ...otherProps
}) => (
  <div className="shape--circle elevation--3 display--inlineBlock">
    <IconButton
      isActive={isActive}
      isLoading={isLoading}
      Icon={Icon}
      label={label}
      size="m"
      radius="circle"
      theme={theme}
      {...otherProps}
    />
  </div>
);

FloatingAction.propTypes = {
  /** Used to render a FDS Icon (should only be used for FDS Icons) */
  Icon: PropTypes.func.isRequired,

  /** Accessibility label */
  label: PropTypes.string.isRequired,

  /** Show loading spinner if true */
  isLoading: PropTypes.bool,

  /** Controls active style UI of button */
  isActive: PropTypes.bool,

  /** Theme of IconButton in the FloatingAction */
  theme: PropTypes.oneOf(VALID_FAB_THEMES),
};

export default FloatingAction;
