import { useState, useEffect, RefObject } from 'react';
import rafSchd from 'raf-schd';

export type ScrollAttributes = { scrollStart: boolean; scrollEnd: boolean };

export const getScrollAttributes = (
  scrollLeft: number,
  clientWidth: number,
  contentScrollWidth: number
): ScrollAttributes => {
  /* "end" of scroll is the total width minus the visible area */
  const scrollEnd = contentScrollWidth - clientWidth;

  return {
    scrollStart: !scrollLeft,
    scrollEnd: Boolean(scrollLeft === scrollEnd),
  };
};

const useScrollAttributes = (ref: RefObject<HTMLElement>): Array<boolean> => {
  const [isAtScrollStart, setIsAtScrollStart] = useState(true);
  const [isAtScrollEnd, setIsAtScrollEnd] = useState(false);

  const throttledStart = rafSchd(setIsAtScrollStart);
  const throttledEnd = rafSchd(setIsAtScrollEnd);

  const onScroll = () => {
    if (ref.current) {
      const { scrollLeft, clientWidth, scrollWidth } = ref.current;
      const { scrollStart, scrollEnd } = getScrollAttributes(
        scrollLeft,
        clientWidth,
        scrollWidth
      );

      throttledStart(scrollStart);
      throttledEnd(scrollEnd);
    }
  };

  useEffect(() => {
    ref.current?.addEventListener('scroll', onScroll);
    return () => {
      ref.current?.removeEventListener('scroll', onScroll);
    };
  }, [ref]);

  return [isAtScrollStart, isAtScrollEnd];
};

export default useScrollAttributes;
