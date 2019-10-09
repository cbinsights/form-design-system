import React from 'react';
import PropTypes from 'prop-types';
import Dialog from './Dialog';
import Flex from '../layout/Flex';
import FlexItem from '../layout/FlexItem';

const Prompt = (props) => (
  <Dialog
    content={<div id="a11y-dialog-desc">{props.desc}</div>}
    footerContent={
      <Flex justify="end" wrap>
        {props.secondaryButton && <FlexItem shrink>{props.secondaryButton}</FlexItem>}
        {props.primaryButton && <FlexItem shrink>{props.primaryButton}</FlexItem>}
      </Flex>
    }
    role="alertdialog"
    title={props.title}
    isOpen={props.isOpen}
  />
);

Prompt.defaultProps = {
  buttonPosition: 'content',
};

Prompt.propTypes = {
  /** Controls text in header */
  title: PropTypes.string,
  /** Controls string displayed in content area */
  desc: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  /** Represents primary button (MUST be an FDS Button) */
  primaryButton: PropTypes.any.isRequired,
  /** Represents secondary button (MUST be an FDS Button) */
  secondaryButton: PropTypes.any.isRequired,
  /** Controls whether modal (and backdrop) are visible or not */
  isOpen: PropTypes.bool,
};

export default Prompt;
