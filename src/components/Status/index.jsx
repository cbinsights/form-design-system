import React from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';

export const VALID_TYPES = ['update', 'count'];

const Status = ({ label, type = 'update' }) => {
  const isUpdate = type === 'update';

  return (
    <div className="fds-statusWrapper alignChild--center--center">
      <div
        className={cc([
          'fds-status padding--x--s fontSize--xs',
          {
            'color--aqua': !isUpdate,
            inverted: isUpdate,
            'bgColor--red': isUpdate,
            'shape--circle': !label,
            'fds-status--dot': !label,
            'bgColor--aqua': !isUpdate && !label,
          },
        ])}
      >
        {label}
      </div>
    </div>
  );
};

Status.propTypes = {
  /** String to render inside the Status bubble */
  label: PropTypes.string,

  /**
   * Type of Status.
   * 'update': notification style red
   * 'count': blue bubble for showing counts (e.g. notes)
   */
  type: PropTypes.oneOf(VALID_TYPES),
};

export default Status;
