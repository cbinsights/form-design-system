import React, { forwardRef } from 'react';
import cc from 'classcat';
import baseElement from 'util/baseElement';
import CaretDownIcon from 'icons/react/CaretDownIcon';
import { IconProps } from 'components/Icon';

export interface StackedButtonProps {
  /**
   * Takes in a react-router `Link` reference and sets it
   * as the base element. You may ONLY use it like the
   * following:
   *
   * - `import { Link } from 'react-router'`
   * - `Link={Link}`
   */
  Link: React.ElementType;
  /**
   * Controls whether the button is disabled or not. Will control the disabled
   * presentation of either an anchor or button rendered under the hood,
   * but will only add a disabled attribute for buttons
   */
  disabled?: boolean;
  /**  Pass in "only" a FDS Icon reference to display it (e.g. Icon={ApproveIcon}) */
  Icon: React.ComponentType<IconProps>;
  /** Text inside the button */
  label: string | number;
  /** Controls the active state, which changes UI (colors) */
  isActive?: boolean;
  /** Controls the toggled state, which changes UI (colors) */
  isToggled?: boolean;
  /** Controls whether caret icon is displayed */
  hasCaret?: boolean;
  /** URL for anchor element */
  href?: string;
  /** handler for onclick event */
  onClick?: () => void;
}

const StackedButton = forwardRef(
  (
    {
      Icon,
      Link,
      label,
      disabled,
      isActive,
      isToggled,
      hasCaret,
      ...rest
    }: StackedButtonProps,
    ref
  ) => {
    const Element = baseElement({ href: rest.href, onClick: true, as: Link });

    const ariaPressed = () => {
      if (Element === 'button') {
        return isToggled || isActive;
      }
      return undefined;
    };

    return (
      <Element
        {...rest}
        ref={ref}
        className={cc([
          {
            'fdsStackedButton--disabled': disabled,
            'fdsStackedButton--isActive': isActive,
            'fdsStackedButton--isToggled': isToggled,
          },
          'fdsStackedButton',
          'rounded--all',
          'fdsStackedButton--ghost',
          'border--focus--noTransition',
          'transition--default',
        ])}
        disabled={disabled && Element === 'button'}
        aria-pressed={ariaPressed()}
      >
        {Icon && (
          <div className="fdsStackedButton-iconWrapper">
            <Icon size="s" />
            {hasCaret && <CaretDownIcon customSize={10} />}
          </div>
        )}
        {label}
      </Element>
    );
  }
);

StackedButton.displayName = 'StackedButton';

export default StackedButton;
