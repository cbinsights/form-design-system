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
          'fds-status',
          'padding--x--s fontSize--xs alignChild--center--center',
          {
            'shape--circle': !label,
            'color--white': isUpdate,
            'bgColor--red': isUpdate,
            'fds-status--dot': !label,
            'color--aqua': !isUpdate,
            'bgColor--aqua': !isUpdate && !label,
          },
        ])}
      >
        <span className="fds-status-label wrap--singleLine--truncate">{label}</span>
      </div>
    </div>
  );
};

Status.propTypes = {
  /**
   * String to render inside the Status bubble.
   * (`element` type should be reserved for icons)
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * Type of Status.
   * 'update': notification style red
   * 'count': blue bubble for showing counts (e.g. notes)
   */
  type: PropTypes.oneOf(VALID_TYPES),
};

export default Status;
