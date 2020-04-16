import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import FDS from 'lib/dictionary/js/styleConstants';

import CheckEmptyIcon from 'lib/icons/react/CheckEmptyIcon';
import CheckFilledIcon from 'lib/icons/react/CheckFilledIcon';
import CheckIndeterminateIcon from 'lib/icons/react/CheckIndeterminateIcon';

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const Checkbox = React.forwardRef(
  ({ showLabel = true, disabled = false, label, defaultChecked, ...rest }, ref) => {
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

    const checkboxColor = () => {
      if (disabled) return FDS.COLOR_GRAY;
      if (checked) return FDS.COLOR_BLUE;
      return FDS.FONT_COLOR_SECONDARY;
    };

    return (
      <Element
        className={cx('fdsCheckable fdsCheckbox', 'flush--bottom', {
          'fdsCheckable--disabled': disabled,
        })}
      >
        <input
          ref={ref}
          type="checkbox"
          className="media--xs"
          disabled={disabled}
          onChange={onChange}
          {...rest}
        />
        <span
          aria-hidden
          className="fdsCheckable--icon"
          style={{ pointerEvents: 'none' }}
        >
          <CheckboxIcon size="xs" color={checkboxColor()} />
        </span>
        {showLabel && (
          <span
            className={cx('padding--left--half', {
              'color--secondary': disabled,
            })}
          >
            {label}
          </span>
        )}
      </Element>
    );
  }
);

Checkbox.displayName = 'Checkbox';

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
