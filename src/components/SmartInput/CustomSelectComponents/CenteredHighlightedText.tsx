import React from 'react';
import cx from 'classcat';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { HighlightTextProps } from './HighlightedText';

const CenteredHighlightedText = ({
  suggestion,
  query = '',
  children,
}: HighlightTextProps): JSX.Element => {
  if (!suggestion) return <></>;
  const matches = match(suggestion, query, { findAllOccurrences: true });
  const parts = parse(suggestion, matches);
  const firstHighlightIndex = parts.findIndex((part) => part.highlight);
  const leftText = firstHighlightIndex > 0 && parts[0]?.text;
  const centeredText = firstHighlightIndex >= 0 && parts[firstHighlightIndex]?.text;
  const rightText =
    firstHighlightIndex + 1 <= parts.length && parts[firstHighlightIndex + 1]?.text;
  return (
    <span
      className="valign--center display--flex display--block"
      data-testid="smart-input-centered-highlighted-text"
    >
      {leftText && (
        <span
          className={cx([
            'wrap--singleLine--truncate flexItem--shrink',
            'searchItemLeftText',
            {
              'padding--right--xs': leftText[leftText.length - 1] === ' ',
            },
          ])}
        >
          <span dir="ltr">{leftText}</span>
        </span>
      )}
      {centeredText && (
        <span className="fontWeight--bold flexItem--shrink">{centeredText}</span>
      )}
      <span
        className={cx([
          'wrap--singleLine--truncate flexItem',
          {
            'padding--left--xs': rightText && rightText[0] === ' ',
          },
        ])}
      >
        {parts.map((part, index) => {
          if (index <= firstHighlightIndex) return null;
          return part.highlight ? (
            <span key={String(index)} className="fontWeight--bold">
              {part.text}
            </span>
          ) : (
            part.text
          );
        })}
        {children}
      </span>
    </span>
  );
};

export default CenteredHighlightedText;
