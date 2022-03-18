import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Header, { HeaderProps } from '.';

describe('Header component', () => {
  const props: HeaderProps = {
    onAdvancedSearchClick: jest.fn(),
    onSearchClick: jest.fn(),
    showLogo: true,
    logoImg: 'img',
    Link: React.Fragment,
    smartInputProps: {
      onChange: jest.fn(),
      onClear: jest.fn(),
      onMenuClose: jest.fn(),
      onOptionClick: jest.fn(),
    },
  };

  it('tests default rendering', () => {
    const { getByTestId, getByAltText } = render(<Header {...props} />);
    expect(getByAltText('logo')).toBeInTheDocument();
    expect(getByTestId('search-button')).toBeInTheDocument();
    expect(getByTestId('advanced-search-button')).toBeInTheDocument();
  });

  it('should not render logo when showLogo is false', () => {
    const { getByTestId, queryByText } = render(<Header {...props} showLogo={false} />);
    expect(queryByText('logo')).not.toBeInTheDocument();
    expect(getByTestId('search-button')).toBeInTheDocument();
    expect(getByTestId('advanced-search-button')).toBeInTheDocument();
  });

  it('should trigger onAdvancedSearchClick callback when the advanced-search-button is clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Header {...props} onAdvancedSearchClick={handleClick} />
    );
    fireEvent.click(getByTestId('advanced-search-button'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('should trigger onSearchClick callback when the search-button is clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<Header {...props} onSearchClick={handleClick} />);
    fireEvent.click(getByTestId('search-button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
