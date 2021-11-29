import React from 'react';
import Dialog from 'components/Dialog';
import Flex from 'components/Flex';
import FlexItem from 'components/FlexItem';
import { ButtonProps } from 'components/Button';

export interface PromptProps {
  /** Controls text in header */
  title?: string;
  /** Controls string displayed in content area */
  desc?: React.ReactNode | string;
  /** Represents primary button (MUST be an FDS Button) */
  primaryButton: React.ReactElement<ButtonProps>;
  /** Represents secondary button (MUST be an FDS Button) */
  secondaryButton: React.ReactElement<ButtonProps>;
  /** Controls whether modal (and backdrop) are visible or not */
  isOpen?: boolean;
  /**
   * Callback that user can pass in, to be conditionally fired when
   * user attempts to close modal. When defined, the modal close button appears
   */
  onDismiss?: () => void;
  /** Keeps the Prompt from being rendered in a portal and renders it locally instead. */
  disablePortal?: boolean;
}

const Prompt = (props: PromptProps): JSX.Element => (
  <Dialog
    content={props.desc ? <div id="a11y-dialog-desc">{props.desc}</div> : null}
    footerContent={
      <Flex justify="end">
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

export default Prompt;
