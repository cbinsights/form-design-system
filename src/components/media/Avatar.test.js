import React from 'react';
import { shallow } from 'enzyme';

import Avatar, { grabInitials } from './Avatar';

const renderComponent = (props) => shallow(<Avatar {...props} />);

describe('grabInitials', () => {

  it('Outputs one initial for one word', () => {
    expect(grabInitials('George')).toBe('G');
  });

  it('Outputs two initials for two words', () => {
    expect(grabInitials('George Wallace')).toBe('GW');
  });

  it('Always outputs uppercase initials', () => {
    expect(grabInitials('george wallace')).toBe('GW');
  });

  it('Only ever outputs the first two initials', () => {
    expect(grabInitials('George Wallace Kennedy')).toBe('GW');
  });

});

describe('Avatar component', () => {

  it('has no image', () => {
    const component = renderComponent({ name: 'Joey Tribbiani' });
    expect(component).toMatchSnapshot();
  });

  it('has an image', () => {
    const component = renderComponent({ name: 'Joey Tribbiani', imgUrl: 'lol.png' });
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot (set all props)', () => {
    const component = renderComponent({ name: 'Ross Gellar', bgColor: 'aqua', size: 's', imgUrl: 'lol.png' })
    expect(component).toMatchSnapshot();
  });
});
