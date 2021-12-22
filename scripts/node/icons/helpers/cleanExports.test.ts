import { normalizePathToFile } from './cleanExports.js';

describe('normalizing file names', () => {
  test.each([
    ['/any/number/of/longer/paths/joeyTribbiani.png', 'JoeyTribbiani.png'],
    ['/shorter/paths/monicageller.png', 'Monicageller.png'],
    ['/any/path/CHANDLERBING.png', 'Chandlerbing.png'],
    ['/the/path/gets/truncated/ross-gellar.png', 'RossGellar.png'],
  ])('path of %s should return "%s"', (a, expected) => {
    expect(normalizePathToFile(a)).toBe(expected);
  });
});
