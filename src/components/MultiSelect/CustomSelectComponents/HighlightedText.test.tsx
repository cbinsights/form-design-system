import React from 'react';
import { render } from '@testing-library/react';

import HighlightedText from './HighlightedText';

describe('HighlightedText component', () => {
  const defaultProps = {
    suggestion: 'this is a suggestion',
  };

  it('tests default rendering', () => {
    const { getByTestId } = render(<HighlightedText {...defaultProps} />);
    expect(getByTestId('smart-input-highlighted-text')).toBeInTheDocument();
  });

  it('should include highlighted-text', () => {
    const { getByTestId } = render(
      <HighlightedText {...defaultProps} query="suggestion" />
    );
    expect(getByTestId('smart-input-highlighted-text')).toHaveTextContent(
      'this is a suggestion'
    );
    expect(getByTestId('not-highlighted-text')).toHaveTextContent('this is a');
    expect(getByTestId('highlighted-text')).toBeInTheDocument();
  });
});
