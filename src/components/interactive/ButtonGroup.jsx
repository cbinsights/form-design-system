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
       * Takes in a react-router `Link` reference and sets it
       * as the base element. You may ONLY  use it like the
       * following:
       * ```
       * import { Link } from 'react-router'
       * Link={Link}
       * ```
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
      /**  Pass in "only" a FDS Icon reference to display it (e.g. Icon={ApproveIcon}) */
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
