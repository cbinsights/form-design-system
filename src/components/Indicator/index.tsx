import React from 'react';
import cc from 'classcat';

export interface IndicatorProps {
  /** Text inside the button */
  label: string;
  /** Controls size display */
  size?: 'xs' | 's';
}

const Indicator = ({ label, size = 's', ...rest }: IndicatorProps): JSX.Element => (
  <div
    {...rest}
    className={cc(['fdsIndicator', 'wrap--singleLine', `fdsIndicator--${size}`])}
  >
    {label}
  </div>
);

export default Indicator;
