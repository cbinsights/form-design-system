import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import baseElement from 'util/baseElement';
import CaretDownIcon from 'lib/icons/react/CaretDownIcon';

const StackedButton = ({ Icon, Link, label, disabled, isActive, hasCaret, ...rest }) => {
  const Element = baseElement({ href: rest.href, onClick: true, as: Link });

  return (
    <Element
      {...rest}
      className={cx(
        'fdsStackedButton',
        'rounded--all',
        'fdsStackedButton--ghost',
        'border--focus--noTransition',
        'transition--default',
        {
          'fdsStackedButton--disabled': disabled,
          'fdsStackedButton--isActive': isActive,
        }
      )}
      disabled={disabled && Element === 'button'}
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
};

StackedButton.propTypes = {
  /**
   * Takes in a react-router `Link` reference and sets it
   * as the base element. You may ONLY use it like the
   * following:
   *
   * - `import { Link } from 'react-router'`
   * - `Link={Link}`
   */
  Link: PropTypes.func,
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
  /** Controls whether caret icon is displayed */
  hasCaret: PropTypes.bool,
};

export default StackedButton;
