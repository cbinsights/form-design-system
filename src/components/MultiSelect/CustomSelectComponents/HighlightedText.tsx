import React from 'react';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

export interface HighlightTextProps {
  suggestion: string;
  query?: string;
  className?: string;
  children?: React.ReactNode;
}

const HighlightedText = ({
  suggestion,
  query = '',
  className,
  children,
}: HighlightTextProps): JSX.Element => {
  if (!suggestion) return <></>;
  const matches = match(suggestion, query, { findAllOccurrences: true });
  const parts = parse(suggestion, matches);
  return (
    <span className={className} data-test="smart-input-highlighted-text">
      {parts.map((part, index) => {
        return part.highlight ? (
          <span
            key={String(index)}
            style={{ fontWeight: 700 }}
            data-test="highlighted-text"
          >
            {part.text}
          </span>
        ) : (
          <strong
            key={String(index)}
            style={{ fontWeight: 300 }}
            data-test="not-highlighted-text"
          >
            {part.text}
          </strong>
        );
      })}
      {children}
    </span>
  );
};

export default HighlightedText;
