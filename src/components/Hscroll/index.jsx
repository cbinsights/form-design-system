import React, { useRef } from 'react';
import cc from 'classcat';
import PropTypes from 'prop-types';
import useScrollAttributes from 'hooks/useScrollAttributes';

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const Hscroll = ({
  enableFade = true,
  enableGutter = false,
  bgColor = 'white',
  children,
  ...rest
}) => {
  const ref = useRef();
  const [isAtScrollStart, isAtScrollEnd] = useScrollAttributes(ref);

  const containerClassNames = cc([
    {
      'hscroll--enableFade': enableFade,
      'hscroll--enableGutter': enableGutter,
      'hscroll--scrolled': !isAtScrollStart,
      'hscroll--scrollEnd': isAtScrollEnd,
    },
    'hscroll',
    `hscroll--bgColor--${bgColor}`,
  ]);

  return (
    <div className={containerClassNames} {...rest}>
      <div className="hscroll-overflowEl">
        <div ref={enableFade ? ref : undefined} className="hscroll-content">
          {children}
        </div>
      </div>
    </div>
  );
};

Hscroll.propTypes = {
  /** adds gradient fades on overflowed sides */
  enableFade: PropTypes.bool,

  /** adds background to scrollbar gutter */
  enableGutter: PropTypes.bool,

  /** match to the background color of the parent */
  bgColor: PropTypes.oneOf(['white', 'haze']),

  /** React children */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
};

export default Hscroll;
