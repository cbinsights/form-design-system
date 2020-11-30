import React from 'react';
import PropTypes from 'prop-types';
import { mostReadable } from 'tinycolor2';
import useClipboard from 'util/storybook-docs/useClipboard';
import cc from 'classcat';

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
  const [copiedText, copyToClipboard] = useClipboard('');

  const colorName = props.name;
  const hexName = `#${props.hex.toUpperCase()}`;
  const { cssVar, jsVar } = props;

  const layouts = [
    { value: hexName, position: 'bottomRight' },
    { value: jsVar, position: 'topRight' },
    { value: cssVar, position: 'topLeft' },
  ];

  return (
    <div
      className={cc([
        {
          'swatchContainer-dark': mostReadableConfig(hexName).toHexString() === '#000000',
          'swatchContainer-light':
            mostReadableConfig(hexName).toHexString() === '#ffffff',
        },
        'rounded--all',
        'swatchContainer',
        'padding--all--xs',
      ])}
      style={{
        backgroundColor: hexName,
        color: mostReadableConfig(hexName).toHexString(),
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: hexName === '#FFFFFF' ? '#F2F2F2' : 'transparent',
      }}
    >
      <div className="alignChild--center--center span--100 swatchContainer-swatch">
        <div className="align--center">
          {!copiedText ? (
            <React.Fragment>
              <b className="swatchContainer-name">{colorName}</b>
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
  name: PropTypes.string,
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
