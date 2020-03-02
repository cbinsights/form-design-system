import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import FocusTrap from 'focus-trap-react';
import noScroll from 'no-scroll';
import rafSchd from 'raf-schd';
import DenyIcon from 'lib/icons/react/DenyIcon';
import IconButton from 'components/interactive/IconButton';
import Section from 'components/layout/Section';

export const isElementOverflowing = ({ current }) => {
  // Checking for current first is safer just in case,
  // and will also fail gracefully in tests
  if (current) {
    return current.scrollHeight > current.clientHeight;
  }
  return false;
};

const Dialog = (props) => {
  const contentEl = useRef(null);

  const handleKeyDown = (e) => {
    if (props.onDismiss && e.key === 'Escape') {
      props.onDismiss();
    }
  };

  const [isOverflowing, setIsOverflowing] = useState(false);

  const handleResize = () => {
    rafSchd(setIsOverflowing(isElementOverflowing(contentEl)));
  };

  useEffect(() => {
    if (!props.alwaysShowBorder) {
      handleResize(); // needs to fire once immediately on mount
      // eslint-disable-next-line no-undef
      window.addEventListener('resize', handleResize);
      return () => {
        noScroll.off();
        // eslint-disable-next-line no-undef
        window.removeEventListener('resize', handleResize);
      };
    }
    return undefined;
  }, [props.alwaysShowBorder]);

  useLayoutEffect(() => {
    // This toggles scrolling on and off based on whether the modal
    // is shown or not
    if (props.isOpen) {
      noScroll.on();
    } else {
      noScroll.off();
    }
  }, [props.isOpen]);

  const dialogNode = (
    <div>
      <div className="dialog-overlay"></div>
      <div className="dialog-zIndex dialog-wrapper">
        <div
          className="dialog elevation--3"
          role={props.role}
          aria-labelledby={props.title && 'a11y-dialog-title'}
          aria-describedby="a11y-dialog-desc"
          tabIndex="-1"
          aria-modal="true"
          onKeyDown={handleKeyDown}
          style={{
            maxWidth: `${props.width}${typeof props.width === 'number' ? 'px' : ''} `,
            maxHeight: `${props.height}${typeof props.height === 'number' ? 'px' : ''}`,
          }}
        >
          {(props.title || props.onDismiss) && (
            <React.Fragment>
              <div className="dialog-header">
                <Section border="bottom">
                  <div className="padding--right--double type--head4">
                    {props.title ? (
                      <span id="a11y-dialog-title">{props.title}</span>
                    ) : (
                      '\u00A0'
                    )}{' '}
                    {/* There always needs to be something (even a space) in the header for display reasons */}
                  </div>
                  {props.onDismiss && (
                    <div className="dialog-icon">
                      <IconButton
                        Icon={DenyIcon}
                        onClick={props.onDismiss}
                        aria-label="close"
                      />
                    </div>
                  )}
                </Section>
              </div>
            </React.Fragment>
          )}
          <div className="dialog-content" ref={contentEl}>
            <Section>{props.content}</Section>
          </div>
          {props.footerContent && (
            <div className="dialog-footer">
              <Section
                border={props.alwaysShowBorder || isOverflowing ? 'top' : undefined}
                bgColor="white"
              >
                {props.footerContent}
              </Section>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <CSSTransition timeout={200} in={props.isOpen} classNames="dialog" unmountOnExit>
          <React.Fragment>
            {props.disableFocusTrap ? dialogNode : <FocusTrap>{dialogNode}</FocusTrap>}
          </React.Fragment>
        </CSSTransition>,
        // eslint-disable-next-line no-undef
        document.body
      )}
    </React.Fragment>
  );
};

Dialog.defaultProps = {
  role: 'dialog',
  width: '500px',
  height: '80vh',
  disableFocusTrap: false,
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
