import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './';

describe('Footer', () => {
  it('renders the footer', () => {
    render(<Footer site="www.cbinsights.com" />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('How We Help')).toBeInTheDocument();
    expect(screen.getByText('What We Offer')).toBeInTheDocument();
    expect(screen.getByText('Popular Research')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
  });
});
