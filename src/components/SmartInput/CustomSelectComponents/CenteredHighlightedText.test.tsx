import React from 'react';
import { screen, render } from '@testing-library/react';
import CenteredHighlightedText from './CenteredHighlightedText';

describe('CenteredHighlightedText component', () => {
  const defaultProps = {
    suggestion: 'this is a suggestion',
  };

  it('tests default rendering', () => {
    render(<CenteredHighlightedText {...defaultProps} />);
    expect(screen.getByText('this is a suggestion')).toBeInTheDocument();
  });

  it('should include left-text if the query it is included in the suggestion', () => {
    render(<CenteredHighlightedText {...defaultProps} query="suggestion" />);
    expect(screen.getByText('this is a', { exact: true })).toBeInTheDocument();
    expect(screen.getByText('suggestion', { exact: true })).toBeInTheDocument();
  });
});
