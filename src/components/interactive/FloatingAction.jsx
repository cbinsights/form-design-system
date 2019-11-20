import React from 'react';
import PropTypes from 'prop-types';
import IconButton, { VALID_THEMES } from './IconButton';

export const VALID_FAB_THEMES = VALID_THEMES.filter((t) => t !== 'ghost');

const FloatingAction = ({ Icon, label, isActive, isLoading, ...otherProps }) => (
  <div className="shape--circle elevation--3">
    <IconButton
      isActive={isActive}
      isLoading={isLoading}
      Icon={Icon}
      label={label}
      size="m"
      radius="circle"
      {...otherProps}
    />
  </div>
);

FloatingAction.defaultProps = {
  theme: 'purple',
};

FloatingAction.propTypes = {
  /** Used to render a FDS Icon (should only be used for FDS Icons) */
  Icon: PropTypes.func.isRequied,

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
