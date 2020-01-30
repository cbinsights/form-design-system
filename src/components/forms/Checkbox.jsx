import React, { useState } from 'react';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';
import cx from 'classnames';

import CheckEmptyIcon from 'lib/icons/react/CheckEmptyIcon';
import CheckFilledIcon from 'lib/icons/react/CheckFilledIcon';
import CheckIndeterminateIcon from 'lib/icons/react/CheckIndeterminateIcon';

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const Checkbox = ({
  label,
  showLabel,
  onChange,
  indeterminate,
  disabled,
  inputRef,
  defaultChecked,
  ...otherProps
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const id = uuidv4();

  const handleChange = (e) => {
    if (!disabled) {
      const updatedCheckedState = !isChecked;
      setIsChecked(updatedCheckedState);
      onChange(e);
    }
  };

  let Icon = CheckEmptyIcon;
  if (indeterminate && isChecked) {
    Icon = CheckIndeterminateIcon;
  } else if (isChecked) {
    Icon = CheckFilledIcon;
  }

  return (
    <div
      className={cx('fdsCheckable fdsCheckbox', { 'fdsCheckable--disabled': disabled })}
    >
      <input
        type="checkbox"
        id={id}
        className="media--xs"
        onChange={handleChange}
        disabled={disabled}
        ref={inputRef}
        {...otherProps}
      />
      <label className="flush--bottom" htmlFor={id}>
        <div role="checkbox" aria-checked={isChecked} aria-label={label}>
          <Icon size="xs" />
        </div>
        {showLabel && <span className="padding--left--half">{label}</span>}
      </label>
    </div>
  );
};

Checkbox.defaultProps = {
  checked: false,
  indeterminate: false,
  disabled: false,
  showLabel: true,
};

Checkbox.propTypes = {
  /** Label used for a11y attributes _and_ the rendered `label` element */
  label: PropTypes.string.isRequired,

  /** If the supplied `label` prop should be rendered to the screen. */
  showLabel: PropTypes.bool,

  /** Ref for input element */
  inputRef: PropTypes.func,

  /** onChange callback:
   * ```
   * <Checkbox onChange={(e) => {}} ... />
   * ```
   */
  onChange: PropTypes.func,

  /** Sets type `indeterminate` to `true` */
  indeterminate: PropTypes.bool,

  /** `true` checks the radio by default */
  defaultChecked: PropTypes.bool,

  /** Disables form field when `true` */
  disabled: PropTypes.bool,
};

export default Checkbox;
