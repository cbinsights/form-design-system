import { getScrollAttributes } from '.';

const WIDTH_CONTAINER = 400;
const WIDTH_CONTENT = 800;

describe('getScrollAttributes', () => {

  it('returns correct attributes for partially scrolling', () => {
    const MOCK_EVENT = {
      target: {
        scrollLeft: 50,
        clientWidth: WIDTH_CONTAINER
      }
    };
    const { scrollStart, scrollEnd } = getScrollAttributes(MOCK_EVENT, WIDTH_CONTENT);

    expect(scrollStart).toBe(false);
    expect(scrollEnd).toBe(false);
  });

  it('returns correct attributes for scrolling completely to the end', () => {
    const MOCK_EVENT = {
      target: {
        scrollLeft: WIDTH_CONTAINER,
        clientWidth: WIDTH_CONTAINER
      }
    };
    const { scrollStart, scrollEnd } = getScrollAttributes(MOCK_EVENT, WIDTH_CONTENT);

    expect(scrollStart).toBe(false);
    expect(scrollEnd).toBe(true);
  });

  it('returns correct attributes for scrolling to the beginning', () => {
    const MOCK_EVENT = {
      target: {
        scrollLeft: 0,
        clientWidth: WIDTH_CONTAINER
      }
    };
    const { scrollStart, scrollEnd } = getScrollAttributes(MOCK_EVENT, WIDTH_CONTENT);

    expect(scrollStart).toBe(true);
    expect(scrollEnd).toBe(false);
  })

});