import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import FDS from '../../../lib/dictionary/js/styleConstants';

/**
 * @param {Array} list original member list
 * @param {Number} max maximum avatars to render
 * @returns {Object} object containing overflow count and list to render
 */
export const getRenderConfig = (list, max) => {
  const renderList = list.slice(0, max);
  return {
    renderList,
    count: list.length - renderList.length,
  };
};

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const AvatarRow = (props) => {
  const { memberList, size, max, className, borderColor } = props;
  const renderConfig = getRenderConfig(memberList, max);

  const classNames = cx('avatarRow', `avatarRow--${size}`, className);

  const fontClass = cx({
    'typemod--tiny': size === 's',
    'typemod--small': size === 'm',
    'typemod--xxlarge': size === 'xl',
  });

  const StyledAvatar = withStyles({ root: { borderColor } })(Avatar);

  return (
    <ul className={classNames}>
      {/* avatars */}
      {renderConfig.renderList.map((member, i) => (
        <li className="avatarRow-item" key={`${member.name.replace(/\s/g, '')}-${i}`}>
          {member.src ? (
            <StyledAvatar
              alt={member.name}
              src={member.src}
              className="avatarRow-avatar"
            />
          ) : (
            <StyledAvatar alt={member.name} className={cx('avatarRow-avatar', fontClass)}>
              {member.name.charAt(0).toUpperCase()}
            </StyledAvatar>
          )}
        </li>
      ))}

      {/* overflow count bubble */}
      {renderConfig.count > 0 && (
        <li className="avatarRow-item">
          <StyledAvatar className="avatarRow-avatar avatarRow-avatar--count">
            <span className={cx('typemod--book', fontClass)}>+{renderConfig.count}</span>
          </StyledAvatar>
        </li>
      )}
    </ul>
  );
};

AvatarRow.defaultProps = {
  max: 3,
  size: 'm',
  borderColor: FDS.COLOR_HAZE,
};

AvatarRow.propTypes = {
  /** List of members to render - `[ {name, src}, ... ]` */
  memberList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      src: PropTypes.string,
    })
  ).isRequired,

  /** Size of avatars */
  size: PropTypes.oneOf(['s', 'm', 'l', 'xl']),

  /** Maximum number of avatars to render */
  max: PropTypes.number,

  /** Classes to pass to AvatarRow wrapper */
  className: PropTypes.string,

  /** Color of background under the avatars. Used to set the border colors */
  borderColor: PropTypes.string,
};

export default AvatarRow;
