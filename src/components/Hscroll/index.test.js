import React from 'react';
import { shallow } from 'enzyme';

import Hscroll from '.';

const WIDTH_CONTAINER = 400;
const WIDTH_CONTENT = 800;

const renderComponent = (props) =>
  shallow(
    <Hscroll {...props} style={{ width: `${WIDTH_CONTAINER}px` }}>
      <div style={{ width: `${WIDTH_CONTENT}px` }}>long boi</div>
    </Hscroll>
  );

describe('Hscroll component', () => {
  it('matches snapshot (default props)', () => {
    const wrapper = renderComponent();
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot (disable fade)', () => {
    const wrapper = renderComponent({ enableFade: false });
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot (enable gutter)', () => {
    const wrapper = renderComponent({ enableGutter: true });
    expect(wrapper).toMatchSnapshot();
  });
});
