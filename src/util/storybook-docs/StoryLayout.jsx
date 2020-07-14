import React from 'react';
import PropTypes from 'prop-types';
import FDS from 'lib/dictionary/js/styleConstants';

export const StoryWrapper = ({ children, className, ...rest }) => (
  <div
    {...rest}
    className={`display--inlineFlex ${className}`}
    style={{
      flexWrap: 'wrap',
      marginBottom: `-${FDS.SPACE_HALF}`,
      marginRight: `-${FDS.SPACE_HALF}`,
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
  <div className="margin--right--half margin--bottom--half">{children}</div>
);

StoryItem.propTypes = {
  children: PropTypes.node,
};
