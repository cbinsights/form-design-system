import React from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';

export const VALID_TYPES = ['notification', 'passive'];

const Count = ({ label, type = 'notification' }) => {
  const isNotification = type === 'notification';

  return (
    <div className="fds-countWrapper alignChild--center--center">
      <div
        className={cc([
          'fds-count',
          'padding--x--s fontSize--xs alignChild--center--center',
          {
            'shape--circle fds-count--dot color--white': !label,
            'color--white bgColor--red': isNotification,
            'color--aqua': !isNotification,
            'bgColor--aqua': !isNotification && !label,
          },
        ])}
      >
        <span className="fds-count-label wrap--singleLine--truncate">{label}</span>
      </div>
    </div>
  );
};

Count.propTypes = {
  /**
   * String to render inside the Count bubble.
   * The `element` type should be reserved for FDS icons.
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /** Type of Count */
  type: PropTypes.oneOf(VALID_TYPES),
};

export default Count;
