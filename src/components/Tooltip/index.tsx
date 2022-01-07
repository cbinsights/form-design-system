import React, { useEffect, useState } from 'react';
import FDS from 'dictionary/js/styleConstants';
import { Position } from 'components/Popover';
import { useFloating, shift, getScrollParents } from '@floating-ui/react-dom';

export const DEFAULT_WIDTH = '240px';
export const DELAY_MS = 350;
export const DEFAULT_POSITION = 'bottom';

export interface TooltipProps {
  /** JSX - Acts as a positioning reference for the popover and triggers active state */
  trigger: JSX.Element | string;

  /** Content of the tooltip */
  message: string;

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
}: TooltipProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  const { x, y, reference, floating, strategy, update, refs } = useFloating({
    placement: position,
    strategy: 'absolute',
    middleware: [shift()],
  });

  // Update on scroll and resize for all relevant nodes
  useEffect(() => {
    if (!refs.reference.current || !refs.floating.current) {
      return;
    }
    const parents = [
      ...getScrollParents(refs.reference.current),
      ...getScrollParents(refs.floating.current),
    ];
    parents.forEach((parent) => {
      parent.addEventListener('scroll', update);
      parent.addEventListener('resize', update);
    });
    return () => {
      parents.forEach((parent) => {
        parent.removeEventListener('scroll', update);
        parent.removeEventListener('resize', update);
      });
    };
  }, [refs.reference, refs.floating, update]);

  return (
    <>
      <div
        ref={reference}
        style={{ display: 'inline-block', cursor: 'help' }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {trigger}
      </div>
      {open && (
        <div
          ref={floating}
          style={{
            position: strategy,
            top: y ? y + parseInt(FDS.SPACE_S, 10) : '',
            left: x ?? '',
            maxWidth: maxWidth ? `${maxWidth}px` : DEFAULT_WIDTH,
          }}
          role="tooltip"
          className="bgColor--charcoal inverted align--center padding--y--s padding--x elevation--2 rounded--all fontSize--s fontWeight--bold"
        >
          {message}
        </div>
      )}
    </>
  );
};

export default Tooltip;
