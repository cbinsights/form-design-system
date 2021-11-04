import React from 'react';
import cc from 'classcat';
import Icon from 'components/Icon';

export const VALID_TYPES = ['update', 'count'] as const;

export interface BadgeProps {
  /**
   * String to render inside the Badge bubble.
   * The `element` type should be reserved for FDS icons.
   */
  label?: string | Icon;

  /** When true, an indicator dot will be rendered when the `message` is empty */
  showDot?: boolean;

  /** Type of Badge */
  type?: typeof VALID_TYPES[number];
}

const Badge = ({ label, showDot = false, type = 'update' }: BadgeProps): JSX.Element => {
  const isUpdate = type === 'update';

  return (
    <div className="fds-badgeWrapper alignChild--center--center">
      {(label || showDot) && (
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
      )}
    </div>
  );
};

export default Badge;
