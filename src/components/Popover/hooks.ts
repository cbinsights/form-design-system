import { MutableRefObject, useEffect } from 'react';

let overflowStyle: string | null = null;

/**
 * Hook that disables scroll on a DOM node when `isDisabled` is true.
 *
 * @param {Object} disableScrollRef - react ref to DOM node
 * @param {Boolean} isDisabled
 */
export const useDisableScroll = (
  disableScrollRef: MutableRefObject<HTMLElement> | undefined,
  isDisabled: boolean
): void => {
  useEffect(() => {
    if (disableScrollRef) {
      const domNode = disableScrollRef.current || disableScrollRef;
      if (isDisabled) {
        overflowStyle = domNode.style.overflow;
        domNode.style.overflow = 'hidden';
      } else if (overflowStyle !== null) {
        domNode.style.overflow = overflowStyle;
      }
    }
  }, [disableScrollRef, isDisabled]);
};

/**
 * Hook that invokes `closeCallback` if a popover is active when a user scrolls.
 *
 * @param {Object} closeOnScrollRef - react ref to scrolling DOM node
 * @param {Boolean} isActive - if the popover is currently open/active
 * @param {Boolean} closeCallback - function that closes the popover
 */
export const useCloseOnScroll = (
  closeOnScrollRef: MutableRefObject<HTMLElement> | undefined,
  isActive: boolean,
  closeCallback: () => void
): void => {
  useEffect(() => {
    if (closeOnScrollRef && isActive) {
      const scrollRef = closeOnScrollRef.current || closeOnScrollRef;
      scrollRef.addEventListener('scroll', function scrollLogic() {
        closeCallback();
        scrollRef.removeEventListener('scroll', scrollLogic);
      });
    }
  }, [closeOnScrollRef, isActive]);
};
