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
const Radio = React.forwardRef(
  (
    {
      showLabel = true,
      disabled = false,
      name,
      label,
      checked,
      defaultChecked,
      value,
      onChange,
    },
    ref
  ) => {
    const id = uuidv4();

    return (
      <div
        className={cx('fdsCheckable fdsRadio', {
          'fdsCheckable--disabled': disabled,
        })}
      >
        <input
          ref={ref}
          type="radio"
          name={name}
          id={id}
          className="media--xs"
          checked={checked}
          defaultChecked={defaultChecked}
          value={value}
          onChange={onChange}
          readOnly={!onChange}
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
  }
);

Radio.displayName = 'Radio';

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

  /** `true` checks the radio by default */
  defaultChecked: PropTypes.bool,

  /** Disables form field when `true` */
  disabled: PropTypes.bool,

  /** The radio input `checked` attribute */
  checked: PropTypes.bool,

  /** The radio input `value` attribute */
  value: PropTypes.string.isRequired,

  /** The radio input `onChange` attribute */
  onChange: PropTypes.func,
};

export default Radio;
