import React, { useEffect, useRef, useState } from 'react';
import { useTransition, animated } from 'react-spring';
import PropTypes from 'prop-types';
import rafSchd from 'raf-schd';
import DenyIcon from 'lib/icons/react/DenyIcon';
import IconButton from 'components/interactive/IconButton';
import Section from 'components/layout/Section';
import { DialogOverlay, DialogContent } from '@reach/dialog';

export const isElementOverflowing = ({ current }) => {
  // Checking for current first is safer just in case,
  // and will also fail gracefully in tests
  if (current) {
    return current.scrollHeight > current.clientHeight;
  }
  return false;
};

const Dialog = ({
  role = 'dialog',
  width = '500px',
  height = '80vh',
  onDismiss,
  alwaysShowBorder,
  isOpen,
  title,
  content,
  footerContent,
}) => {
  const Core = () => {
    const [isOverflowing, setIsOverflowing] = useState(false);

    const contentEl = useRef(null);

    const handleResize = () => {
      rafSchd(setIsOverflowing(isElementOverflowing(contentEl)));
    };

    useEffect(() => {
      if (!alwaysShowBorder) {
        handleResize(); // needs to fire once immediately on mount
        // eslint-disable-next-line no-undef
        window.addEventListener('resize', handleResize);
        return () => {
          // eslint-disable-next-line no-undef
          window.removeEventListener('resize', handleResize);
        };
      }
      return undefined;
    }, [alwaysShowBorder]);

    return (
      <>
        {(title || onDismiss) && (
          <div className="bgColor--white border--bottom dialog-header padding--left padding--top padding--bottom">
            {title && (
              <span id="a11y-dialog-title" className="type--head4">
                {title}
              </span>
            )}
            {onDismiss && (
              <div className="dialog-icon">
                <IconButton
                  Icon={DenyIcon}
                  onClick={onDismiss}
                  aria-label="Close"
                  label="Close"
                />
              </div>
            )}
          </div>
        )}
        <div className="dialog-content" ref={contentEl}>
          <Section>{content}</Section>
        </div>
        {footerContent && (
          <Section
            border={alwaysShowBorder || isOverflowing ? 'top' : undefined}
            bgColor="white"
          >
            {footerContent}
          </Section>
        )}
      </>
    );
  };

  const transitions = useTransition(isOpen, null, {
    config: { mass: 1, tension: 250, friction: 21 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const AnimatedDialogOverlay = animated(DialogOverlay);
  const AnimatedDialogContent = animated(DialogContent);

  return (
    <React.Fragment>
      {transitions.map(
        ({ item, props: styles, key }) =>
          item && (
            <AnimatedDialogOverlay
              style={{ opacity: styles.opacity }}
              className="alignChild--center--center"
              onDismiss={onDismiss}
              key={key}
            >
              <AnimatedDialogContent
                role={role}
                className="dialog elevation--2"
                aria-label={title}
                style={{
                  maxWidth: `${width}${typeof width === 'number' ? 'px' : ''} `,
                  maxHeight: `${height}${typeof height === 'number' ? 'px' : ''}`,
                }}
              >
                <Core />
              </AnimatedDialogContent>
            </AnimatedDialogOverlay>
          )
      )}
    </React.Fragment>
  );
};

Dialog.propTypes = {
  /** Controls the role of the modal */
  role: PropTypes.oneOf(['dialog', 'alertdialog']),

  /** Controls whether the modal (and overlay) are shown or not */
  isOpen: PropTypes.bool,

  /** Add into bottom portion of modal */
  footerContent: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),

  /** Add into content (middle) portion of modal */
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,

  /** Controls text displayed in modal header */
  title: PropTypes.string,

  /**
   * Callback that user can pass in, to be conditionally fired when
   * user attempts to close modal. When defined, the modal close button appears
   */
  onDismiss: PropTypes.func,

  /** Custom modal width */
  width: PropTypes.string,

  /** Custom modal height */
  height: PropTypes.string,

  /**
   * Border between content area and footer currently renders only if there is scrollable content. Set this boolean
   * so that the border always renders no matter what.
   */
  alwaysShowBorder: PropTypes.bool,

  /**
   * Disables the focus trap on the Dialog.
   * Useful when the Dialog contains components that manage focus (e.g. `Menu`)
   */
  disableFocusTrap: PropTypes.bool,
};

export default Dialog;
