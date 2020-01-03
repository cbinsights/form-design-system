import baseElement from './baseElement'

const Dummy = () => null

describe('baseElement', () => {

  it('returns an anchor when href is passed', () => {
    const Element = baseElement({ href: "#" })
    expect(Element).toBe('a');
  });

  it('returns a button when onClick is passed', () => {
    const Element = baseElement({ onClick: () => {} })
    expect(Element).toBe('button');
  });

  it('returns a button when onClick and href are passed', () => {
    const Element = baseElement({ onClick: () => {}, href: "#" })
    expect(Element).toBe('button');
  });

  it('returns a div when neither onClick nor href are passed', () => {
    const Element = baseElement({ })
    expect(Element).toBe('div');
  });

  it('returns "as" element / component if its passed', () => {
    expect(baseElement({ as: Dummy })).toBe(Dummy);
    expect(baseElement({ as: Dummy, href: '#example' })).toBe(Dummy);
  });

})
