import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'components/Dialog';
import Flex from 'components/Flex';
import FlexItem from 'components/FlexItem';

const Prompt = (props) => (
  <Dialog
    content={props.desc ? <div id="a11y-dialog-desc">{props.desc}</div> : null}
    footerContent={
      <Flex justify="end" wrap>
        {props.secondaryButton && <FlexItem shrink>{props.secondaryButton}</FlexItem>}
        {props.primaryButton && <FlexItem shrink>{props.primaryButton}</FlexItem>}
      </Flex>
    }
    role="alertdialog"
    title={props.title}
    isOpen={props.isOpen}
    onDismiss={props.onDismiss}
    disablePortal={props.disablePortal}
  />
);

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
  /**
   * Callback that user can pass in, to be conditionally fired when
   * user attempts to close modal. When defined, the modal close button appears
   */
  onDismiss: PropTypes.func,
  /** Keeps the Prompt from being rendered in a portal and renders it locally instead. */
  disablePortal: PropTypes.bool,
};

export default Prompt;
