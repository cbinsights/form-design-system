import React from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';
import FDS from 'lib/dictionary/js/styleConstants';
import CheckIcon from 'lib/icons/react/CheckIcon';
import InformationIcon from 'lib/icons/react/InformationIcon';
import DenyIcon from 'lib/icons/react/DenyIcon';
import Flex from 'components/Flex';
import FlexItem from 'components/FlexItem';
import customPropTypes from 'components/util/customPropTypes';
import Button from 'components/Button';
import IconButton from 'components/IconButton';

import CountdownButton from './CountdownButton';

export const TYPES = ['info', 'warn', 'error', 'success', 'progress'];

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
}) => {
  const classNames = cc(['toast', `toast--${type}`]);

  const icon = {
    info: <InformationIcon size="l" color={FDS.COLOR_AQUA} />,
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
  }[type];

  const useContinuousProgressBar = type === 'progress' && !progress;
  const useAmountProgressBar = type === 'progress' && progress;

  const toastBar = (
    <div className="toast-bar">
      {useContinuousProgressBar && (
        <div className="toast-progressBar toast-progressBar--continuous" />
      )}
      {useAmountProgressBar && (
        <div
          className="toast-progressBar toast-progressBar--amount"
          style={{ width: `${progress}%` }}
        />
      )}
    </div>
  );

  const onActionDismiss = (event) => {
    if (dismissOnAction) dismissToast();
    if (onAction) onAction(event);
  };

  return (
    <div
      className={classNames}
      role={type === 'error' ? 'alert' : 'log'}
      aria-relevant="all"
      aria-atomic="true"
    >
      {toastBar}
      <div className="toast-content alignChild--left--center">
        <Flex>
          {icon && (
            <FlexItem shrink>
              <div className="toast-constrainGrowth alignChild--center--center">
                <div className="toast-icon media--s">{icon}</div>
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

Toast.propTypes = {
  /** JSX Content of Toast */
  content: PropTypes.node.isRequired,

  /** Type of toast */
  type: PropTypes.oneOf(TYPES),

  /** Label for action button */
  actionLabel: PropTypes.string,

  /** Callback for action button click */
  onAction: PropTypes.func,

  /** Time in ms to auto-dismiss toast */
  dismissDelay: PropTypes.number,

  /** Should this toast auto-dismiss itself? */
  isAutoDismiss: PropTypes.bool,

  /* Controls if toast gets dismiss when the ActionButton is clicked */
  dismissOnAction: PropTypes.bool,

  /** Is this toast user-dismissable? */
  canDismiss: PropTypes.bool,

  /** Number 1-100 declaring % progress */
  progress: customPropTypes.range(1, 100),

  /** Passed by Toaster: function to dismiss the toast */
  dismissToast: PropTypes.func,
};

export default Toast;
