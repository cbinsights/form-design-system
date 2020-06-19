import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Button from '.';

describe('Button component', () => {

  it('tests default rendering', () => {
    render(<Button label="Button" />);
    const button = screen.getByRole('button');
    expect(button).toBeTruthy();
    expect(button.classList.value).toMatch('fdsButton--m');
    expect(button.classList.value).toMatch('fdsButton--blue');
    expect(button.classList.value).not.toMatch('fdsButton--isDestructive');
    expect(button.classList.value).not.toMatch('fdsButton--isFullWidth');
  });

  it('tests rendering as link', () => {
    render(<Button label="Button" href="#" />);
    const link = screen.getByRole('link');
    expect(link).toBeTruthy();
  });


  it('tests that props get spread', () => {
    render(<Button label="Button" href="#" data-testid="test" />);
    expect(screen.getByTestId('test')).toBeTruthy();
  });

  it('tests that proper theme gets applied', () => {
    render(<Button label="Button" theme="outlined" />);
    const button = screen.getByRole('button');
    expect(button.classList.value).toMatch('fdsButton--outlined');
    expect(button.classList.value).not.toMatch('fdsButton--blue');
  });


});
