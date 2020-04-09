import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FDS from 'lib/dictionary/js/styleConstants';

import CheckEmptyIcon from 'lib/icons/react/CheckEmptyIcon';
import CheckFilledIcon from 'lib/icons/react/CheckFilledIcon';
import CheckIndeterminateIcon from 'lib/icons/react/CheckIndeterminateIcon';

import { CustomCheckboxInput, CustomCheckboxContainer } from '@reach/checkbox';

const Checkbox = ({ label, defaultChecked, showLabel = true, ...rest }) => {
  const [checkedState, setChecked] = useState(rest.checked || defaultChecked || false);
  const checked = rest.checked != null ? rest.checked : checkedState;

  // We should maybe fire onChange in "addition" to setChecked, based on whether we
  // interpret checkbox as being "controlled" or not
  const onChange = rest.onChange ? rest.onChange : (e) => setChecked(e.target.checked);

  const CheckboxIcon = (() => {
    if (checked) {
      if (checked === 'mixed') {
        return CheckIndeterminateIcon;
      }
      return CheckFilledIcon;
    }
    return CheckEmptyIcon;
  })();

  const Element = showLabel ? 'label' : 'div';

  return (
    <Element className="display--inlineBlock">
      <CustomCheckboxContainer
        checked={rest.checked != null ? rest.checked : checked}
        onChange={onChange}
        className="fdsCheckboxContainer"
      >
        <CustomCheckboxInput {...rest} aria-label={!showLabel ? label : undefined} />
        <span aria-hidden style={{ pointerEvents: 'none' }}>
          <CheckboxIcon size="xs" color={checked ? FDS.COLOR_BLUE : undefined} />
        </span>
      </CustomCheckboxContainer>
      {showLabel && <span className="padding--left--half">{label}</span>}
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

  /** `true` checks the checkbox by default */
  defaultChecked: PropTypes.bool,

  /** Disables form field when `true` */
  disabled: PropTypes.bool,

  onChange: PropTypes.func,

  /** Controls whether the label surfaces as a text label, or is hidden and applied as an aria-label */
  showLabel: PropTypes.bool,
};

export default Checkbox;
