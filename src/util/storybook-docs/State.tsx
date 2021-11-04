import { useState } from 'react';

type Props<ValueType> = {
  render: (value: ValueType, setValue: (newValue: ValueType) => void) => JSX.Element;
  initialValue: ValueType;
};

export function State<ValueType>({
  render,
  initialValue,
}: Props<ValueType>): JSX.Element {
  const [value, setValue] = useState(initialValue);
  return render(value, setValue);
}

export default State;
