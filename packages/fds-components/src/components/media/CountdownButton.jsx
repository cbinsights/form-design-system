import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import IconButton from '@material-ui/core/IconButton';
import DenyIcon from 'fds-icons/lib/react/DenyIcon';
import FDS from 'fds-dictionary/dist/js/styleConstants';

/**
 *
 * @param {Number} circleSize bounding box size of circle in px
 * @param {Number} strokeWidth width of circle stroke
 */
export const getCircleInfo = (circleSize, strokeWidth) => {
  const radius = (circleSize - strokeWidth) / 2;

  return {
    r: radius,
    c: Math.PI * radius * 2,
    centerOffset: circleSize / 2,
  };
};

const CountdownButton = ({ icon, duration, onClick }) => {
  const circleSize = 40; // match MUI IconButton with xs icon inside
  const strokeWidth = '2';
  const { r, c, centerOffset } = getCircleInfo(circleSize, strokeWidth);

  const defaultCircleStyle = {
    // strokeDasharray sets up a dashed line in which each dash is equal to
    // the circumference of the circle.
    //
    // We offset the dash by 0 to start to create a full circle
    strokeDasharray: c,
    strokeDashoffset: 0,
    transition: `all ${duration}ms linear`,

    // start the countdown at "midnight" position of circle
    transformOrigin: 'center center',
    transform: 'rotate(-90deg)',
  };

  const transitionStyles = {
    entering: { strokeDashoffset: 0 },

    // offsetting the dash by the exact circle circumference lines up
    // the empty part of the dashed stroke with the circle circumference
    entered: { strokeDashoffset: c },
  };

  return (
    <div
      className="countdownButton"
      style={{
        width: `${circleSize}px`,
        height: `${circleSize}px`,
      }}
    >
      <IconButton className="countdownButton-button" onClick={onClick}>
        {icon}
      </IconButton>
      <Transition
        in={true}
        appear
        timeout={{
          appear: 1,
          enter: duration,
        }}
        mountOnEnter
      >
        {(state) => (
          <svg
            className="countdownButton-animation"
            width={circleSize}
            height={circleSize}
            viewBox={`0 0 ${circleSize} ${circleSize}`}
          >
            <circle
              cx={centerOffset}
              cy={centerOffset}
              r={r}
              strokeWidth={strokeWidth}
              fill="transparent"
              stroke={FDS.FONT_COLOR_LIGHT}
              style={{
                ...defaultCircleStyle,
                ...transitionStyles[state],
              }}
            />
          </svg>
        )}
      </Transition>
    </div>
  );
};

CountdownButton.defaultProps = {
  icon: <DenyIcon size="xs" color={FDS.FONT_COLOR_DEFAULT} />,
};

CountdownButton.propTypes = {
  /** Duration in ms of countdown animation */
  duration: PropTypes.number.isRequired,

  /** Icon component to render inside the radial countdown */
  icon: PropTypes.element,

  /** Click callback for button */
  onClick: PropTypes.func,
};

export default CountdownButton;
