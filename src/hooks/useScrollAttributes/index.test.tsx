import { getScrollAttributes } from '.';

const WIDTH_CONTAINER = 400;
const WIDTH_CONTENT = 800;

describe('getScrollAttributes', () => {
  it('returns correct attributes for partially scrolling', () => {
    const scrollLeft = 50;

    const { scrollStart, scrollEnd } = getScrollAttributes(
      scrollLeft,
      WIDTH_CONTAINER,
      WIDTH_CONTENT
    );

    expect(scrollStart).toBe(false);
    expect(scrollEnd).toBe(false);
  });

  it('returns correct attributes for scrolling completely to the end', () => {
    const scrollLeft = WIDTH_CONTAINER;

    const { scrollStart, scrollEnd } = getScrollAttributes(
      scrollLeft,
      WIDTH_CONTAINER,
      WIDTH_CONTENT
    );

    expect(scrollStart).toBe(false);
    expect(scrollEnd).toBe(true);
  });

  it('returns correct attributes for scrolling to the beginning', () => {
    const scrollLeft = 0;

    const { scrollStart, scrollEnd } = getScrollAttributes(
      scrollLeft,
      WIDTH_CONTAINER,
      WIDTH_CONTENT
    );

    expect(scrollStart).toBe(true);
    expect(scrollEnd).toBe(false);
  });
});
