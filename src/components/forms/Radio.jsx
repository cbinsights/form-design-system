import React from 'react';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';
import cx from 'classnames';

import RadioEmptyIcon from 'lib/icons/react/RadioEmptyIcon';
import RadioFilledIcon from 'lib/icons/react/RadioFilledIcon';

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const Radio = ({ inputRef, name, label, showLabel, disabled, ...rest }) => {
  const id = uuidv4();

  return (
    <div className={cx('fdsCheckable fdsRadio', { 'fdsCheckable--disabled': disabled })}>
      <input
        ref={inputRef}
        type="radio"
        name={name}
        id={id}
        className="media--xs"
        {...rest}
      />
      <label className="flush--bottom" htmlFor={id}>
        <span className="fdsCheckable-icon--checked">
          <RadioFilledIcon size="xs" />
        </span>
        <span className="fdsCheckable-icon--unchecked">
          <RadioEmptyIcon size="xs" />
        </span>
        {showLabel && <span className="padding--left--half">{label}</span>}
      </label>
    </div>
  );
};

Radio.defaultProps = {
  showLabel: true,
  disabled: false,
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

  /** Ref for input element */
  inputRef: PropTypes.func,

  /** `true` checks the radio by default */
  defaultChecked: PropTypes.bool,

  /** Disables form field when `true` */
  disabled: PropTypes.bool,
};

export default Radio;
