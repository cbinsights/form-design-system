import React from 'react';
import cc from 'classcat';
import FDS from 'dictionary/js/styleConstants';
import CheckIcon from 'icons/react/CheckIcon';
import InformationIcon from 'icons/react/InformationIcon';
import DenyIcon from 'icons/react/DenyIcon';
import Flex from 'components/Flex';
import FlexItem from 'components/FlexItem';
import Button from 'components/Button';
import IconButton from 'components/IconButton';

import CountdownButton from './CountdownButton';

type ToastType = 'info' | 'warn' | 'error' | 'success' | 'progress';

export interface ToastProps {
  /** JSX Content of Toast */
  content: React.ReactNode;

  /** Type of toast */
  type?: ToastType;

  /** Label for action button */
  actionLabel?: string;

  /** Callback for action button click */
  onAction?: React.MouseEventHandler<HTMLButtonElement>;

  /** Time in ms to auto-dismiss toast */
  dismissDelay?: number;

  /** Should this toast auto-dismiss itself? */
  isAutoDismiss?: boolean;

  /* Controls if toast gets dismiss when the ActionButton is clicked */
  dismissOnAction?: boolean;

  /** Is this toast user-dismissable? */
  canDismiss?: boolean;

  /** Number 1-100 declaring % progress */
  progress?: number;

  /** Passed by Toaster: function to dismiss the toast */
  dismissToast?(...args: unknown[]): unknown;
}

const Toast = ({
  isAutoDismiss = true,
  dismissDelay = 4000,
  canDismiss = true,
  dismissOnAction = true,
  type = 'info',
  content,
  actionLabel,
  progress,
  onAction,
  dismissToast /* Passed from Toaster */,
}: ToastProps): JSX.Element => {
  const classNames = cc(['toast', `toast--${type}`]);

  const icon = {
    info: <InformationIcon size="l" color={FDS.COLOR_WHITE} />,
    success: <CheckIcon size="xs" color={FDS.COLOR_WHITE} />,
    warn: (
      <div role="image" className="fontWeight--bold color--white">
        !
      </div>
    ),
    error: (
      <div role="image" className="fontWeight--bold color--white">
        !
      </div>
    ),
    progress: undefined,
  }[type];

  const accentColor = {
    info: FDS.COLOR_BLUE,
    warn: FDS.COLOR_ORANGE,
    error: FDS.COLOR_RED,
    success: FDS.COLOR_GREEN,
    progress: FDS.COLOR_AQUA,
  }[type];

  const iconStyle = { backgroundColor: accentColor };

  const onActionDismiss: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (dismissOnAction && dismissToast) dismissToast();
    if (onAction) onAction(event);
  };

  return (
    <div
      className={classNames}
      role={type === 'error' ? 'alert' : 'log'}
      aria-relevant="all"
      aria-atomic="true"
    >
      <div className="toast-bar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={cc([
            'toast-svg',
            { 'toast-svg--animate': type === 'progress' && !progress },
          ])}
        >
          <line
            x1="0%"
            y1="50%"
            x2={type === 'progress' && progress ? `${progress}%` : '100%'}
            y2="50%"
            stroke={accentColor}
            strokeWidth={FDS.SPACE_S}
            strokeDasharray={type === 'progress' && !progress ? '200 400' : ''}
          />
        </svg>
      </div>
      <div className="toast-content alignChild--left--center">
        <Flex>
          {icon && (
            <FlexItem shrink>
              <div className="toast-constrainGrowth alignChild--center--center">
                <div className="toast-icon media--s" style={iconStyle}>
                  {icon}
                </div>
              </div>
            </FlexItem>
          )}
          <FlexItem>
            <div className="toast-constrainGrowth">{content}</div>
          </FlexItem>
          {actionLabel && (onAction || (dismissToast && dismissOnAction)) && (
            <FlexItem shrink>
              <div className="toast-constrainGrowth alignChild--center--center">
                <Button
                  onClick={onActionDismiss}
                  data-test="toast-action"
                  theme="ghost"
                  label={actionLabel}
                />
              </div>
            </FlexItem>
          )}
          {canDismiss && type !== 'progress' && (
            <FlexItem shrink>
              <div className="toast-constrainGrowth alignChild--center--center">
                {isAutoDismiss ? (
                  <CountdownButton
                    onClick={dismissToast}
                    duration={dismissDelay}
                    label="Close"
                  />
                ) : (
                  <IconButton
                    Icon={DenyIcon}
                    onClick={dismissToast}
                    radius="circle"
                    label="Close"
                  />
                )}
              </div>
            </FlexItem>
          )}
        </Flex>
      </div>
    </div>
  );
};

export default Toast;
