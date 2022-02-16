import React from 'react';
import { ClearIndicatorProps, components } from 'react-select';
import DenyIcon from 'icons/react/DenyIcon';
import styles from '../styles.css';
import { SelectProps } from '../Search';

const CustomClearIndicator = (
  props: ClearIndicatorProps<SelectProps, true>
): JSX.Element => {
  return (
    <components.ClearIndicator {...props}>
      <span className={`margin--x--s ${styles.pointer}`}>
        <DenyIcon size="xs" />
      </span>
    </components.ClearIndicator>
  );
};

export default CustomClearIndicator;
