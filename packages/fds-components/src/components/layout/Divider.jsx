import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const Divider = ({ label, actionButton }) => (
  <div
    className={cx('divider', 'typeset--caption', {
      'divider--hasContent': Boolean(label) || Boolean(actionButton),
    })}
  >
    {label && <div className="divider-label">{label}</div>}
    {actionButton && <div className="divider-actionButton">{actionButton}</div>}
  </div>
);

Divider.propTypes = {
  /** Small label below the dividing line, renderd on left side of divider */
  label: PropTypes.string,
  /** JSX content to render an action button on right hand side of divider */
  actionButton: PropTypes.node,
};

export default Divider;
