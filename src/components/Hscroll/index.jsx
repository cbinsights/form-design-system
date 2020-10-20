import React from 'react';
import cc from 'classcat';
import PropTypes from 'prop-types';
import useGetScrollAttributes from './useGetScrollAttributes';

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
  const [onScroll, contentEl, isScrolled, isAtScrollEnd] = useGetScrollAttributes();

  const containerClassNames = cc([
    {
      'hscroll--enableFade': enableFade,
      'hscroll--enableGutter': enableGutter,
      'hscroll--scrolled': isScrolled,
      'hscroll--scrollEnd': isAtScrollEnd,
    },
    'hscroll',
    `hscroll--bgColor--${bgColor}`,
  ]);

  return (
    <div
      className={containerClassNames}
      onScroll={enableFade ? onScroll : undefined}
      {...rest}
    >
      <div className="hscroll-overflowEl">
        <div ref={contentEl} className="hscroll-content">
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
