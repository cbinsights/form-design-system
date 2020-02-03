import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { readableColor } from 'polished';

export const ColorSwatch = (props) => {
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = (value) => {
    window.navigator.clipboard.writeText(value);
    setCopiedText(value);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const textClassName = `color--${props.jsVar.split('_')[1].toLowerCase()}`;
  const bgClassName = `bgColor--${props.jsVar.split('_')[1].toLowerCase()}`;
  const colorName = props.jsVar.split('_')[1];
  const hexName = props.hex;

  return (
    <div className="elevation--1 display--inlineBlock swatch">
      <div
        style={{
          backgroundColor: `#${hexName}`,
          height: 100,
          width: '100%',
          borderRadius: 3,
          position: 'relative',
        }}
        className="alignChild--center--center"
      >
        <button
          onClick={() => copyToClipboard(props.cssVar)}
          style={{
            top: '4px',
            left: '4px',
          }}
        >
          {props.cssVar}
        </button>
        <button
          onClick={() => copyToClipboard(bgClassName)}
          style={{
            bottom: '4px',
            left: '4px',
          }}
        >
          {bgClassName}
        </button>
        <button
          onClick={() => copyToClipboard(textClassName)}
          style={{
            bottom: '4px',
            right: '4px',
          }}
        >
          {textClassName}
        </button>
        <button
          onClick={() => copyToClipboard(props.jsVar)}
          style={{
            top: '4px',
            right: '4px',
          }}
        >
          {props.jsVar}
        </button>
        {/* <div
          style={{
            backgroundColor: "#333",
            color: "white",
            position: "absolute",
            top: 0,
            right: 0,
            fontSize: 10,
            padding: "2px 6px",
            borderBottomLeftRadius: 4
          }}
        >
          #{props.hex.toUpperCase()}
        </div> */}
        <div
          style={{ color: readableColor(`#${props.hex}`, '#333'), textAlign: 'center' }}
        >
          {!copiedText ? (
            <React.Fragment>
              <b>{colorName}</b>
              <div
                style={{
                  color: readableColor(`#${props.hex}`, '#333'),
                  fontSize: 10,
                  opacity: 0.4,
                }}
              >
                #{props.hex.toUpperCase()}
              </div>
            </React.Fragment>
          ) : (
            <b>COPIED</b>
          )}
        </div>
        {/* <div style={{ color: readableColor(`#${props.hex}`, '#333')}}><b>#{props.hex.toUpperCase()}</b></div> */}
      </div>
    </div>
  );
};

ColorSwatch.propTypes = {
  hex: PropTypes.string,
  cssVar: PropTypes.string,
  jsVar: PropTypes.string,
};

export default ColorSwatch;
