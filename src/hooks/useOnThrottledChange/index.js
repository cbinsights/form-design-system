import { useEffect } from 'react';
import { throttle, debounce } from 'throttle-debounce';

export const throttleValue = 500;

export const throttleInput = (input, throttleFn, debounceFn) => {
  if (input.length < 5 || input.endsWith(' ')) {
    throttleFn(input);
  } else {
    debounceFn(input);
  }
};

let onThrottledChangeThrottled;
let onThrottledChangeDebounced;

const useOnThrottledChange = (onChange, onThrottledChange) => {
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

  return [inputOnChange];
};

export default useOnThrottledChange;
