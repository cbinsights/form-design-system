import React from 'react';
import { render } from '@testing-library/react';

import CenteredHighlightedText from './CenteredHighlightedText';

describe('CenteredHighlightedText component', () => {
  const defaultProps = {
    suggestion: 'this is a suggestion',
  };

  it('tests default rendering', () => {
    const { getByTestId, queryByTestId } = render(
      <CenteredHighlightedText {...defaultProps} />
    );
    expect(getByTestId('smart-input-centered-highlighted-text')).toBeInTheDocument();
    expect(getByTestId('right-text')).toBeInTheDocument();
    expect(queryByTestId('left-text')).not.toBeInTheDocument();
    expect(queryByTestId('centered-text')).not.toBeInTheDocument();
  });

  it('should include left-text if the query it is included in the suggestion', () => {
    const { getByTestId } = render(
      <CenteredHighlightedText {...defaultProps} query="suggestion" />
    );
    expect(getByTestId('left-text')).toBeInTheDocument();
  });

  it('should include centered text if the query it is included in the suggestion', () => {
    const { getByTestId } = render(
      <CenteredHighlightedText {...defaultProps} query="suggestion" />
    );
    expect(getByTestId('centered-text')).toBeInTheDocument();
  });
});
