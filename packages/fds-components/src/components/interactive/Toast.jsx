import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '@material-ui/core/Button';
import FDS from 'fds-dictionary/dist/js/styleConstants';
import CheckIcon from 'fds-icons/lib/react/CheckIcon';
import InformationIcon from 'fds-icons/lib/react/InformationIcon';
import CircleCloseIcon from 'fds-icons/lib/react/CircleCloseIcon';
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
  // dismissToast /* Passed from Toaster */,
}) => {
  const classNames = cx('toast', `toast--${type}`);

  let icon;
  switch (type) {
    case 'info':
      icon = <InformationIcon size="l" color={FDS.COLOR_SKY} />;
      break;
    case 'success':
      icon = <CheckIcon size="s" color={FDS.COLOR_WHITE} />;
      break;
    case 'warn':
      icon = <strong className="typemod--white typemod--large">!</strong>;
      break;
    case 'error':
      icon = <strong className="typemod--white typemod--large">!</strong>;
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
          className="progressBar progressBar--amount"
          style={{ width: `${progress}%` }}
        />
      )}
      {useAmountProgressBar && <div className="progressBar progressBar--continuous" />}
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
              <div className="toast-icon">{icon}</div>
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
              <CircleCloseIcon size="m" color={FDS.FONT_COLOR_DEFAULT} />
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
