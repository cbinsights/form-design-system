import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { readableColor } from 'polished';
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

export const ColorSwatch = (props) => {
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = (value) => {
    window.navigator.clipboard.writeText(value);
    setCopiedText(value);
    setTimeout(() => setCopiedText(''), 2000);
  };

  return (
    <div
      className="elevation--1 display--inlineBlock"
      style={{ margin: 6, borderRadius: 3, minWidth: 150, maxWidth: 300, flexGrow: 1 }}
    >
      <div
        style={{
          backgroundColor: `#${props.hex}`,
          height: 100,
          width: '100%',
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
          position: 'relative',
        }}
        className="alignChild--center--center"
      >
        {copiedText && <b>Copied</b>}
        <div
          style={{
            backgroundColor: '#333',
            color: 'white',
            position: 'absolute',
            top: 0,
            right: 0,
            fontSize: 12,
            padding: '2px 6px',
            borderBottomLeftRadius: 4,
          }}
        >
          #{props.hex.toUpperCase()}
        </div>
        {/* <div style={{ backgroundColor: '#333', color: 'white', position: "absolute", top: 0, right: 0, fontSize: 12, padding: "2px 6px", borderBottomLeftRadius: 4, }}>
          #{props.hex.toUpperCase()}
        </div> */}
        <div style={{ color: readableColor(`#${props.hex}`, '#333') }}>
          <b>{props.jsVar.split('_')[1]}</b>
        </div>
        {/* <div style={{ color: readableColor(`#${props.hex}`, '#333')}}><b>#{props.hex.toUpperCase()}</b></div> */}
      </div>
      <div style={{ margin: '8px 8px', fontSize: 12 }}>
        {!copiedText ? (
          <React.Fragment>
            <div onClick={() => copyToClipboard(props.cssVar)}>
              <b>{props.cssVar}</b>
            </div>
            <div onClick={() => copyToClipboard(props.jsVar)}>{props.jsVar}</div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <p>Copied!</p>
            <b>({copiedText})</b>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

ColorSwatch.propTypes = {
  hex: PropTypes.string,
  cssVar: PropTypes.string,
  jsVar: PropTypes.string,
};

export const ColorSwatchWrapper = (props) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', margin: -6 }}>{props.children}</div>
);

ColorSwatchWrapper.propTypes = {
  children: PropTypes.node,
};

Info.defaultProps = {
  type: 'info',
};

Info.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
  type: PropTypes.oneOf(['warn', 'info']),
};
