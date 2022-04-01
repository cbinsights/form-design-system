import React, { HTMLAttributes } from 'react';
import cc from 'classcat';
import * as CheckboxUi from '@radix-ui/react-checkbox';
import * as Label from '@radix-ui/react-label';

import CheckEmptyIcon from 'icons/react/CheckEmptyIcon';
import CheckFilledIcon from 'icons/react/CheckFilledIcon';
import CheckIndeterminateIcon from 'icons/react/CheckIndeterminateIcon';

type CheckboxExtended = Omit<HTMLAttributes<HTMLInputElement>, 'onChange' | 'ref'>;
export interface CheckboxProps extends CheckboxExtended {
  /** Label used for a11y attributes _and_ the rendered `label` element */
  label: string;

  /** If the supplied `label` prop should be rendered to the screen. */
  showLabel?: boolean;

  /** Sets type `indeterminate` to `true` */
  indeterminate?: boolean;

  /** Disables form field when `true` */
  disabled?: boolean;

  /** Supplies an `id` to the input, it is often used with `showLabel={false}` to connect the label. */
  id?: string;

  name?: string;

  /*** callback that passes back the checkbox state - true, false or "indeterminate" */
  onChange?: (checkedEvent: CheckboxUi.CheckedState) => void;

  /*** Value of checkbox */
  checked?: boolean;
}

const Checkbox = ({
  showLabel = true,
  indeterminate = false,
  disabled = false,
  label,
  defaultChecked = false,
  checked,
  onChange = () => {},
  ...rest
}: CheckboxProps): JSX.Element => {
  const IconUnchecked = CheckEmptyIcon;
  const IconChecked = indeterminate ? CheckIndeterminateIcon : CheckFilledIcon;

  const [internalChecked, setChecked] = React.useState(checked ?? defaultChecked);

  const handleChange = (checkedEvent: CheckboxUi.CheckedState) => {
    if (checked === undefined) {
      setChecked(!internalChecked);
    }
    onChange(checkedEvent);
  };

  const checkedValue = checked ?? internalChecked;
  return (
    <div
      {...rest}
      className={cc([
        'fdsCheckableCheckbox',
        { 'fdsCheckableCheckbox--disabled': !indeterminate && disabled },
      ])}
    >
      <Label.Root className="flush--bottom" role="presentation">
        <CheckboxUi.Root
          className="radix-checkbox"
          checked={checkedValue}
          disabled={disabled}
          onCheckedChange={handleChange}
        >
          <CheckboxUi.Indicator>
            {checkedValue && (
              <span className={cc([{ 'checkbox--disabled': disabled }])}>
                <IconChecked size="xs" />
              </span>
            )}
          </CheckboxUi.Indicator>
          {!checkedValue && (
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
