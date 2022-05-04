import React from 'react';
import { render, screen } from '@testing-library/react';

import DropdownOption from './DropdownOption';
import { SEARCH_TERM_TABS } from '../utils';

describe('DropdownOption component', () => {
  const defaultProps = {
    option: {
      boolean: '',
      category: 'category',
      id: 'id',
      text: 'text',
      type: 'type',
      label: 'label',
      uid: '',
    },
  };

  it('tests default rendering', () => {
    render(<DropdownOption {...defaultProps} />);
    expect(screen.getByRole('option')).toBeInTheDocument();
  });

  it('should render detailed option when type is detailed', () => {
    render(<DropdownOption {...defaultProps} type={'detailed'} />);
    expect(screen.getByRole('option')).toBeInTheDocument();
  });

  it('should render keyword if defaultType it is included in SEARCH_TERM_TABS', () => {
    render(
      <DropdownOption
        {...defaultProps}
        type={'detailed'}
        option={{ ...defaultProps.option, defaultType: SEARCH_TERM_TABS[0] }}
      />
    );
    expect(screen.getByRole('option')).toBeInTheDocument();
  });
});
