import React from 'react';
import FDS from 'lib/dictionary/js/styleConstants';
import PropTypes from 'prop-types';

/**
 * For displaying important info in MDX docs
 */
export const Info = ({ type, children }) => {
  const accentMap = {
    warn: FDS.COLOR_ORANGE,
    info: FDS.COLOR_SKY,
  };
  const emojiMap = {
    warn: '⚠️',
    info: '💡',
  };

  const style = {
    border: `1px solid ${accentMap[type]}`,
    borderTop: `8px solid ${accentMap[type]}`,
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <blockquote
      style={style}
      className="margin--bottom padding--top--s padding--bottom--s padding--left padding--right rounded--all"
    >
      <span className="padding--right fontSize--2xl">{emojiMap[type]}</span>
      <span className="color--heading">{children}</span>
    </blockquote>
  );
};

Info.defaultProps = {
  type: 'info',
};

Info.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
  type: PropTypes.oneOf(['warn', 'info']),
};

export default Info;
