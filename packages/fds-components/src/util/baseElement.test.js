import baseElement from './baseElement'

const Dummy = () => {
  return null 
}

describe('baseElement', () => {

  it('returns an anchor when href is passed', () => {
    const Element = baseElement({ href: "#example" })
    expect(Element).toBe('a');
  });

  it('returns a button when href is not passed', () => {
    const Element = baseElement({ href: undefined })
    expect(Element).toBe('button');
  });

  it('returns "as" element / component if its passed', () => {
    expect(baseElement({ as: Dummy })).toBe(Dummy);
    expect(baseElement({ as: Dummy, href: '#example' })).toBe(Dummy);
  });

})