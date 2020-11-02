import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TableIcon from 'lib/icons/react/TableIcon';
import ZeroState from '.';

describe('<ZeroState />', () => {
  describe('if label is provided', () => {
    it('should render label', () => {
      render(<ZeroState label="Hello World" />);
      expect(screen.getByText('Hello World')).toBeTruthy();
      expect(screen.queryByRole('img')).toBeNull();
    });
  });

  describe('if Icon is provided', () => {
    it('should render icon', () => {
      render(<ZeroState Icon={TableIcon} />);
      expect(screen.getByRole('img')).toBeTruthy();
    });
  });
});
