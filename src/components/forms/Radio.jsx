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
const Radio = ({ name, label, disabled, ...otherProps }) => {
  const id = uuidv4();

  return (
    <div className={cx('fdsCheckable fdsRadio', { 'fdsCheckable--disabled': disabled })}>
      <input
        type="radio"
        name={name}
        id={id}
        className="media--xs"
        onChange={handleChange}
        checked={isChecked}
        disabled={disabled}
        {...otherProps}
      />
      <label className="flush--bottom" htmlFor={id}>
        <div role="radio" aria-checked={isChecked} aria-label={label}>
          <RadioFilledIcon className="fdsRadio-checkedIcon" size="xs" />
          <RadioEmptyIcon className="fdsRadio-uncheckedIcon" size="xs" />
        </div>
        <span className="padding--left--half">{label}</span>
      </label>
    </div>
  );
};

Radio.defaultProps = {
  disabled: false,
  onChange: () => {},
};

Radio.propTypes = {
  /**
   * html `name` attribute.
   * Use to create radio groups.
   */
  name: PropTypes.string.isRequired,

  /** html `label` element content */
  label: PropTypes.string.isRequired,

  /** Disables form field when `true` */
  disabled: PropTypes.bool,
};

export default Radio;
