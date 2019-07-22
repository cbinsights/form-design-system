import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FDS from '../../../../../lib/fds-dictionary/dist/js/styleConstants';
import CheckIcon from 'fds-icons/lib/react/CheckIcon';
import InformationIcon from 'fds-icons/lib/react/InformationIcon';
import DenyIcon from 'fds-icons/lib/react/DenyIcon';
import Flex from '../layout/Flex';
import FlexItem from '../layout/FlexItem';
import CountdownButton from '../media/CountdownButton';
import customPropTypes from '../../util/customPropTypes';

const Toast = ({
  content,
  type,
  actionLabel,
  progress,
  onAction,
  isAutoDismiss,
  dismissDelay,
  canDismiss,
  dismissToast /* Passed from Toaster */,
}) => {
  const classNames = cx('toast', `toast--${type}`);

  const icon = {
    info: <InformationIcon size="l" color={FDS.COLOR_AQUA} />,
    success: <CheckIcon size="xs" color={FDS.COLOR_WHITE} />,
    warn: (
      <div role="image" className="typemod--white">
        !
      </div>
    ),
    error: (
      <div role="image" className="typemod--white">
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
    dismissToast();
    if (typeof onAction === 'function') {
      onAction(event);
    }
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
          {actionLabel && onAction && (
            <FlexItem shrink>
              <div className="toast-constrainGrowth alignChild--center--center">
                <Button
                  className="toast-action"
                  onClick={onActionDismiss}
                  data-test="toast-action"
                >
                  {actionLabel}
                </Button>
              </div>
            </FlexItem>
          )}
          {canDismiss && type !== 'progress' && (
            <FlexItem shrink>
              <div className="toast-constrainGrowth alignChild--center--center">
                {isAutoDismiss ? (
                  <CountdownButton onClick={dismissToast} duration={dismissDelay} />
                ) : (
                  <IconButton onClick={dismissToast}>
                    <DenyIcon size="xs" color={FDS.FONT_COLOR_DEFAULT} />
                  </IconButton>
                )}
              </div>
            </FlexItem>
          )}
        </Flex>
      </div>
    </div>
  );
};

Toast.defaultProps = {
  dismissDelay: 4000,
  canDismiss: true,
  isAutoDismiss: true,
  onDismiss: () => {},
};

Toast.propTypes = {
  /** JSX Content of Toast */
  content: PropTypes.element.isRequired,

  /** Type of toast */
  type: PropTypes.oneOf(['info', 'warn', 'error', 'success', 'progress']).isRequired,

  /** Label for action button */
  actionLabel: PropTypes.string,

  /** Callback for action button click */
  onAction: PropTypes.func,

  /** Callback invoked on dismissal of toast */
  onDismiss: PropTypes.func,

  /** Time in ms to auto-dismiss toast */
  dismissDelay: PropTypes.number,

  /** Should this toast auto-dismiss itself? */
  isAutoDismiss: PropTypes.bool,

  /** Is this toast user-dismissable? */
  canDismiss: PropTypes.bool,

  /** Number 1-100 declaring % progress */
  progress: customPropTypes.range(1, 100),

  /** Passed by Toaster: function to dismiss the toast */
  dismissToast: PropTypes.func,
};

export default Toast;
