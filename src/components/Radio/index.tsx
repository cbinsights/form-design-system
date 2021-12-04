import React from 'react';
import { v4 } from 'uuid';
import cc from 'classcat';

import RadioEmptyIcon from 'icons/react/RadioEmptyIcon';
import RadioFilledIcon from 'icons/react/RadioFilledIcon';

export interface RadioProps {
  /**
   * html `name` attribute.
   * Use to create radio groups.
   */
  name: string;

  /** html `label` element content */
  label: string;

  /** If the supplied `label` prop should be rendered to the screen. */
  showLabel?: boolean;

  /** `true` checks the radio by default */
  defaultChecked?: boolean;

  /** Disables form field when `true` */
  disabled?: boolean;

  /** The radio input `checked` attribute */
  checked?: boolean;

  /** The radio input `value` attribute */
  value: string;

  /** The radio input `onChange` attribute */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
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
      ...rest
    }: RadioProps,
    ref
  ) => {
    const id = v4();

    return (
      <div
        className={cc([
          {
            'fdsCheckable--disabled': disabled,
          },
          'fdsCheckable fdsRadio',
        ])}
      >
        <input
          {...rest}
          ref={ref}
          type="radio"
          name={name}
          id={id}
          checked={checked}
          defaultChecked={defaultChecked}
          value={value}
          onChange={onChange}
          className="media--xs" // prevent className being passed down via rest
        />
        <label className="flush--bottom" htmlFor={id}>
          <span className="fdsCheckable-icon--checked">
            <RadioFilledIcon size="xs" />
          </span>
          <span className="fdsCheckable-icon--unchecked">
            <RadioEmptyIcon size="xs" />
          </span>
          {showLabel && <span className="padding--left--s">{label}</span>}
        </label>
      </div>
    );
  }
);

Radio.displayName = 'Radio';

export default Radio;
