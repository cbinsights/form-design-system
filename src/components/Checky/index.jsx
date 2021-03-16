import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { CustomCheckboxContainer, CustomCheckboxInput } from '@reach/checkbox';
import cc from 'classcat';

import CheckEmptyIcon from 'lib/icons/react/CheckEmptyIcon';
import CheckFilledIcon from 'lib/icons/react/CheckFilledIcon';
import CheckIndeterminateIcon from 'lib/icons/react/CheckIndeterminateIcon';

const Checkbox = ({ checked, label, disabled, showLabel = true, ...rest }) => {
  const CheckboxIcon = useMemo(() => {
    if (checked) {
      if (checked === 'mixed') {
        return CheckIndeterminateIcon;
      }
      return CheckFilledIcon; // true
    }
    return CheckEmptyIcon; // false
  }, [checked]);

  const Element = showLabel ? 'label' : 'div';

  return (
    <Element className="alignChild--left--center">
      <CustomCheckboxContainer
        checked={checked}
        disabled={disabled}
        className={cc([{ checked, disabled }, 'checky-container'])}
        {...rest}
      >
        <CustomCheckboxInput
          disabled={disabled}
          checked={checked}
          aria-label={!showLabel ? label : undefined}
        />
        <span aria-hidden className="checky-span">
          <CheckboxIcon size="xs" />
        </span>
      </CustomCheckboxContainer>
      {showLabel && <span className="label">{label}</span>}
    </Element>
  );
};

Checkbox.propTypes = {
  /**
   * Setting any one of the 3 values here will turn component into controlled component.
   * */
  checked: PropTypes.oneOf([true, false, 'mixed']),

  /** Label used for `label` element */
  label: PropTypes.string.isRequired,

  /** Disables form field when `true` */
  disabled: PropTypes.bool,

  /** Controls whether the label surfaces as a text label, or is hidden and applied as an aria-label */
  showLabel: PropTypes.bool,
};

export default Checkbox;
