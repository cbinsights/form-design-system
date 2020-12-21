import React from 'react';
import { mount, shallow } from 'enzyme';

import Tooltip, { DEFAULT_WIDTH } from '.';

const SELECTOR_TOOLTIP = '[role="tooltip"]';

const Trigger = () => <p>trigger</p>;

describe('Tooltip component', () => {
  it('matches snapshot (uses the right classes)', () => {
    const wrapper = mount(<Tooltip trigger={<Trigger />} message="lol" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('sets the right default width', () => {
    const tooltipMaxWidth = shallow(
      <Tooltip trigger={<Trigger />} message="tooltip with default max width" />
    )
      .find(SELECTOR_TOOLTIP)
      .prop('style').maxWidth;

    expect(tooltipMaxWidth).toBe(DEFAULT_WIDTH);
  });

  it('overrides default width with `maxWidth` is passed in', () => {
    const evil = 666;
    const tooltipMaxWidth = shallow(
      <Tooltip
        trigger={<Trigger />}
        message="tooltip with evil max width"
        maxWidth={evil}
      />
    )
      .find(SELECTOR_TOOLTIP)
      .prop('style').maxWidth;

    expect(tooltipMaxWidth).toBe(`${evil}px`);
  });
});
