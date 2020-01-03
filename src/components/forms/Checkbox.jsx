import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const Checkbox = ({ name, label, value, onChange, indeterminate, checked, disabled }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const classNames = cx('fdsCheckbox', {
    'fdsCheckbox--checked': isChecked,
    'fdsCheckbox--disabled': disabled,
    'fdsCheckbox--indeterminate': indeterminate,
  });

  const handleChange = () => {
    const newState = !isChecked;
    if (!disabled) {
      setIsChecked(newState);
      onChange(newState);
    }
  };

  const input = (
    <input
      type="checkbox"
      className={classNames}
      name={name}
      value={value}
      disabled={disabled}
    />
  );

  return (
    <div className={classNames}>
      {label ? (
        <label htmlFor={name}>
          {input}
          <span className="padding--left--half">{label}</span>
        </label>
      ) : (
        input
      )}
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

  /** onChange callback */
  onChange: PropTypes.func,

  /** Sets type `indeterminate` to `true` */
  indeterminate: PropTypes.bool,

  /** Sets `checked` state (for both default and indeterminate types) */
  checked: PropTypes.bool,

  /** Disables form field when `true` */
  disabled: PropTypes.bool,
};

export default Checkbox;
