import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import FocusTrap from 'focus-trap-react';
import noScroll from 'no-scroll';
import DenyIcon from '../../../lib/icons/react/DenyIcon';
import Flex from '../layout/Flex';
import FlexItem from '../layout/FlexItem';
import Section from '../layout/Section';

const Dialog = (props) => {
  const handleClick = () => {
    if (props.canDismiss) {
      props.onDismiss();
    }
  };

  const handleKeyDown = (e) => {
    if (props.canDismiss && e.key === 'Escape') {
      props.onDismiss();
    }
  };

  useLayoutEffect(() => {
    // This toggles scrolling on and off based on whether the modal
    // is shown or not
    if (props.isOpen) noScroll.on();
    noScroll.off();
  }, [props.isOpen]);

  return ReactDOM.createPortal(
    <CSSTransition timeout={200} in={props.isOpen} classNames="dialog" unmountOnExit>
      <React.Fragment>
        <FocusTrap>
          <div>
            <div className="dialog-overlay" onClick={handleClick}></div>
            <div
              className="dialog elevation--3"
              role={props.role}
              aria-labelledby={props.title && 'a11y-dialog-title'}
              aria-describedby="a11y-dialog-desc"
              tabIndex="-1"
              aria-modal="true"
              onKeyDown={handleKeyDown}
            >
              {(props.title || props.canDismiss) && (
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
                        {props.canDismiss && (
                          <FlexItem shrink>
                            <button className="dialog-icon" onClick={handleClick}>
                              <DenyIcon size="xs" />
                            </button>
                          </FlexItem>
                        )}
                      </Flex>
                    </Section>
                  </div>
                </React.Fragment>
              )}
              <div className="dialog-content">
                <Section>{props.content}</Section>
              </div>
              {props.footerContent && (
                <div className="dialog-footer">
                  <Section border="top" bgColor="lightGray">
                    {props.footerContent}
                  </Section>
                </div>
              )}
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
  /** Controls whether the modal can be cleared passively (esc key, clicking
   * backdrop, showing x on modal, clicking on modal x to close) */
  canDismiss: PropTypes.bool,
  /** Add into bottom portion of modal */

  footerContent: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  /** Add into content (middle) portion of modal */

  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  /** Controls text displayed in modal header */

  title: PropTypes.string,
  /** Callback that user can pass in, to be conditionally fired (based on canDismiss) when user attempts to close modal */

  onDismiss: PropTypes.func,
};

export default Dialog;
