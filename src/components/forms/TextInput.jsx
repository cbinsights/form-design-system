import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { throttle, debounce } from 'throttle-debounce';

export const throttleValue = 500;

const TextInput = ({
  label,
  errorText,
  throttleOnChange,
  required,
  onChange,
  type,
  ...props
}) => {
  // Refer to the following for an explanation on
  // the throttling / debouncing approach:
  // https://www.peterbe.com/plog/how-to-throttle-and-debounce-an-autocomplete-input-in-react
  let throttleOnChangeThrottled;
  let throttleOnChangeDebounced;

  useEffect(() => {
    throttleOnChangeThrottled = throttle(throttleValue, throttleOnChange);
    throttleOnChangeDebounced = debounce(throttleValue, throttleOnChange);
  }, [throttleOnChange]);

  const inputOnChange = (e) => {
    onChange(e);
    if (e.target.value.length < 5) {
      throttleOnChangeThrottled(e);
    } else {
      throttleOnChangeDebounced(e);
    }
  };

  const Element = label ? 'label' : 'div';

  return (
    <>
      <Element className="fdsTextInput-label">
        {label && (
          <div style={{ marginBottom: '4px' }}>
            {label}
            {required && <span className="color--red">&nbsp;*</span>}
          </div>
        )}
        <input {...props} onChange={inputOnChange} type={type} className="fdsTextInput" />
      </Element>
      {errorText && <div className="color--red type--data">{errorText}</div>}
    </>
  );
};

TextInput.defaultProps = {
  type: 'text',
  onChange: () => {},
  throttleOnChange: () => {},
};

TextInput.propTypes = {
  errorText: PropTypes.string,

  /** Label used for `label` element */
  label: PropTypes.string,

  /** Standard input type */
  type: PropTypes.string,

  /** Controls showing asterisk on label, signifying field is required */
  required: PropTypes.boolean,

  /** Standard React onChange event */
  onChange: PropTypes.func,

  /** Custom onChange event that throttles / debounces. Callback is called with event (same as onChange) */
  throttleOnChange: PropTypes.func,
};

export default TextInput;
