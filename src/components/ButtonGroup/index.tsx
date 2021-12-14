import React from 'react';
import GroupButton, { GroupButtonProps } from './GroupButton';

type ButtonModificationProps = {
  key: string | number;
  value: number;
  onClick: any;
};

type CombinedButtonProps = GroupButtonProps & ButtonModificationProps;
export interface ButtonGroupProps {
  /**
   * Each object in array renders a GroupButton, and (generally) passes all it's values through
   * as props to GroupButton
   */
  buttons: CombinedButtonProps[];

  /**
   * Fires when any Button is clicked in ButtonGroup
   */
  onChange?: any;
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
        onClick={onChange}
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
