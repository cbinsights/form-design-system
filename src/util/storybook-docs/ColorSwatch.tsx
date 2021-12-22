import React from 'react';
import { mostReadable } from 'tinycolor2';
import useClipboard from 'util/storybook-docs/useClipboard';
import cc from 'classcat';
import { noop } from 'util/index';

export interface ColorSwatchProps {
  name?: string;
  hex?: string;
  cssVar?: string;
  jsVar?: string;
}

export interface ColorSwatchWrapperProps {
  children?: React.ReactNode;
}

export interface CopyButtonProps {
  value?: string;
  position?: string;
  copyToClipboard?: (arg: string) => void;
}

const CopyButton = ({ value, copyToClipboard }: CopyButtonProps): JSX.Element => (
  <button
    onClick={() => (copyToClipboard ? copyToClipboard((value = '')) : noop)}
    className="swatchContainer-copyButton"
  >
    {value}
  </button>
);

const mostReadableConfig = (hexName: string) =>
  mostReadable(hexName, ['#333'], { includeFallbackColors: true, level: 'AAA' });

export const ColorSwatch = (props: ColorSwatchProps): JSX.Element => {
  const [copiedText, copyToClipboard] = useClipboard();

  const colorName = props.name;
  const hexName = props.hex ? `#${props.hex.toUpperCase()}` : '';
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

export const ColorSwatchWrapper = (props: ColorSwatchWrapperProps): JSX.Element => (
  <div className="swatchWrapper">{props.children}</div>
);

export default ColorSwatch;
