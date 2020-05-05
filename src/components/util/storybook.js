import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CloneIcon from 'lib/icons/react/CloneIcon';
import CheckIcon from 'lib/icons/react/CheckIcon';
import FDS from 'lib/dictionary/js/styleConstants';

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

export const useClipboard = () => {
  const [copiedText, setCopiedText] = useState('');
  const copyToClipboard = (value) => {
    // eslint-disable-next-line no-undef
    window.navigator.clipboard.writeText(value);
    setCopiedText(value);
    setTimeout(() => setCopiedText(''), 2000);
  };
  return [copiedText, copyToClipboard];
};

export const useToggleHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const toggleHover = () => setIsHovered(!isHovered);
  return [isHovered, toggleHover];
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

Info.defaultProps = {
  type: 'info',
};

Info.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
  type: PropTypes.oneOf(['warn', 'info']),
};

export default Info;

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

export const storyBackgrounds = {
  diagonalLine:
    'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAJ0lEQVQYV2NkQAP/b///z4gsBhZQZWSEC8IEQIrAgsgCYEF0AZAgAAvKE968p7/mAAAAAElFTkSuQmCC)',
  check:
    'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAHElEQVQYV2M8fPiwLwMOwAiStLW13YxNftBJAgAx2BqeI9XcBAAAAABJRU5ErkJggg==)',
};

export const ImportPath = ({ component, section }) => {
  const toggleHover = useToggleHover()[1];
  const [copiedText, copyToClipboard] = useClipboard();

  const path = `import ${component.displayName} from '@cbinsights/fds/lib/components/${section}/${component.displayName}'`;

  const pathParts = path.split(' ');

  return (
    <p
      className="importPath margin--bottom"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={() => copyToClipboard(path)}
    >
      <span>{pathParts[0]} </span>
      <span className="importPath--highlight">{pathParts[1]} </span>
      <span>{pathParts[2]} </span>
      <span className="importPath--highlight">{pathParts[3]}</span>
      {!copiedText ? (
        <CloneIcon customSize={14} />
      ) : (
        <CheckIcon customSize={14} color="green" />
      )}
    </p>
  );
};

ImportPath.propTypes = {
  component: PropTypes.func,
  section: PropTypes.oneOf([
    'forms',
    'interactive',
    'layout',
    'media',
    'modals',
    'popovers',
  ]),
};

export const State = ({ render, initialValue }) => {
  const [value, setValue] = useState(initialValue);
  return render(value, setValue);
};
