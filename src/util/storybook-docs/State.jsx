import { useState } from 'react';

export const State = ({ render, initialValue }) => {
  const [value, setValue] = useState(initialValue);
  return render(value, setValue);
};

export default State;
