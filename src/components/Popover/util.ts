import { Placement } from '@popperjs/core';
import { Alignment, PopperAlignment, Position } from '.';

/**
 * https://popper.js.org/popper-documentation.html#Popper.placements
 *
 * @param {String} position prop value
 * @param {String} alignment prop value
 * @returns {String} valid `placement` value for PopperJS `Popper` component
 */
export const getPopperPlacement = (
  position: Position,
  alignment: Alignment
): Placement => {
  // Popperjs does not have a "center" placement variation. It centers by default.
  // Our component explicitly accepts a `center` value for alignment.
  const variation: '' | `-${PopperAlignment}` =
    !alignment || alignment === 'center' ? '' : `-${alignment}`;
  return `${position}${variation}`;
};
