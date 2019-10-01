import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '../Dialog';
import Button from '../Button';
import { text } from '@storybook/addon-knobs';

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
    content={props.content}
    title={props.title}
    isOpen={props.isOpen}
  />
);

Prompt.propTypes = {
  title: PropTypes.string,
  primaryButton: PropTypes.any.isRequired,
  secondaryButton: PropTypes.any,
};

export default Prompt;
