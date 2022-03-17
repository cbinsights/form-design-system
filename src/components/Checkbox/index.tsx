import React, { HTMLAttributes } from 'react';
import { v4 } from 'uuid';
import cc from 'classcat';
import * as CheckboxUi from '@radix-ui/react-checkbox';

import CheckEmptyIcon from 'icons/react/CheckEmptyIcon';
import CheckFilledIcon from 'icons/react/CheckFilledIcon';
import CheckIndeterminateIcon from 'icons/react/CheckIndeterminateIcon';

export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  /** Label used for a11y attributes _and_ the rendered `label` element */
  label: string;

  /** If the supplied `label` prop should be rendered to the screen. */
  showLabel?: boolean;

  /** Ref for input element */
  inputRef?: React.RefObject<HTMLInputElement>;

  /** Sets type `indeterminate` to `true` */
  indeterminate?: boolean;

  /** Disables form field when `true` */
  disabled?: boolean;

  /** Supplies an `id` to the input, often used with `showLabel={false}` to connect the label. */
  id?: string;

  name?: string;
}

const Checkbox = ({
  showLabel = true,
  indeterminate = false,
  disabled = false,
  label,
  inputRef,
  id = v4(),
}: // ...rest
CheckboxProps): JSX.Element => {
  const IconUnchecked = CheckEmptyIcon;
  const IconChecked = indeterminate ? CheckIndeterminateIcon : CheckFilledIcon;

  const [checked, setChecked] = React.useState(indeterminate);

  const handleChange = () => setChecked(!checked);

  return (
    <>
      <CheckboxUi.Root
        // {...rest}
        className="radix-checkbox"
        checked={checked}
        disabled={disabled}
        onCheckedChange={handleChange}
        id={id}
      >
        <CheckboxUi.Indicator ref={inputRef}>
          <label className="flush--bottom" htmlFor={id}>
            {checked && (
              <span className="fdsCheckable-icon--checked radix-checkbox">
                <IconChecked size="xs" />
              </span>
            )}
          </label>
        </CheckboxUi.Indicator>
        {!checked && (
          <span className="fdsCheckable-icon--unchecked">
            <IconUnchecked size="xs" />
          </span>
        )}
      </CheckboxUi.Root>
      {showLabel && <span className="fdsCheckable-label">{label}</span>}
    </>
  );
};

export default Checkbox;

{
  /*
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
  */
}
