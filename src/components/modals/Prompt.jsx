import React from 'react';
import PropTypes from 'prop-types';
import Dialog from './Dialog';
import Button from '../interactive/Button';
import Flex from '../layout/Flex';
import FlexItem from '../layout/FlexItem';

const Prompt = (props) => (
  <Dialog
    content={
      <React.Fragment>
        <div id="a11y-dialog-desc">{props.desc}</div>
        <div className="margin--top--double">
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
        </div>
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
  desc: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  primaryButton: PropTypes.any.isRequired,
  secondaryButton: PropTypes.any.isRequired,
  isOpen: PropTypes.bool,
  onDismiss: PropTypes.func,
  buttonPosition: PropTypes.oneOf(['content', 'footer']),
};

export default Prompt;
