import React from 'react';
import { render } from '@testing-library/react';

import { CondensedDropdownOption, DetailedDropdownOption } from './DropdownOption';
import { SEARCH_TERM_TABS } from '../utils';

describe('DropdownOption', () => {
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

  describe('<DetailedDropdownOption /> component', () => {
    it('tests default rendering', () => {
      const { getByTestId } = render(<DetailedDropdownOption {...defaultProps} />);
      expect(getByTestId('smart-header-input-option')).toBeInTheDocument();
    });

    it('should render keyword if defaultType it is included in SEARCH_TERM_TABS', () => {
      const { getByTestId } = render(
        <DetailedDropdownOption
          {...defaultProps}
          selectValue={{ ...defaultProps.selectValue, defaultType: SEARCH_TERM_TABS[0] }}
        />
      );
      expect(getByTestId('smart-header-input-option')).toBeInTheDocument();
    });
  });

  describe('<CondensedDropdownOption /> component', () => {
    it('tests default rendering', () => {
      const { getByTestId } = render(<CondensedDropdownOption {...defaultProps} />);
      expect(getByTestId('smart-custom-input-option')).toBeInTheDocument();
    });
  });
});
