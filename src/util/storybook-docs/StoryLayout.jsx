import React from 'react';
import PropTypes from 'prop-types';
import FDS from 'lib/dictionary/js/styleConstants';

export const StoryWrapper = ({ children, className = '', ...rest }) => (
  <div
    {...rest}
    className={`display--inlineFlex ${className}`}
    style={{
      flexWrap: 'wrap',
      marginBottom: `-${FDS.SPACE_S}`,
      marginRight: `-${FDS.SPACE_S}`,
      alignItems: 'center',
    }}
  >
    {children}
  </div>
);

StoryWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export const StoryItem = ({ children }) => (
  <div className="margin--right--s margin--bottom--s">{children}</div>
);

StoryItem.propTypes = {
  children: PropTypes.node,
};
