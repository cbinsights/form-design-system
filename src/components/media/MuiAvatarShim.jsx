import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const VALID_SIZES = ['s', 'm', 'l', 'xl'];

/**
 * @module MuiAvatarShim
 * DO NOT DOCUMENT (not for public use)
 *
 * This shim replaces material-ui Avatar to cover usage in FDS.
 * Renders a basic avatar.
 */
const MuiAvatarShim = ({ name, src, size, className, style }) => {
  const classNames = cx(
    'fdsAvatar',
    'alignChild--center--center',
    `media--${size}`,
    className
  );

  const inlineStyles = { ...style };
  if (src) {
    inlineStyles.backgroundImage = `url(${src})`;
  }

  return (
    <div role="img" title={name} className={classNames} style={inlineStyles}>
      {!src && (
        <span className="fdsAvatar-initial fontWeight--bold color--white">
          {name.charAt(0).toUpperCase()}
        </span>
      )}
    </div>
  );
};

MuiAvatarShim.defaultProps = {
  size: 'm',
};

MuiAvatarShim.propTypes = {
  /** Name of the person for alt text and no photo initial */
  name: PropTypes.string.isRequired,

  /** size of avatar */
  size: PropTypes.oneOf(VALID_SIZES),

  /**
   * Optional image source for avatar photo.
   * If no `src` is passed, the avatar will render the first initial of `name`
   */
  src: PropTypes.string,

  /** custom class name to add */
  className: PropTypes.string,

  /** inline styles */
  style: PropTypes.obj,
};

export default MuiAvatarShim;
