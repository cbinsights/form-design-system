import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

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
  const { memberList, max, className } = props;
  const renderConfig = getRenderConfig(memberList, max);

  return (
    <ul className={cx('avatarRow', className)}>
      {renderConfig.renderList.map((member, i) => (
        <li className="avatarRow-item" key={`${member.name.replace(/\s/g, '')}-${i}`}>
          <Avatar alt={member.name} src={member.src} className="avatarRow-avatar" />
        </li>
      ))}
      {renderConfig.count > 0 && (
        <li className="avatarRow-item">
          <Avatar className="avatarRow-avatar">
            <span className="typemod--book typemod--small">+{renderConfig.count}</span>
          </Avatar>
        </li>
      )}
    </ul>
  );
};

AvatarRow.defaultProps = {
  max: 3,
};

AvatarRow.propTypes = {
  /** List of members to render - `[ {name, src}, ... ]` */
  memberList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      src: PropTypes.string,
    })
  ).isRequired,

  /** Maximum number of avatars to render */
  max: PropTypes.number,

  /** Classes to pass to AvatarRow wrapper */
  className: PropTypes.string,
};

export default AvatarRow;
