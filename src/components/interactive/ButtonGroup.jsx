import React from 'react';
import PropTypes from 'prop-types';
import combine from 'util/combine';
import GroupButton from 'components/interactive/GroupButton';

const ButtonGroup = ({ buttons, onChange, ...restBtnGroup }) => (
  <div {...restBtnGroup} className="btngroup">
    {buttons.map(
      (
        {
          value,
          content,
          key,
          Icon,
          onClick,
          label,
          // `isFirstButton` and `isLastButton` are private and can't being passed in.
          isFirstButton,
          isLastButton,
          ...restBtn
        },
        index
      ) => (
        <GroupButton
          key={key || label}
          onClick={onChange ? combine(() => onChange(label || value), onClick) : onClick}
          label={label}
          Icon={Icon}
          isFirstButton={index === 0}
          isLastButton={index === buttons.length - 1}
          {...restBtn}
        />
      )
    )}
  </div>
);

ButtonGroup.propTypes = {
  /**
   * Each object in array renders a GroupButton, and (generally) passes all it's values through
   * as props to GroupButton
   */
  buttons: PropTypes.arrayOf(PropTypes.shape(GroupButton.propTypes)).isRequired,

  /**
   * Fires when any Button is clicked in ButtonGroup
   */
  onChange: PropTypes.func,
};

export default ButtonGroup;
