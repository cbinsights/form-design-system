import { useState } from 'react';

type Props<T> = {
  render: (value: T, setValue: (newValue: T) => void) => JSX.Element;
  initialValue: T;
};

export function State<ValueType>({
  render,
  initialValue,
}: Props<ValueType>): JSX.Element {
  const [value, setValue] = useState(initialValue);
  return render(value, setValue);
}

export default State;
