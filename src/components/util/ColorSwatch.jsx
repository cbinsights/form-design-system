import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { mostReadable } from 'tinycolor2';
import cx from 'classnames';

const CopyButton = ({ value, copyToClipboard }) => (
  <button onClick={() => copyToClipboard(value)} className="swatchContainer-copyButton">
    {value}
  </button>
);

CopyButton.propTypes = {
  value: PropTypes.string,
  position: PropTypes.string,
  copyToClipboard: PropTypes.func,
};

const mostReadableConfig = (hexName) =>
  mostReadable(hexName, '#333', { includeFallbackColors: true, level: 'AAA' });

export const ColorSwatch = (props) => {
  const [copiedText, setCopiedText] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const copyToClipboard = (value) => {
    // eslint-disable-next-line no-undef
    window.navigator.clipboard.writeText(value);
    setCopiedText(value);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const colorName = props.jsVar
    .split('_')
    .slice(1)
    .join(' ')
    .toLowerCase();
  const hexName = `#${props.hex.toUpperCase()}`;
  const { cssVar, jsVar } = props;

  const layouts = [
    { value: jsVar, position: 'topRight' },
    { value: cssVar, position: 'topLeft' },
    { value: hexName, position: 'bottomRight' },
  ];

  return (
    <div
      className={cx('rounded--all', 'swatchContainer', {
        'elevation--1': !isHovered,
        'elevation--3': isHovered,
      })}
      onMouseEnter={() => setIsHovered(!isHovered)}
      onMouseLeave={() => setIsHovered(!isHovered)}
    >
      <div
        className="alignChild--center--center span--100 swatchContainer-swatch"
        style={{ backgroundColor: hexName, color: mostReadableConfig(hexName) }}
      >
        <div className="align--center">
          {!copiedText ? (
            <React.Fragment>
              <b className="swatchContainer-name">{colorName}</b>
              <div className="swatchContainer-hex">{hexName}</div>
            </React.Fragment>
          ) : (
            <b>COPIED</b>
          )}
        </div>
      </div>
      <div className="content">
        {layouts.map((layout) => (
          <CopyButton
            key={layout.value}
            value={layout.value}
            copyToClipboard={copyToClipboard}
          />
        ))}
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
  <div className="swatchWrapper">{props.children}</div>
);

ColorSwatchWrapper.propTypes = {
  children: PropTypes.node,
};

export default ColorSwatch;
