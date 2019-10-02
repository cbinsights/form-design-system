import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import FocusTrap from 'focus-trap-react';
import DenyIcon from '../../../../lib/icons/react/DenyIcon';
import Flex from '../../layout/Flex';
import FlexItem from '../../layout/FlexItem';

const Dialog = (props) => {
  /**
   * Things left to implement:
   *
   * - Adding descriptions to all propTypes
   * - Returning focus back to the element that invoked modal
   * - Scroll Locking
   * - Set up standards around what gets focused first inside modals
   */

  useEffect(() => {
    // Placeholder to return focus back to the button that invoked this modal
    // console.log(document.activeElement);
  });

  const handleClick = () => {
    if (props.canDismiss) {
      props.onDismiss();
    }
  };

  const handleKeyDown = (e) => {
    if (props.canDismiss && e.keyCode === 27) {
      props.onDismiss();
    }
  };

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
                  </div>
                  <div className="dialog-divider" />
                </React.Fragment>
              )}
              <div className="dialog-content">{props.content}</div>
              {props.footerContent && (
                <div className="dialog-footer">{props.footerContent}</div>
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
  role: PropTypes.oneOf(['dialog', 'alertdialog']),
  isOpen: PropTypes.bool,
  canDismiss: PropTypes.bool,
  footerContent: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  title: PropTypes.string,
};

export default Dialog;
