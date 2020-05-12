import React from 'react';
import { shallow } from 'enzyme';

import StarFilledIcon from 'lib/icons/react/StarFilledIcon';
import IconInput from './IconInput';

describe('IconInput component', () => {
  it('matches snapshot (set all props)', () => {
    const wrapper = shallow(
      <IconInput
        IconLeft={StarFilledIcon}
        IconRight={StarFilledIcon}
      >
        <input type="text" />
      </IconInput>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('only adds left padding for left icon', () => {
    const rootEl = shallow(
      <IconInput
        IconLeft={StarFilledIcon}
      >
        <input type="text" />
      </IconInput>
    ).find('.fdsIconInput');

    expect(rootEl.hasClass('fdsIconInput--hasStartIcon')).toBe(true);
    expect(rootEl.hasClass('fdsIconInput--hasEndIcon')).toBe(false);
  });

  it('only adds right padding for right icon', () => {
    const rootEl = shallow(
      <IconInput
        IconRight={StarFilledIcon}
      >
        <input type="text" />
      </IconInput>
    ).find('.fdsIconInput');

    expect(rootEl.hasClass('fdsIconInput--hasEndIcon')).toBe(true);
    expect(rootEl.hasClass('fdsIconInput--hasStartIcon')).toBe(false);
  });

});
