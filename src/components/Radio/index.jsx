import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';

import RadioEmptyIcon from 'lib/icons/react/RadioEmptyIcon';
import RadioFilledIcon from 'lib/icons/react/RadioFilledIcon';

const Radio = React.forwardRef(
  (
    {
      showLabel = true,
      disabled = false,
      name,
      label,
      checked,
      value,
      onChange,
      className,
      ...rest
    },
    ref
  ) => {
    const RadioIcon = useMemo(() => {
      if (checked) return RadioFilledIcon;
      return RadioEmptyIcon;
    }, [checked]);

    return (
      <div
        className={cc([
          {
            'fdsCheckable--disabled': disabled,
            'fdsRadio--checked': checked,
          },
          'fdsCheckable fdsRadio',
        ])}
      >
        <label className="flush--bottom">
          <input
            ref={ref}
            type="radio"
            name={name}
            checked={checked}
            value={value}
            onChange={onChange}
            className="media--xs"
            {...rest}
          />
          <span className="fdsCheckable-icon--checked">
            <RadioIcon size="xs" />
          </span>
          {showLabel && <span className="padding--left--s">{label}</span>}
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

  /** Disables form field when `true` */
  disabled: PropTypes.bool,

  /** The radio input `checked` attribute */
  checked: PropTypes.bool,

  /** The radio input `value` attribute */
  value: PropTypes.string.isRequired,

  /** The radio input `onChange` attribute */
  onChange: PropTypes.func,

  className: PropTypes.string,
};

export default Radio;
