import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { throttle, debounce } from 'throttle-debounce';
import IconInput from 'components/forms/IconInput';
import DecoratedInput from 'components/forms/DecoratedInput';

export const throttleValue = 500;

const TextInput = ({
  label,
  errorText,
  throttleOnChange,
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
  let throttleOnChangeThrottled;
  let throttleOnChangeDebounced;

  useEffect(() => {
    if (throttleOnChange) {
      throttleOnChangeThrottled = throttle(throttleValue, throttleOnChange);
      throttleOnChangeDebounced = debounce(throttleValue, throttleOnChange);
    }
  }, [throttleOnChange]);

  const inputOnChange = (e) => {
    e.persist();
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
  throttleOnChange: () => {},
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

  /** Standard input type */
  type: PropTypes.string,

  /** Controls showing asterisk on label, signifying field is required */
  required: PropTypes.bool,

  /** Standard React onChange event */
  onChange: PropTypes.func,

  /** Custom onChange event that throttles / debounces. */
  throttleOnChange: PropTypes.func,

  /** String to place to the left of the input */
  before: PropTypes.string,

  /** String to place to the right of the input */
  after: PropTypes.string,
};

export default TextInput;
