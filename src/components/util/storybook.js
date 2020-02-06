import React from 'react';
import PropTypes from 'prop-types';
import FDS from '../../../lib/dictionary/js/styleConstants';

/**
 * Creates a knobs options object where labels match values.
 *
 * @param {Array} values list of possible prop values
 * @returns {Object} options object for storybook knobs
 */
export const arrayToOptions = (values) =>
  values.reduce(
    (o, val) => ({
      ...o,
      ...{ [val]: val.toString() },
    }),
    {}
  );

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
      className="margin--bottom padding--top--half padding--bottom--half padding--left padding--right rounded--all"
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

export const StoryWrapper = ({ children }) => (
  <div
    className="display--inlineFlex"
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
};

export const StoryItem = ({ children }) => (
  <div className="margin--right--half margin--bottom--half">{children}</div>
);

StoryItem.propTypes = {
  children: PropTypes.node,
};

export const storyBackgrounds = {
  diagonalLine:
    'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAJ0lEQVQYV2NkQAP/b///z4gsBhZQZWSEC8IEQIrAgsgCYEF0AZAgAAvKE968p7/mAAAAAElFTkSuQmCC)',
  check:
    'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAHElEQVQYV2M8fPiwLwMOwAiStLW13YxNftBJAgAx2BqeI9XcBAAAAABJRU5ErkJggg==)',
};
