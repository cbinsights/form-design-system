import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import FDS from 'fds-dictionary/dist/js/styleConstants';
import customPropTypes from '../../util/customPropTypes';

const VIEWBOX_BASE = '100'; // 100 allows us to treat other sizes as %
const STROKE_WIDTH = '5';

const setCssCustomProperty = /*istanbul ignore next*/ (name, value) => {
  document.documentElement.style.setProperty(name, value);
};

const CircularCountdown = ({ size, color, duration, progress }) => {
  const position = VIEWBOX_BASE / 2;
  const r = position - STROKE_WIDTH;
  const c = 2 * Math.PI * r;

  const getStrokeOffset = (percent) => c * ((1 - percent) / 100);

  const circleProps = {};

  if (progress !== undefined) {
    circleProps.strokeDasharray = c;
    circleProps.strokeDashoffset = getStrokeOffset(progress);
  }

  if (typeof duration === 'number') {
    setCssCustomProperty('--circularCountdown-duration', duration);
    setCssCustomProperty('--circularCountdown-dashoffset-start', getStrokeOffset(100));
    setCssCustomProperty('--circularCountdown-dashoffset-end', getStrokeOffset(0));
  }

  return (
    <div>
      <p className="typemod--small typemod--red">
        circleProps: {JSON.stringify(circleProps, null, 2)}
      </p>
      <svg
        className={cx('circularCountdown', `media--${size.toLowerCase()}`, {
          'circularCountdown--duration': duration,
        })}
        width="100%"
        height="100%"
        viewBox={`0 0 ${VIEWBOX_BASE} ${VIEWBOX_BASE}`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="circularProgress-bar"
          r={r}
          cx={position}
          cy={position}
          stroke={color}
          fill="transparent"
          strokeWidth={STROKE_WIDTH}
          {...circleProps}
        />
      </svg>
    </div>
  );
};

CircularCountdown.defaultProps = {
  size: 'm',
  color: FDS.FONT_COLOR_LIGHT,
};

CircularCountdown.propTypes = {
  /** Size of circle */
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),

  /** Color of circle path */
  color: PropTypes.string,

  /** Duration of animation in `ms` (starts on component mount) */
  duration: PropTypes.number,

  /** Number 1-100 declaring % progress */
  progress: customPropTypes.range(1, 100),
};

export default CircularCountdown;
