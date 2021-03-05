import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from 'components';
import Prompt from '.';

describe('Prompt component', () => {
  it('tests that prompt renders properly', () => {
    render(
      <Prompt
        isOpen
        primaryButton={<Button label="foo" />}
        secondaryButton={<Button label="bar" />}
      />
    );

    expect(screen.getByText('foo')).toBeTruthy();
    expect(screen.getByText('bar')).toBeTruthy();
  });
});
