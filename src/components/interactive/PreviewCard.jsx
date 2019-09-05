import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const PreviewCard = ({
  hoverText,
  footerLeftInfo,
  footerRightInfo,
  coverContent,
  footerLabel,
  coverTheme,
  ...props
}) => (
  <a {...props} className="fdsCard display--inlineBlock">
    <div
      className={cx(
        'fdsCard-cover',
        coverTheme && !coverContent && `fdsCard-cover--${coverTheme}`
      )}
    >
      {hoverText && (
        <div className="fdsCard-cover-hover alignChild--center--center fontStyle--caps">
          {hoverText}
        </div>
      )}
      {coverContent}
    </div>
    <div
      className={cx('fdsCard-footer', {
        'fdsCard-footer--border': !coverTheme || coverContent,
      })}
    >
      <div className="fdsCard-label fontWeight--bold">{footerLabel}</div>
      <div className="fdsCard-info">
        <div className="fdsCard-info--right fontSize--xs color--slate">
          {footerLeftInfo}
        </div>
        <div className="fdsCard-info--left fontSize--xs color--slate">
          {footerRightInfo}
        </div>
      </div>
    </div>
  </a>
);

PreviewCard.defaultProps = {
  footerLabel: ' ',
  footerRightInfo: ' ',
  footerLeftInfo: ' ',
};

PreviewCard.propTypes = {
  footerLabel: PropTypes.string,
  footerRightInfo: PropTypes.string,
  footerLeftInfo: PropTypes.string,
  hoverText: PropTypes.string,
  coverContent: PropTypes.node,
  coverTheme: PropTypes.oneOf(['purple', 'darkPurple', 'aqua', 'pink']),
};

export default PreviewCard;
