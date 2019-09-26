import React from 'react';
import PropTypes from 'prop-types';
import GroupButton from './GroupButton';
import combine from '../../util/combine';

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
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Pass **only** react-router `Link` here. You may **not**
       * pass anything else here: SFC, Class Component, etc (even
       * if they use react-router `Link` underneath the hood).
       */
      Link: PropTypes.func,
      /**
       * Use if labels are not unique
       */
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

      isActive: PropTypes.bool,
      /**
       * The text that appears in the button
       */
      label: PropTypes.string,
      /** Used to render a FDS Icon (should only be used for FDS Icons) */
      Icon: PropTypes.func,
      /**
       * A component to wrap the entire group button. The
       * `wrapper` must render the children prop passed into it
       * to render the GroupButton.
       */
      Wrapper: PropTypes.elementType,
    })
  ).isRequired,

  /**
   * Fires when any Button is clicked in ButtonGroup
   */
  onChange: PropTypes.func,
};

export default ButtonGroup;
