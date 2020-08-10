import React from 'react';
import { shallow } from 'enzyme';

import Hscroll, { getScrollAtributes } from '.';

const WIDTH_CONTAINER = 400;
const WIDTH_CONTENT = 800;

const renderComponent = (props) => shallow(
  <Hscroll
    {...props}
    style={{ width: `${WIDTH_CONTAINER}px` }}
  >
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

  describe('getScrollAttributes', () => {

    it('returns correct attributes for partially scrolling', () => {
      const MOCK_EVENT = {
        target: {
          scrollLeft: 50,
          clientWidth: WIDTH_CONTAINER
        }
      };
      const { scrolled, scrollEnd } = getScrollAtributes(MOCK_EVENT, WIDTH_CONTENT);

      expect(scrolled).toBe(true);
      expect(scrollEnd).toBe(false);
    });

    it('returns correct attributes for scrolling completely to the end', () => {
      const MOCK_EVENT = {
        target: {
          scrollLeft: WIDTH_CONTAINER,
          clientWidth: WIDTH_CONTAINER
        }
      };
      const { scrolled, scrollEnd } = getScrollAtributes(MOCK_EVENT, WIDTH_CONTENT);

      expect(scrolled).toBe(true);
      expect(scrollEnd).toBe(true);
    });

    it('returns correct attributes for scrolling to the beginning', () => {
      const MOCK_EVENT = {
        target: {
          scrollLeft: 0,
          clientWidth: WIDTH_CONTAINER
        }
      };
      const { scrolled, scrollEnd } = getScrollAtributes(MOCK_EVENT, WIDTH_CONTENT);

      expect(scrolled).toBe(false);
      expect(scrollEnd).toBe(false);
    })

  });

});
