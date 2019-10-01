import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '../Dialog';
import Button from '../Button';

const Reusable = (props) => (
  <div className="align--right prompt-footer">
    <Button {...props.primaryButton} />
    {props.secondaryButton && (
      <div className="margin--right display--inlineBlock">
        <Button {...props.secondaryButton} />
      </div>
    )}
  </div>
);

Reusable.propTypes = {
  primaryButton: PropTypes.any.isRequired,
  secondaryButton: PropTypes.any,
};

const Prompt = (props) => (
  <Dialog
    footerContent={props.buttonPosition === 'footer' && <Reusable {...props} />}
    content={
      <React.Fragment>
        <div>{props.content}</div>
        {props.buttonPosition === 'content' && (
          <div className="margin--top--double">
            <Reusable {...props} />
          </div>
        )}
      </React.Fragment>
    }
    title={props.title}
    isOpen={props.isOpen}
    onDismiss={props.onDismiss}
    canDismiss
  />
);

Prompt.defaultProps = {
  buttonPosition: 'content',
};

Prompt.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  primaryButton: PropTypes.any.isRequired,
  secondaryButton: PropTypes.any,
  isOpen: PropTypes.bool,
  onDismiss: PropTypes.func,
  buttonPosition: PropTypes.oneOf(['content', 'footer']),
};

export default Prompt;
