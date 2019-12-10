import React from 'react';
import { shallow } from 'enzyme';
import { MockLink } from '../util/mock-react-router';

import Avatar from './Avatar';

const renderComponent = (props) => shallow(<Avatar {...props} />);

const props = {
  name: 'Ross Gellar', bgColor: 'aqua', Link: MockLink, size: 's', imgUrl: 'lol.png', 
};

describe('Avatar component', () => {

  it('matches snapshot (default props)', () => {
    const component = renderComponent({ name: 'Joey Tribbiani' });
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot (set all props)', () => {
    const component = renderComponent(props);
    expect(component).toMatchSnapshot();
  });
});
