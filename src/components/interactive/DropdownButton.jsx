import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import CaretDownIcon from 'lib/icons/react/CaretDownIcon';

const DropdownButton = ({ children, isFullWidth = false, ...rest }) => (
  <button
    {...rest}
    className={cx('display--inlineFlex', 'fdsDropdown', 'border--focus', 'rounded--all', {
      'fdsButton--isFullWidth': isFullWidth,
    })}
  >
    <div>{children}</div>
    <div className="margin--left--half alignChild--center--center">
      <CaretDownIcon customSize={12} />
    </div>
  </button>
);

DropdownButton.propTypes = {
  /**
   * content rendered to the left of the carat
   */
  children: PropTypes.node,
  /** Controls the button going full width */
  isFullWidth: PropTypes.bool,
};

export default DropdownButton;
