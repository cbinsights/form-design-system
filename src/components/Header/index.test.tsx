import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Header, { HeaderProps } from '.';

describe('Header component', () => {
  const props: HeaderProps = {
    onAdvancedSearchClick: jest.fn(),
    onSearchClick: jest.fn(),
    showLogo: true,
    logoImg: 'img',
    Link: React.Fragment,
    smartInputProps: {},
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('tests default rendering', () => {
    render(<Header {...props} />);
    expect(screen.getByAltText('logo')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Advanced Search' })).toBeInTheDocument();
  });

  it('should not render logo', () => {
    render(<Header {...props} showLogo={false} />);
    expect(screen.queryByAltText('logo')).not.toBeInTheDocument();
  });

  it('should trigger onAdvancedSearchClick callback when Advanced Search button is clicked', () => {
    render(<Header {...props} />);
    userEvent.click(screen.getByRole('button', { name: 'Advanced Search' }));
    expect(props.onAdvancedSearchClick).toHaveBeenCalled();
  });

  it('should trigger onSearchClick callback when Search button is clicked', () => {
    render(<Header {...props} />);
    userEvent.click(screen.getByRole('button', { name: 'Search' }));
    expect(props.onSearchClick).toHaveBeenCalled();
  });
});
