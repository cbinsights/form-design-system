import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import baseElement from '../../util/baseElement';

const StackedButton = ({ Icon, Link, label, disabled, isActive, ...rest }) => {
  const Element = baseElement({ href: rest.href, as: Link });

  return (
    <Element
      {...rest}
      className={cx('fdsStackedButton', 'rounded--all', 'fdsStackedButton--ghost', {
        'fdsStackedButton--disabled': disabled,
        'fdsStackedButton--active': isActive,
      })}
      disabled={disabled && Element === 'button'}
    >
      {Icon && (
        <div className="fdsStackedButton-icon alignChild--top--center">
          <Icon size="xs" />
        </div>
      )}
      {label}
    </Element>
  );
};

StackedButton.propTypes = {
  /**
   * Pass **only** react-router `Link` here. You may **not**
   * pass anything else here: SFC, Class Component, etc (even
   * if they use react-router `Link` underneath the hood).
   */
  Link: PropTypes.func,
  /**
   * Controls whether the button is disabled or not. Will control the disabled
   * presentation of either an anchor or button rendered under the hood,
   * but will only add a disabled attribute for buttons
   */
  disabled: PropTypes.bool,
  /** Used to render a FDS Icon (should only be used for FDS Icons) */
  Icon: PropTypes.func,
  /** Text inside the button */
  label: PropTypes.node,
  /** Controls the active state, which changes UI (colors) */
  isActive: PropTypes.bool,
};

export default StackedButton;
