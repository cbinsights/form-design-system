import { useState, useEffect } from 'react';
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

const useScrollAttributes = (ref) => {
  const [isAtScrollStart, setIsAtScrollStart] = useState(true);
  const [isAtScrollEnd, setIsAtScrollEnd] = useState(false);

  const onScroll = (e) => {
    const { scrollStart, scrollEnd } = getScrollAttributes(e, ref.current.scrollWidth);
    rafSchd(setIsAtScrollStart(scrollStart));
    rafSchd(setIsAtScrollEnd(scrollEnd));
  };

  useEffect(() => {
    ref.current.addEventListener('scroll', onScroll);
    return () => {
      ref.current.removeEventListener('scroll', onScroll);
    };
  }, [ref]);

  return [isAtScrollStart, isAtScrollEnd];
};

export default useScrollAttributes;
