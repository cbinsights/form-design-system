import React from 'react';
import { Transition } from 'react-transition-group';
import FDS from 'dictionary/js/styleConstants';
import IconButton from 'components/IconButton';
import DenyIcon from 'icons/react/DenyIcon';
import Icon from 'components/Icon';
export interface CircleInfo {
  radius: number;
  circumference: number;
  centerOffset: number;
}

/**
 *
 * @param {Number} circleSize bounding box size of circle in px
 * @param {Number} strokeWidth width of circle stroke
 */
export const getCircleInfo = (circleSize: number, strokeWidth: number): CircleInfo => {
  const radius = (circleSize - strokeWidth) / 2;

  return {
    radius,
    circumference: Math.PI * radius * 2,
    centerOffset: circleSize / 2,
  };
};

export interface CountdownButtonProps {
  /** Duration in ms of countdown animation */
  duration: number;

  /** Used to render a FDS Icon (should only be used for FDS Icons, e.g. Icon={DenyIcon}) */
  Icon?: Icon;

  /** adds a label to IconButton */
  label?: string;

  /** Click callback for button */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CountdownButton = ({
  label = 'Close',
  Icon = DenyIcon,
  duration,
  onClick,
}: CountdownButtonProps): JSX.Element => {
  const circleSize = 34;
  const strokeWidth = 2;
  const { radius, circumference, centerOffset } = getCircleInfo(circleSize, strokeWidth);

  const defaultCircleStyle = {
    // strokeDasharray sets up a dashed line in which each dash is equal to
    // the circumference of the circle.
    //
    // We offset the dash by 0 to start to create a full circle
    strokeDasharray: circumference,
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
    entered: { strokeDashoffset: circumference },
    exiting: undefined,
    exited: undefined,
    unmounted: undefined,
  };

  return (
    <div
      className="countdownButton"
      style={{
        width: `${circleSize}px`,
        height: `${circleSize}px`,
      }}
    >
      <div className="countdownButton-button">
        <IconButton onClick={onClick} radius="circle" Icon={Icon} label={label} />
      </div>
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
              r={radius}
              strokeWidth={strokeWidth}
              fill="transparent"
              stroke={FDS.FONT_COLOR_HINT}
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

export default CountdownButton;
