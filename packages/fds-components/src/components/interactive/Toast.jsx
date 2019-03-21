import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FDS from 'fds-dictionary/dist/js/styleConstants';
import CheckIcon from 'fds-icons/lib/react/CheckIcon';
import InformationIcon from 'fds-icons/lib/react/InformationIcon';
import DenyIcon from 'fds-icons/lib/react/DenyIcon';
import Flex from '../layout/Flex';
import FlexItem from '../layout/FlexItem';
import customPropTypes from '../../util/customPropTypes';

const Toast = ({
  content,
  type,
  actionLabel,
  progress,
  onAction,
  // onDismiss,
  // isAutoDismiss,
  canDismiss,
  dismissToast /* Passed from Toaster */,
}) => {
  const classNames = cx('toast', `toast--${type}`);

  let icon;
  switch (type) {
    case 'info':
      icon = <InformationIcon size="l" color={FDS.COLOR_AQUA} />;
      break;
    case 'success':
      icon = <CheckIcon size="xs" color={FDS.COLOR_WHITE} />;
      break;
    case 'warn':
      icon = (
        <div role="image" className="typemod--white">
          !
        </div>
      );
      break;
    case 'error':
      icon = (
        <div role="image" className="typemod--white">
          !
        </div>
      );
      break;
    default:
      icon = null;
  }

  const useContinuousProgressBar = type === 'progress' && progress;
  const useAmountProgressBar = type === 'progress' && !progress;

  const toastBar = (
    <div className="toast-bar">
      {useContinuousProgressBar && (
        <div
          className="toast-progressBar toast-progressBar--amount"
          style={{ width: `${progress}%` }}
        />
      )}
      {useAmountProgressBar && (
        <div className="toast-progressBar toast-progressBar--continuous" />
      )}
    </div>
  );

  return (
    <div
      className={classNames}
      role={type === 'error' ? 'alert' : 'log'}
      aria-relevant="all"
      aria-atomic="true"
    >
      {toastBar}
      <div className="toast-content">
        <Flex align="center">
          {icon && (
            <FlexItem shrink>
              <div className="toast-icon media--s">{icon}</div>
            </FlexItem>
          )}
          <FlexItem>{content}</FlexItem>
          {actionLabel && onAction && (
            <FlexItem shrink>
              <Button className="toast-action" onClick={onAction}>
                {actionLabel}
              </Button>
            </FlexItem>
          )}
          {canDismiss && (
            <FlexItem shrink>
              {/* TODO: pull this out into a separate component with timer */}
              <IconButton onClick={dismissToast}>
                <DenyIcon size="xs" color={FDS.FONT_COLOR_DEFAULT} />
              </IconButton>
            </FlexItem>
          )}
        </Flex>
      </div>
    </div>
  );
};

Toast.defaultProps = {
  canDismiss: true,
  isAutoDismiss: true,
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

  /** Should this toast auto-dismiss itself? */
  isAutoDismiss: PropTypes.bool,

  /** Delay auto-dismissal of toast by this delay (in MS) */
  dismissDelay: PropTypes.Number,

  /** Is this toast user-dismissable? */
  canDismiss: PropTypes.bool,

  /** Number 1-100 declaring % progress */
  progress: customPropTypes.range(1, 100),

  /** Passed by Toaster: Number 1-100 declaring % progress of dismissal countdown */
  dismissProgress: customPropTypes.range(1, 100),

  /** Passed by Toaster: function to dismiss the toast */
  dismissToast: PropTypes.func,
};

export default Toast;
