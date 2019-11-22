import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import FocusTrap from 'focus-trap-react';
import noScroll from 'no-scroll';
import rafSchd from 'raf-schd';
import DenyIcon from '../../../lib/icons/react/DenyIcon';
import Flex from '../layout/Flex';
import FlexItem from '../layout/FlexItem';
import Section from '../layout/Section';

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
    handleResize(); // needs to fire once immediately on mount
    // eslint-disable-next-line no-undef
    window.addEventListener('resize', handleResize);
    noScroll.off();
    return () => {
      noScroll.off();
      // eslint-disable-next-line no-undef
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useLayoutEffect(() => {
    // This toggles scrolling on and off based on whether the modal
    // is shown or not
    if (props.isOpen) {
      noScroll.on();
    } else {
      noScroll.off();
    }
  }, [props.isOpen]);

  return ReactDOM.createPortal(
    <CSSTransition timeout={200} in={props.isOpen} classNames="dialog" unmountOnExit>
      <React.Fragment>
        <FocusTrap>
          <div>
            <div className="dialog-overlay" onClick={props.onDimiss}></div>
            <div className="dialog-wrapper">
              <div
                className="dialog elevation--3"
                role={props.role}
                aria-labelledby={props.title && 'a11y-dialog-title'}
                aria-describedby="a11y-dialog-desc"
                tabIndex="-1"
                aria-modal="true"
                onKeyDown={handleKeyDown}
              >
                {(props.title || props.onDismiss) && (
                  <React.Fragment>
                    <div className="dialog-header">
                      <Section border="bottom">
                        <Flex justify="spaceBetween" align="start">
                          <FlexItem>
                            {props.title && (
                              <div
                                className="dialog-title type--head4"
                                id="a11y-dialog-title"
                              >
                                {props.title}
                              </div>
                            )}
                          </FlexItem>
                          {props.onDismiss && (
                            <FlexItem shrink>
                              <button className="dialog-icon" onClick={props.onDismiss}>
                                <DenyIcon size="xs" />
                              </button>
                            </FlexItem>
                          )}
                        </Flex>
                      </Section>
                    </div>
                  </React.Fragment>
                )}
                <div className="dialog-content" ref={contentEl}>
                  <Section>{props.content}</Section>
                </div>
                {props.footerContent && (
                  <div className="dialog-footer">
                    <Section border={isOverflowing ? 'top' : undefined} bgColor="white">
                      {props.footerContent}
                    </Section>
                  </div>
                )}
              </div>
            </div>
          </div>
        </FocusTrap>
      </React.Fragment>
    </CSSTransition>,
    // eslint-disable-next-line no-undef
    document.body
  );
};

Dialog.defaultProps = {
  role: 'dialog',
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
   * user attempts to close modal. Also controls modal x
   */
  onDismiss: PropTypes.func,
};

export default Dialog;
