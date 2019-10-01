import React from 'react';
import PropTypes from 'prop-types';
import DenyIcon from '../../../../lib/icons/react/DenyIcon';

const Dialog = (props) => (
  <React.Fragment>
    {props.isOpen && (
      <React.Fragment>
        <div className="dialog-overlay"></div>
        <div className="dialog elevation--3" role="dialog">
          {(props.title || props.canDismiss) && (
            <React.Fragment>
              <div className="dialog-header">
                <div className="dialog-title fontSize--xl">{props.title}</div>
                {props.canDismiss && (
                  <div className="dialog-icon">
                    <DenyIcon size="xs" />
                  </div>
                )}
              </div>
              <div className="dialog-divider" />
            </React.Fragment>
          )}
          <div className="dialog-content">{props.content}</div>
          {props.footerContent && (
            <div className="dialog-footer">{props.footerContent}</div>
          )}
        </div>
      </React.Fragment>
    )}
  </React.Fragment>
);

Dialog.propTypes = {
  isOpen: PropTypes.boolean,
  canDismiss: PropTypes.boolean,
  footerContent: PropTypes.oneOf([PropTypes.node, PropTypes.string]),
  content: PropTypes.oneOf([PropTypes.node, PropTypes.string]),
  title: PropTypes.string,
};

export default Dialog;
