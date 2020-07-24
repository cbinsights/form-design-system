import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { throttle, debounce } from 'throttle-debounce';
import cc from 'classcat';
import IconInput from './IconInput';
import DecoratedInput from './DecoratedInput';

export const throttleValue = 500;

export const throttleInput = (input, throttleFn, debounceFn) => {
  if (input.length < 5 || input.endsWith(' ')) {
    throttleFn(input);
  } else {
    debounceFn(input);
  }
};

const TextInput = React.forwardRef(
  (
    {
      label,
      labelWidth,
      isLabelBold,
      labelPosition = 'top',
      errorText,
      hasError,
      onThrottledChange,
      showRequired,
      showLabel = true,
      onChange = () => {},
      type = 'text',
      IconLeft,
      IconRight,
      after,
      before,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    // Refer to the following for an explanation on
    // the throttling / debouncing approach:
    // https://www.peterbe.com/plog/how-to-throttle-and-debounce-an-autocomplete-input-in-react
    let onThrottledChangeThrottled;
    let onThrottledChangeDebounced;

    const assignThrottleFunctions = () => {
      if (onThrottledChange) {
        onThrottledChangeThrottled = throttle(throttleValue, onThrottledChange);
        onThrottledChangeDebounced = debounce(throttleValue, onThrottledChange);
      }
    };

    const inputOnChange = (e) => {
      e.persist();
      onChange(e);
      if (onThrottledChange) {
        throttleInput(
          e.target.value,
          onThrottledChangeThrottled,
          onThrottledChangeDebounced
        );
      }
    };

    useEffect(assignThrottleFunctions, [onThrottledChange]);

    const Element = showLabel ? 'label' : 'div';

    return (
      <>
        <Element
          className={cc([
            'fdsTextInput-root',
            `fdsTextInput-root--${labelPosition}Label`,
          ])}
        >
          {showLabel && label && (
            <div
              className={cc([
                {
                  'fontWeight--bold': isLabelBold,
                  'margin--bottom--xs': labelPosition === 'top',
                },
                'fdsTextInput-label',
              ])}
              style={labelWidth ? { width: labelWidth } : undefined}
            >
              {label}
              {showRequired && <span className="color--red">&nbsp;*</span>}
            </div>
          )}
          <DecoratedInput after={after} before={before}>
            <IconInput IconLeft={IconLeft} IconRight={IconRight}>
              <input
                {...props}
                ref={ref}
                aria-label={ariaLabel || (showLabel ? label : undefined)}
                aria-invalid={errorText || hasError ? true : undefined}
                onChange={inputOnChange}
                type={type}
                className={cc([
                  {
                    error: errorText || hasError,
                  },
                  'fdsTextInput',
                ])}
              />
            </IconInput>
          </DecoratedInput>
        </Element>
        {errorText && <div className="color--red type--data">{errorText}</div>}
      </>
    );
  }
);

TextInput.displayName = 'TextInput';

TextInput.propTypes = {
  /** Control aria-label */
  'aria-label': PropTypes.string,
  /** Control whether input has error styling */
  hasError: PropTypes.bool,
  /** Control whether label receives a bold treatment */
  isLabelBold: PropTypes.bool,
  /** Displays as red error text below input */
  errorText: PropTypes.string,

  /** Label used for `label` element */
  label: PropTypes.string.isRequired,

  /** Specify width of label (useful for when label is positioned to left */
  labelWidth: PropTypes.string,

  /**
   * FDS Icon _reference_
   * `IconLeft={StarFilledIcon}`
   */
  IconLeft: PropTypes.func,

  /**
   * FDS Icon _reference_
   * `IconRight={StarFilledIcon}`
   */
  IconRight: PropTypes.func,

  /** Input element `type` attribute */
  type: PropTypes.string,

  /** Controls showing asterisk on label, signifying field is required */
  required: PropTypes.bool,

  /** Standard React onChange event */
  onChange: PropTypes.func,

  /** Custom onChange event that throttles / debounces. */
  onThrottledChange: PropTypes.func,

  /** String to place to the left of the input */
  before: PropTypes.string,

  /** String to place to the right of the input */
  after: PropTypes.string,

  labelPosition: PropTypes.oneOf(['top', 'left']),
  showRequired: PropTypes.bool,
  showLabel: PropTypes.bool,
};

export default TextInput;
