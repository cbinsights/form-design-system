/* eslint-disable import/prefer-default-export */

/**
 * Checks if a DOMEvent is NOT on any of the given refs.
 *
 * For example:
 * ```
 * const isNotButtonClick = isNotRefsEvent([myButtonRef], e);
 * ```
 *
 * @param {Array} refs react refs
 * @param {DOMEvent} e
 * @returns {Boolean} if the event target matches any refs
 */
export const isNotRefsEvent = (refs, e) =>
  refs.every((ref) => {
    const validRef = ref && (ref.current || ref);
    return validRef && validRef.contains && !validRef.contains(e.target);
  });
