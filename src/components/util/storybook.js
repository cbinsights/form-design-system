import React from 'react';
import PropTypes from 'prop-types';
import FDS from '../../../lib/dictionary/js/styleConstants';

/**
 * Storybook helpers
 */

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
 * @Object
 * useful background images for stories
 */
export const storyBackgrounds = {
  diagonalLine:
    'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAJ0lEQVQYV2NkQAP/b///z4gsBhZQZWSEC8IEQIrAgsgCYEF0AZAgAAvKE968p7/mAAAAAElFTkSuQmCC)',
  check:
    'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAHElEQVQYV2M8fPiwLwMOwAiStLW13YxNftBJAgAx2BqeI9XcBAAAAABJRU5ErkJggg==)',
};

export const StoryWrapper = ({ children }) => (
  <div
    className="display--inlineFlex"
    style={{
      flexWrap: 'wrap',
      marginBottom: `-${FDS.SPACE_HALF}px`,
      marginRight: `-${FDS.SPACE_HALF}px`,
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
