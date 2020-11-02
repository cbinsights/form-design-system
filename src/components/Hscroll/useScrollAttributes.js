import { useState, useRef } from 'react';
import rafSchd from 'raf-schd';

/**
 * @function getScrollAttributes
 * Returns attributes about user scroll position.
 *
 * @param {Object} e - scroll event from overflow element
 * @param {Number} contentScrollWidth - scrollWidth of inner content element
 */
export const getScrollAttributes = (e, contentScrollWidth) => {
  const { scrollLeft, clientWidth } = e.target;

  /* "end" of scroll is the total width minus the visible area */
  const scrollEnd = contentScrollWidth - clientWidth;

  return {
    scrollStart: !scrollLeft,
    scrollEnd: Boolean(scrollLeft === scrollEnd),
  };
};

const useScrollAttributes = () => {
  const [isAtScrollStart, setIsAtScrollStart] = useState(true);
  const [isAtScrollEnd, setIsAtScrollEnd] = useState(false);
  const contentEl = useRef(null);

  const onScroll = (e) => {
    const { scrollStart, scrollEnd } = getScrollAttributes(
      e,
      contentEl.current.scrollWidth
    );
    rafSchd(setIsAtScrollStart(scrollStart));
    rafSchd(setIsAtScrollEnd(scrollEnd));
  };

  return [onScroll, contentEl, isAtScrollStart, isAtScrollEnd];
};

export default useScrollAttributes;
