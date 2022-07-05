import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './';

describe('Navbar', () => {
  it('renders the Navbar buttons', () => {
    render(<Navbar site="www.cbinsights.com" utmContext="utmContext=public-profiles" />);
    expect(screen.getByText('Who We Serve')).toBeInTheDocument();
    expect(screen.getByText('How We Help')).toBeInTheDocument();
    expect(screen.getByText('What We Offer')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
  });
  it('should open the dropdown on mouseover', () => {
    render(<Navbar site="www.cbinsights.com" utmContext="utmContext=public-profiles" />);
    fireEvent.mouseOver(screen.getByText('Who We Serve'));
    expect(screen.getByText('Function')).toBeVisible();
  });
});
