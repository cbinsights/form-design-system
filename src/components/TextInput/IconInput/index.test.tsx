import React from 'react';
import { render, screen } from '@testing-library/react';

import StarFilledIcon from 'icons/react/StarFilledIcon';
import IconInput from '.';

describe('IconInput component', () => {
  it('renders component (set all props)', () => {
    render(
      <IconInput IconLeft={StarFilledIcon} IconRight={StarFilledIcon}>
        <input type="text" />
      </IconInput>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
