import React, { useState } from 'react';
import uuidv4 from 'uuid/v4';
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
  checked,
  disabled,
  onSelect,
  ...otherProps
}) => {
  const id = uuidv4();
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e) => {
    if (!disabled) {
      const updatedCheckedState = !isChecked;
      setIsChecked(updatedCheckedState);
      onSelect(e);
    }
  };

  return (
    <div className={cx('fdsCheckable fdsRadio', { 'fdsCheckable--disabled': disabled })}>
      <input
        type="radio"
        name={name}
        id={id}
        className="media--xs"
        onChange={handleChange}
        defaultChecked={checked}
        {...otherProps}
      />
      <label className="flush--bottom" htmlFor={id}>
        <div role="radio" aria-checked={isChecked} aria-label={label}>
          <span className="fdsRadio-checkedIcon">
            <RadioFilledIcon size="xs" />
          </span>
          <span className="fdsRadio-uncheckedIcon">
            <RadioEmptyIcon size="xs" />
          </span>
        </div>
        {showLabel && <span className="padding--left--half">{label}</span>}
      </label>
    </div>
  );
};

Radio.defaultProps = {
  showLabel: true,
  disabled: false,
  checked: false,
  onSelect: () => {},
};

Radio.propTypes = {
  /**
   * html `name` attribute.
   * Use to create radio groups.
   */
  name: PropTypes.string.isRequired,

  /** html `label` element content */
  label: PropTypes.string.isRequired,

  /** If the supplied `label` prop should be rendered to the screen. */
  showLabel: PropTypes.bool,

  /** Disables form field when `true` */
  disabled: PropTypes.bool,

  /** Sets `checked` state */
  checked: PropTypes.bool,

  /** Selection callback. Only fires when radio gets checked.
   * ```
   * <Radio onSelect={(e) => {}} ... />
   * ```
   */
  onSelect: PropTypes.func,
};

export default Radio;
