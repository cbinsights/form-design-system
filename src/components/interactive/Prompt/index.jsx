import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '../Dialog';
import Button from '../Button';

const Prompt = (props) => (
  <Dialog
    footerContent={
      <div className="align--right prompt-footer">
        <Button {...props.primaryButton} />
        {props.secondaryButton && (
          <div className="margin--right display--inlineBlock">
            <Button {...props.secondaryButton} />
          </div>
        )}
      </div>
    }
    content={
      <React.Fragment>
        <div>{props.content}</div>
        <div className="align--right margin--top prompt-footer">
          <Button {...props.primaryButton} />
          {props.secondaryButton && (
            <div className="margin--right display--inlineBlock">
              <Button {...props.secondaryButton} />
            </div>
          )}
        </div>
      </React.Fragment>
    }
    title={props.title}
    isOpen={props.isOpen}
    onDismiss={props.onDismiss}
    canDismiss
  />
);

Prompt.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOf([PropTypes.node, PropTypes.string]),
  primaryButton: PropTypes.any.isRequired,
  secondaryButton: PropTypes.any,
  isOpen: PropTypes.bool,
  onDismiss: PropTypes.func,
};

export default Prompt;
