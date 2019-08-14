import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import MuiAvatarShim from './MuiAvatarShim';
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

  const borderStyle = {
    border: `2px solid ${borderColor}`,
  };

  return (
    <ul className={classNames}>
      {/* avatars */}
      {renderConfig.renderList.map((member, i) => (
        <li className="avatarRow-item" key={`${member.name.replace(/\s/g, '')}-${i}`}>
          <MuiAvatarShim
            name={member.name}
            src={member.src}
            size={size}
            className="avatarRow-avatar"
            style={borderStyle}
          />
        </li>
      ))}

      {/* overflow count bubble */}
      {renderConfig.count > 0 && (
        <li className="avatarRow-item">
          <div
            className={cx('avatarRow-count alignChild--center--center', `media--${size}`)}
            style={borderStyle}
          >
            <span className="fontWeight--bold">+{renderConfig.count}</span>
          </div>
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
