import React from 'react';
import FDS from 'dictionary/js/styleConstants';
import Popover, { Position } from 'components/Popover';

export const DEFAULT_WIDTH = '240px';
export const DELAY_MS = 350;
export const DEFAULT_POSITION = 'bottom';

export interface TooltipProps {
  /** JSX - Acts as a positioning reference for the popover and triggers active state */
  trigger: JSX.Element | string;

  /** Content of the tooltip */
  message?: string;

  /** Maximum width of tooltip */
  maxWidth?: number;

  /**
   * Position preference of tooltip.
   * `top` for example, will place the tooltip above the trigger.
   */
  position?: Position;
}

const Tooltip = ({
  trigger,
  message,
  maxWidth,
  position = DEFAULT_POSITION,
}: TooltipProps): JSX.Element => (
  <Popover
    interactionMode="hover"
    trigger={<span style={{ cursor: 'help' }}>{trigger}</span>}
    distance={parseInt(FDS.SPACE_S, 10)}
    position={position}
    alignment="center"
    transitionName="GrowFast"
    delay={DELAY_MS}
  >
    <div
      role="tooltip"
      style={{ maxWidth: maxWidth ? `${maxWidth}px` : DEFAULT_WIDTH }}
      className="bgColor--charcoal inverted align--center padding--y--s padding--x elevation--2 rounded--all fontSize--s fontWeight--bold"
    >
      {message}
    </div>
  </Popover>
);

export default Tooltip;
