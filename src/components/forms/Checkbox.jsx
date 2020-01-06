import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import CheckEmptyIcon from '../../../lib/icons/react/CheckEmptyIcon';
import CheckFilledIcon from '../../../lib/icons/react/CheckFilledIcon';
import CheckIndeterminateIcon from '../../../lib/icons/react/CheckIndeterminateIcon';


/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const Checkbox = ({ name, label, value, onChange, indeterminate, checked, disabled }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const classNames = cx('fdsCheckbox', {
    'fdsCheckbox--disabled': disabled,
  });

  const handleChange = () => {
    if (!disabled) {
      const newState = !isChecked;
      setIsChecked(newState);
      onChange(newState);
    }
  };

  let Icon = CheckEmptyIcon;
  if (indeterminate && isChecked) {
    Icon = CheckIndeterminateIcon;
  } else if (isChecked) {
    Icon = CheckFilledIcon;
  }

  return (
    <div className={classNames}>
      <input
        type="checkbox"
        name={name}
        id={name}
        value={value}
        className="fdsCheckbox-input media--xs"
        onChange={handleChange}
        checked={isChecked}
        disabled={disabled}
      />
      <label
        className="fdsCheckbox-label"
        htmlFor={name}
      >
        <div
          role="checkbox"
          aria-checked={isChecked}
        >
          <Icon size="xs" />
        </div>
        {label && (
          <span className="padding--left--half">{label}</span>
        )}
      </label>
    </div>
  );
};

Checkbox.defaultProps = {
  value: undefined,
  checked: false,
  indeterminate: false,
  disabled: false,
  onChange: () => {},
};

Checkbox.propTypes = {
  /** `name` attribute of input element */
  name: PropTypes.string.isRequired,

  /** optional label for checkbox */
  label: PropTypes.string,

  /** optional `value` attribute of input element*/
  value: PropTypes.string,

  /** onChange callback - invoked with the checked state of the checkbox:
   * ```
   * <Checkbox onChange={(isChecked) => {}} ... />
   * ```
   */
  onChange: PropTypes.func,

  /** Sets type `indeterminate` to `true` */
  indeterminate: PropTypes.bool,

  /** Sets `checked` state (for both default and indeterminate types) */
  checked: PropTypes.bool,

  /** Disables form field when `true` */
  disabled: PropTypes.bool,
};

export default Checkbox;
