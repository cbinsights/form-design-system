import React, { HTMLAttributes } from 'react';
import cc from 'classcat';
import * as CheckboxUi from '@radix-ui/react-checkbox';
import * as Label from '@radix-ui/react-label';

import CheckEmptyIcon from 'icons/react/CheckEmptyIcon';
import CheckFilledIcon from 'icons/react/CheckFilledIcon';
import CheckIndeterminateIcon from 'icons/react/CheckIndeterminateIcon';

type CheckboxExtended = Omit<HTMLAttributes<HTMLInputElement>, 'onChange'>;
export interface CheckboxProps extends CheckboxExtended {
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

  onChange?: (checkedEvent: CheckboxUi.CheckedState) => void;
}

const Checkbox = ({
  showLabel = true,
  indeterminate = false,
  disabled = false,
  label,
  inputRef,
  defaultChecked = false,
  onChange = () => {},
  ...rest
}: CheckboxProps): JSX.Element => {
  const IconUnchecked = CheckEmptyIcon;
  const IconChecked = indeterminate ? CheckIndeterminateIcon : CheckFilledIcon;

  const [checked, setChecked] = React.useState(defaultChecked);

  const handleChange = (checkedEvent: CheckboxUi.CheckedState) => {
    setChecked(!checked);
    onChange(checkedEvent);
  };

  return (
    <div
      {...rest}
      className={cc([
        'fdsCheckable',
        { 'fdsCheckable--disabled': !indeterminate && disabled },
      ])}
    >
      <Label.Root className="flush--bottom" role="presentation">
        <CheckboxUi.Root
          className="radix-checkbox"
          checked={checked}
          disabled={disabled}
          onCheckedChange={handleChange}
        >
          <CheckboxUi.Indicator ref={inputRef}>
            {checked && (
              <span className={cc([{ 'checkbox--disabled': disabled }])}>
                <IconChecked size="xs" />
              </span>
            )}
          </CheckboxUi.Indicator>
          {!checked && (
            <span className={cc([{ 'checkbox--disabled': disabled }])}>
              <IconUnchecked size="xs" />
            </span>
          )}
        </CheckboxUi.Root>
        {showLabel && <span className="fdsCheckable-label">{label}</span>}
      </Label.Root>
    </div>
  );
};

export default Checkbox;
