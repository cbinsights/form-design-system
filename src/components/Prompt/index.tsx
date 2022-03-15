import React, { useEffect, useRef, useState } from 'react';
import cc from 'classcat';
import Flex from 'components/Flex';
import { DenyIcon } from 'icons/react';
import { IconButton } from 'components';
import FlexItem from 'components/FlexItem';
import { ButtonProps } from 'components/Button';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import rafSchd from 'raf-schd';

export const isElementOverflowing = ({
  current,
}: React.MutableRefObject<HTMLDivElement | null>): boolean => {
  // Checking for current first is safer just in case,
  // and will also fail gracefully in tests
  if (current) {
    return current.scrollHeight > current.clientHeight;
  }
  return false;
};

export interface PromptProps {
  /** Controls text in header */
  title?: string;
  /** Controls string displayed in content area */
  desc?: React.ReactNode | string;
  /** Represents primary button (MUST be an FDS Button) */
  primaryButton: React.ReactElement<ButtonProps>;
  /** Represents secondary button (MUST be an FDS Button) */
  secondaryButton: React.ReactElement<ButtonProps>;
  /** Controls whether modal (and backdrop) are visible or not */
  isOpen?: boolean;
  /**
   * Callback that user can pass in, to be conditionally fired when
   * user attempts to close modal. When defined, the modal close button appears
   */
  onDismiss?: () => void;
  /** Keeps the Prompt from being rendered in a portal and renders it locally instead. */
  disablePortal?: boolean;
}

const Prompt = ({
  title,
  desc,
  primaryButton,
  secondaryButton,
  isOpen,
  onDismiss,
}: PromptProps): JSX.Element => {
  const contentEl = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const schdSetIsOverflowing = rafSchd(setIsOverflowing);

  const handleResize = () => {
    schdSetIsOverflowing(isElementOverflowing(contentEl));
  };

  useEffect(() => {
    handleResize(); // needs to fire once immediately on mount
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <AlertDialog.Root open={isOpen} onOpenChange={onDismiss}>
      <AlertDialog.Overlay className="dialog-overlay"></AlertDialog.Overlay>
      <div className="dialog-zIndex dialog-wrapper">
        <AlertDialog.Content
          // onPointerDownOutside={(event) => event.preventDefault()}
          asChild
          className="ease-in-out"
        >
          <div
            className="dialog elevation--3 border--focus--noTransition"
            role={'alertdialog'}
            aria-labelledby={title && 'a11y-dialog-title'}
            aria-describedby="a11y-dialog-desc"
            tabIndex={-1}
            aria-modal="true"
            style={{
              maxWidth: '500px',
              maxHeight: '80vh',
            }}
            data-testid="dialog"
          >
            {(title || onDismiss) && (
              <>
                <div className="dialog-header">
                  <div className="bgColor--white padding--all border--bottom">
                    <div>
                      <div className="padding--right--xl type--head4">
                        {title ? <span id="a11y-dialog-title">{title}</span> : '\u00A0'}{' '}
                        {/* There always needs to be something (even a space) in the header for display reasons */}
                      </div>
                    </div>
                    {onDismiss && (
                      <AlertDialog.Trigger asChild>
                        <div className="dialog-icon">
                          <IconButton Icon={DenyIcon} aria-label="Close" label="Close" />
                        </div>
                      </AlertDialog.Trigger>
                    )}
                  </div>
                </div>
              </>
            )}
            {desc && (
              <div className="dialog-content" ref={contentEl}>
                <div className="padding--all bgColor--white">
                  {desc ? <div id="a11y-dialog-desc">{desc}</div> : null}
                </div>
              </div>
            )}
            {
              <div className="dialog-footer">
                <div
                  className={cc([
                    {
                      'border--top': isOverflowing,
                    },
                    'bgColor--white',
                    'padding--all',
                  ])}
                >
                  <Flex justify="end">
                    {secondaryButton && <FlexItem shrink>{secondaryButton}</FlexItem>}
                    {primaryButton && <FlexItem shrink>{primaryButton}</FlexItem>}
                  </Flex>
                </div>
              </div>
            }
          </div>
        </AlertDialog.Content>
      </div>
    </AlertDialog.Root>
  );
};

export default Prompt;
