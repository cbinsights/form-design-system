import React from 'react';
import { mount } from 'enzyme';

import Tooltip from '.';

const Trigger = () => <p>trigger</p>;

describe('Tooltip component', () => {
  it('matches snapshot (uses the right classes)', () => {
    const wrapper = mount(<Tooltip trigger={<Trigger />} message="lol" />);
    expect(wrapper).toMatchSnapshot();
  });
});
