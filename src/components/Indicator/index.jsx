import React from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';

export const VALID_TYPES = ['update', 'count'];

const Indicator = ({ label, type = 'update' }) => {
  const isUpdate = type === 'update';

  return (
    <div className="fds-indicatorWrapper alignChild--center--center">
      <div
        aria-label={isUpdate ? 'Notification indicator' : 'Count indicator'}
        className={cc([
          'fds-indicator',
          'padding--x--s fontSize--xs alignChild--center--center',
          {
            'shape--circle fds-indicator--dot color--white': !label,
            'color--white bgColor--red': isUpdate,
            'color--aqua': !isUpdate,
            'bgColor--aqua': !isUpdate && !label,
          },
        ])}
      >
        <span className="fds-indicator-label wrap--singleLine--truncate">{label}</span>
      </div>
    </div>
  );
};

Indicator.propTypes = {
  /**
   * String to render inside the Indicator bubble.
   * The `element` type should be reserved for FDS icons.
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /** Type of Indicator */
  type: PropTypes.oneOf(VALID_TYPES),
};

export default Indicator;
