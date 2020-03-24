import React, { useState, useRef } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import rafSchd from 'raf-schd';

/**
 * @function getScrollAtributes
 * Returns attributes about user scroll position.
 *
 * @param {Object} e - scroll event from overflow element
 * @param {Number} contentScrollWidth - scrollWidth of inner content element
 */
export const getScrollAtributes = (e, contentScrollWidth) => {
  const { scrollLeft, clientWidth } = e.target;

  /* "end" of scroll is the total width minus the visible area */
  const scrollEnd = contentScrollWidth - clientWidth;

  return {
    scrolled: Boolean(scrollLeft),
    scrollEnd: Boolean(scrollLeft === scrollEnd),
  };
};

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtScrollEnd, setIsAtScrollEnd] = useState(false);
  const contentEl = useRef(null);

  const containerClassNames = cx('hscroll', `hscroll--bgColor--${bgColor}`, {
    'hscroll--enableFade': enableFade,
    'hscroll--enableGutter': enableGutter,
    'hscroll--scrolled': isScrolled,
    'hscroll--scrollEnd': isAtScrollEnd,
  });

  const onScroll = (e) => {
    const { scrolled, scrollEnd } = getScrollAtributes(e, contentEl.current.scrollWidth);
    rafSchd(setIsScrolled(scrolled));
    rafSchd(setIsAtScrollEnd(scrollEnd));
  };

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
