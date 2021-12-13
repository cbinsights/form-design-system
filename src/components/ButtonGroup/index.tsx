import React from 'react';
import combine from 'util/combine';
import GroupButton from './GroupButton';

export interface ButtonGroupProps {
  /**
   * Each object in array renders a GroupButton, and (generally) passes all it's values through
   * as props to GroupButton
   */
  buttons: Array<any>;

  /**
   * Fires when any Button is clicked in ButtonGroup
   */
  onChange?: React.FormEventHandler<HTMLInputElement>;
}

const ButtonGroup = ({
  buttons,
  onChange,
  ...restBtnGroup
}: ButtonGroupProps): JSX.Element => (
  <div {...restBtnGroup} className="btngroup">
    {buttons.map(({ value, key, Icon, onClick, label, ...restBtn }, index) => (
      <GroupButton
        key={key || label}
        onClick={onChange ? combine(() => onChange(label || value), onClick) : onClick}
        label={label}
        Icon={Icon}
        isFirstButton={index === 0}
        isLastButton={index === buttons.length - 1}
        {...restBtn}
      />
    ))}
  </div>
);

export default ButtonGroup;
