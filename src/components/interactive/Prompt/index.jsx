import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '../Dialog';
import Button from '../Button';
import Flex from '../../layout/Flex';
import FlexItem from '../../layout/FlexItem';

const Reusable = (props) => (
  <div className="">
    <Flex justify="end" wrap>
      {props.secondaryButton && (
        <FlexItem shrink>
          <Button {...props.secondaryButton} />
        </FlexItem>
      )}
      <FlexItem shrink>
        <Button {...props.primaryButton} />
      </FlexItem>
    </Flex>
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
    role="alertdialog"
    canDismiss={false}
    title={props.title}
    isOpen={props.isOpen}
    onDismiss={props.onDismiss}
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
