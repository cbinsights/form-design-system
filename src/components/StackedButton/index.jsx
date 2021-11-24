import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';
import baseElement from 'util/baseElement';
import CaretDownIcon from 'icons/react/CaretDownIcon';

const StackedButton = forwardRef(
  ({ Icon, Link, label, disabled, isActive, isToggled, hasCaret, ...rest }, ref) => {
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

StackedButton.propTypes = {
  /**
   * Takes in a react-router `Link` reference and sets it
   * as the base element. You may ONLY use it like the
   * following:
   *
   * - `import { Link } from 'react-router'`
   * - `Link={Link}`
   */
  Link: PropTypes.elementType,
  /**
   * Controls whether the button is disabled or not. Will control the disabled
   * presentation of either an anchor or button rendered under the hood,
   * but will only add a disabled attribute for buttons
   */
  disabled: PropTypes.bool,
  /**  Pass in "only" a FDS Icon reference to display it (e.g. Icon={ApproveIcon}) */
  Icon: PropTypes.func,
  /** Text inside the button */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** Controls the active state, which changes UI (colors) */
  isActive: PropTypes.bool,
  /** Controls the toggled state, which changes UI (colors) */
  isToggled: PropTypes.bool,
  /** Controls whether caret icon is displayed */
  hasCaret: PropTypes.bool,
};

export default StackedButton;
