import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { throttle, debounce } from 'throttle-debounce';
import IconInput from 'components/forms/IconInput';
import DecoratedInput from 'components/forms/DecoratedInput';

export const throttleValue = 500;

export const throttleInput = (input, throttleFn, debounceFn) => {
  if (input.length < 5 || input.endsWith(' ')) {
    throttleFn(input);
  } else {
    debounceFn(input);
  }
};

const TextInput = ({
  label,
  errorText,
  onThrottledChange,
  required,
  onChange,
  type,
  IconLeft,
  IconRight,
  after,
  before,
  ...props
}) => {
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
    throttleInput(e.target.value, onThrottledChangeThrottled, onThrottledChangeDebounced);
  };

  useEffect(assignThrottleFunctions, [onThrottledChange]);

  const Element = label ? 'label' : 'div';

  return (
    <>
      <Element className="fdsTextInput-root">
        {label && (
          <div className="fdsTextInput-label">
            {label}
            {required && <span className="color--red">&nbsp;*</span>}
          </div>
        )}
        <DecoratedInput after={after} before={before}>
          <IconInput IconLeft={IconLeft} IconRight={IconRight}>
            <input
              {...props}
              required={required}
              onChange={inputOnChange}
              type={type}
              className="fdsTextInput"
            />
          </IconInput>
        </DecoratedInput>
      </Element>
      {errorText && <div className="color--red type--data">{errorText}</div>}
    </>
  );
};

TextInput.defaultProps = {
  type: 'text',
  onChange: () => {},
  onThrottledChange: () => {},
};

TextInput.propTypes = {
  errorText: PropTypes.string,

  /** Label used for `label` element */
  label: PropTypes.string,

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
};

export default TextInput;
