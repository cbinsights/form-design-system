import React, { forwardRef } from 'react';
import cc from 'classcat';
import CaretDownIcon from 'lib/icons/react/CaretDownIcon';

export type Props = {
  children?: React.ReactNode;
  disabled?: boolean;
  isFullWidth?: boolean;
  isActive?: boolean;
};

const DropdownButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, isFullWidth = false, isActive, disabled, ...rest }: Props, ref) => (
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
