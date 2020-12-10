import React from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';

export const VALID_TYPES = ['update', 'count'];

const Badge = ({ label, type = 'update' }) => {
  const isUpdate = type === 'update';

  return (
    <div className="fds-badgeWrapper alignChild--center--center">
      <div
        aria-label={isUpdate ? 'Notification badge' : 'Count badge'}
        className={cc([
          'fds-badge',
          'padding--x--xs fontSize--xs alignChild--center--center',
          {
            'shape--circle fds-badge--dot color--white': !label,
            'color--white bgColor--red border--none': isUpdate,
            'color--aqua': !isUpdate,
            'bgColor--aqua': !isUpdate && !label,
          },
        ])}
      >
        <span className="fds-badge-label wrap--singleLine--truncate">{label}</span>
      </div>
    </div>
  );
};

Badge.propTypes = {
  /**
   * String to render inside the Badge bubble.
   * The `element` type should be reserved for FDS icons.
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /** Type of Badge */
  type: PropTypes.oneOf(VALID_TYPES),
};

export default Badge;
