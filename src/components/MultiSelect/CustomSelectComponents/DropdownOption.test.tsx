import React from 'react';
import { render } from '@testing-library/react';

import { DropdownOption } from './DropdownOption';
import { SEARCH_TERM_TABS } from '../utils';

describe('DropdownOption component', () => {
  const defaultProps = {
    selectValue: {
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
    const { getByTestId } = render(<DropdownOption {...defaultProps} />);
    expect(getByTestId('smart-custom-input-option')).toBeInTheDocument();
  });

  it('should render smart-header-input-option when isHeader is true', () => {
    const { queryByTestId, getByTestId } = render(
      <DropdownOption {...defaultProps} isHeader />
    );
    expect(queryByTestId('boolean')).not.toBeInTheDocument();
    expect(getByTestId('smart-header-input-option')).toBeInTheDocument();
  });

  it('should render keyword if defaultType it is included in SEARCH_TERM_TABS', () => {
    const { getByTestId } = render(
      <DropdownOption
        {...defaultProps}
        isHeader
        selectValue={{ ...defaultProps.selectValue, defaultType: SEARCH_TERM_TABS[0] }}
      />
    );
    expect(getByTestId('smart-header-input-option')).toBeInTheDocument();
  });
});
