import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import RadioEmptyIcon from '../../../lib/icons/react/RadioEmptyIcon';
import RadioFilledIcon from '../../../lib/icons/react/RadioFilledIcon';

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const Radio = ({
  name,
  label,
  showLabel,
  value,
  onChange,
  checked,
  disabled,
  ...otherProps
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    if (!disabled) {
      const updatedCheckedState = !isChecked;
      setIsChecked(updatedCheckedState);
      onChange(updatedCheckedState);
    }
  };

  const Icon = isChecked ? RadioFilledIcon : RadioEmptyIcon;

  return (
    <div className={cx('fdsCheckable fdsRadio', { 'fdsCheckable--disabled': disabled })}>
      <input
        type="radio"
        name={name}
        id={name}
        value={value}
        className="media--xs"
        onChange={handleChange}
        checked={isChecked}
        disabled={disabled}
        {...otherProps}
      />
      <label className="flush--bottom" htmlFor={name}>
        <div role="radio" aria-checked={isChecked} aria-label={label}>
          <Icon size="xs" />
        </div>
        {showLabel && <span className="padding--left--half">{label}</span>}
      </label>
    </div>
  );
};

Radio.defaultProps = {
  value: undefined,
  checked: false,
  disabled: false,
  showLabel: true,
  onChange: () => {},
};

Radio.propTypes = {
  /**
   * `name` attribute of input element.
   * Also used for the `htmlFor` prop of the `label`.
   */
  name: PropTypes.string.isRequired,

  /** Label used for a11y attributes _and_ the rendered `label` element */
  label: PropTypes.string.isRequired,

  /** If the supplied `label` prop should be rendered to the screen. */
  showLabel: PropTypes.bool,

  /** optional accessibility label - will not render any text */
  a11yLabel: PropTypes.string,

  /** optional `value` attribute of input element */
  value: PropTypes.string,

  /** onChange callback - invoked with the checked state of the radio:
   * ```
   * <Radio onChange={(isChecked) => {}} ... />
   * ```
   */
  onChange: PropTypes.func,

  /** Sets `checked` state */
  checked: PropTypes.bool,

  /** Disables form field when `true` */
  disabled: PropTypes.bool,
};

export default Radio;
