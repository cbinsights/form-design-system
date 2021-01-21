import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Button from '.';

describe('Button component', () => {

  it('tests default rendering', () => {
    render(<Button label="Button" />);
    const button = screen.getByRole('button', { name: "Button" });
    expect(button).toBeTruthy();
    expect(button).toHaveClass('fdsButton--m');
    expect(button).toHaveClass('fdsButton--blue');
    expect(button).not.toHaveClass('fdsButton--isDestructive');
    expect(button).not.toHaveClass('fdsButton--isFullWidth');
  });

  it('tests rendering as link', () => {
    render(<Button label="Anchor" href="#" />);
    const link = screen.getByRole('link', { name: "Anchor" });
    expect(link).toBeTruthy();
  });


  it('tests that props get spread', () => {
    render(<Button label="Button" href="#" data-testid="test" />);
    expect(screen.getByTestId('test')).toBeTruthy();
  });

  it('tests that proper theme gets applied', () => {
    render(<Button label="Button" theme="outlined" />);
    const button = screen.getByRole('button', { name: "Button"});
    expect(button).toHaveClass('fdsButton--outlined');
    expect(button).not.toHaveClass('fdsButton--blue');
  });

  it('tests misc functionality', () => {
    render(
      <Button
        label="Button"
        isLoading	
        disabled	
        isFullWidth	
        isBreakoutLink
        margin="all--s"
      />
    );
    const button = screen.getByRole('button', { name: "Button" });
    expect(button).toHaveClass('fdsButton--disabled');
    expect(button).toHaveClass('fdsButton--loading');
    expect(button).toHaveClass('fdsButton--isFullWidth');
    expect(button).toHaveClass('breakoutLink');
  });

});
