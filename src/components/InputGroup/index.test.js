import React from 'react';
import { render, screen } from '@testing-library/react';

import InputGroup, { getFlexSettings } from '.';

describe('InputGroup component', () => {
  it('matches snapshot (set all props)', () => {
    render(
      <InputGroup>
        <input type="text" />
        <input type="text" />
        <select name="type">
          <option value="1">Horse-size duck</option>
          <option value="2">Duck-size horse</option>
        </select>
      </InputGroup>
    );
    expect(screen.getByRole('option', { name: 'Horse-size duck' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Duck-size horse' })).toBeInTheDocument();
  });

  describe('getFlexSettings', () => {
    it('sets expected default for 2 items', () => {
      expect(getFlexSettings(2)).toStrictEqual(['grow', 'shrink']);
    });

    it('sets expected default for 3 items', () => {
      expect(getFlexSettings(3)).toStrictEqual(['shrink', 'grow', 'shrink']);
    });

    it('sets expected default for 4 items', () => {
      expect(getFlexSettings(4)).toStrictEqual(['shrink', 'grow', 'grow', 'shrink']);
    });

    it('overrides default when user passes in their own settings', () => {
      const userSetting = ['grow', 'grow', 'shrink', 'grow'];
      expect(getFlexSettings(userSetting.length, userSetting)).toStrictEqual(userSetting);
    });
  });
});
