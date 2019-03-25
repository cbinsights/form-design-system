import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import IconButton from '@material-ui/core/IconButton';
import DenyIcon from 'fds-icons/lib/react/DenyIcon';
import FDS from 'fds-dictionary/dist/js/styleConstants';

const CountdownButton = ({ icon, duration, onClick }) => {
  const circleSize = 40; // match MUI IconButton with xs icon inside
  const strokeWidth = '2';
  const r = (circleSize - strokeWidth) / 2;
  const c = Math.PI * r * 2;

  const defaultCircleStyle = {
    strokeDasharray: c, // dashed stroke with dashes matching circumference
    strokeDashoffset: 0,
    transition: `all ${duration}ms linear`, // transition dash offset change over props.duration

    // start the countdown at "midnight" position of circle
    transformOrigin: 'center center',
    transform: 'rotate(-90deg)',
  };

  const transitionStyles = {
    entering: { strokeDashoffset: 0 },
    entered: { strokeDashoffset: c }, // align empty part of the dashed stroke with circumference
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
              cx={circleSize / 2}
              cy={circleSize / 2}
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
  duration: 3500,
};

CountdownButton.propTypes = {
  /** Icon component to render inside the radial countdown */
  icon: PropTypes.element,

  /** Duration in ms of countdown animation */
  duration: PropTypes.number,

  /** Click callback for button */
  onClick: PropTypes.func,
};

export default CountdownButton;
