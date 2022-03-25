import React from 'react';
import { screen, render } from '@testing-library/react';
import CenteredHighlightedText from './CenteredHighlightedText';

describe('CenteredHighlightedText component', () => {
  const defaultProps = {
    suggestion: 'this is a suggestion',
  };

  it('tests default rendering', () => {
    render(<CenteredHighlightedText {...defaultProps} />);
    expect(
      screen.getByTestId('smart-input-centered-highlighted-text')
    ).toBeInTheDocument();
    expect(screen.getByTestId('right-text')).toBeInTheDocument();
    expect(screen.queryByTestId('left-text')).not.toBeInTheDocument();
    expect(screen.queryByTestId('centered-text')).not.toBeInTheDocument();
  });

  it('should include left-text if the query it is included in the suggestion', () => {
    render(<CenteredHighlightedText {...defaultProps} query="suggestion" />);
    expect(screen.getByTestId('left-text')).toBeInTheDocument();
  });

  it('should include centered text if the query it is included in the suggestion', () => {
    render(<CenteredHighlightedText {...defaultProps} query="suggestion" />);
    expect(screen.getByTestId('centered-text')).toBeInTheDocument();
  });
});
