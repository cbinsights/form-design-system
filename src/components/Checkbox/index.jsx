import React from 'react';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';
import cc from 'classcat';

import CheckEmptyIcon from 'lib/icons/react/CheckEmptyIcon';
import CheckFilledIcon from 'lib/icons/react/CheckFilledIcon';
import CheckIndeterminateIcon from 'lib/icons/react/CheckIndeterminateIcon';

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const Checkbox = ({
  showLabel = true,
  indeterminate = false,
  disabled = false,
  label,
  inputRef,
  id = uuidv4(),
  ...rest
}) => {
  const IconUnchecked = CheckEmptyIcon;
  const IconChecked = indeterminate ? CheckIndeterminateIcon : CheckFilledIcon;

  return (
    <div
      className={cc([{ 'fdsCheckable--disabled': disabled }, 'fdsCheckable fdsCheckbox'])}
    >
      <input
        {...rest}
        type="checkbox"
        id={id}
        className="media--xs"
        disabled={disabled}
        ref={inputRef}
        aria-label={showLabel ? undefined : label}
      />
      <label className="flush--bottom" htmlFor={id}>
        <span className="fdsCheckable-icon--checked">
          <IconChecked size="xs" />
        </span>
        <span className="fdsCheckable-icon--unchecked">
          <IconUnchecked size="xs" />
        </span>
        {showLabel && <span className="fdsCheckable-label">{label}</span>}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  /** Label used for a11y attributes _and_ the rendered `label` element */
  label: PropTypes.string.isRequired,

  /** If the supplied `label` prop should be rendered to the screen. */
  showLabel: PropTypes.bool,

  /** Ref for input element */
  inputRef: PropTypes.func,

  /** Sets type `indeterminate` to `true` */
  indeterminate: PropTypes.bool,

  /** `true` checks the radio by default */
  defaultChecked: PropTypes.bool,

  /** Disables form field when `true` */
  disabled: PropTypes.bool,

  /** Supplies an `id` to the input, often used with `showLabel={false}` to connect the label. */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Checkbox;
