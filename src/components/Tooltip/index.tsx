import React from 'react';
import FDS from 'dictionary/js/styleConstants';
import { styled, keyframes } from '@stitches/react';
import * as RadixTooltip from '@radix-ui/react-tooltip';

export interface TooltipProps {
  /** What we're showing tooltip on */
  trigger: JSX.Element | string;

  /** The actual content of the tooltip */
  message: string;

  /** Maximum width of tooltip */
  maxWidth?: number;

  /** Position preference of tooltip. */
  position?: 'top' | 'left' | 'right' | 'bottom';
}

const FadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const StyledContent = styled(RadixTooltip.Content, {
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '800ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"]': {
      animationName: FadeIn,
    },
  },
});

const Tooltip = ({
  trigger,
  message,
  position = 'bottom',
  maxWidth = 240,
}: TooltipProps): JSX.Element => (
  <RadixTooltip.Provider>
    <RadixTooltip.Root delayDuration={350} defaultOpen>
      <RadixTooltip.Trigger asChild>{trigger}</RadixTooltip.Trigger>
      <StyledContent side={position} sideOffset={parseInt(FDS.SPACE_S, 10)}>
        <div
          style={{ maxWidth: maxWidth ? `${maxWidth}px` : undefined }}
          className="bgColor--charcoal inverted align--center padding--y--s padding--x elevation--2 rounded--all fontSize--s fontWeight--bold"
        >
          {message}
        </div>
      </StyledContent>
    </RadixTooltip.Root>
  </RadixTooltip.Provider>
);

export default Tooltip;
