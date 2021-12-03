import React, { forwardRef } from 'react';
import cc from 'classcat';
import CaretDownIcon from 'icons/react/CaretDownIcon';

export interface DropdownButtonProps {
  /** content rendered to the left of the carat */
  children?: React.ReactNode;
  /** Controls disabled state of dropdown button */
  disabled?: boolean;
  /** Controls the button going full width */
  isFullWidth?: boolean;
  /** Controls active state of dropdown */
  isActive?: boolean;
}

const DropdownButton = forwardRef<HTMLButtonElement, DropdownButtonProps>(
  (
    { children, isFullWidth = false, isActive, disabled, ...rest }: DropdownButtonProps,
    ref
  ) => (
    <button
      {...rest}
      className={cc([
        {
          'fdsDropdown--disabled': disabled,
          'fdsDropdown--isFullWidth': isFullWidth,
          'fdsDropdown--isActive': isActive && !disabled,
        },
        'display--inlineFlex',
        'fdsDropdown',
        'border--focus',
        'rounded--all',
      ])}
      disabled={disabled}
      ref={ref}
    >
      <div>{children}</div>
      <div className="margin--left--s alignChild--center--center">
        <CaretDownIcon customSize={12} />
      </div>
    </button>
  )
);

DropdownButton.displayName = 'DropdownButton';

export default DropdownButton;
