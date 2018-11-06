import React from 'react';
import { shallow } from 'enzyme';

import AvatarRow, { getRenderConfig } from './AvatarRow';

const renderComponent = (props) => shallow(<AvatarRow {...props} />);

const MOCK_PROPS = {
  memberList: [
    { name: 'MOCK NAME', src: 'https://placeimg.com/40/41/animals' },
    { name: 'MOCK NAME', src: 'https://placeimg.com/40/41/animals' },
    { name: 'MOCK NAME', src: 'https://placeimg.com/40/41/animals' },
    { name: 'MOCK NAME', src: 'https://placeimg.com/40/41/animals' },
    { name: 'MOCK NAME', src: 'https://placeimg.com/40/41/animals' },
  ]
};

describe('Flex component', () => {

  it('matches snapshot', () => {
    const flex = renderComponent(MOCK_PROPS);
    expect(flex).toMatchSnapshot();
  });

  it('getRenderConfig returns correct render list and count', () => {
    const actual = getRenderConfig(MOCK_PROPS.memberList, 4);
    expect(actual.renderList.length).toBe(4);
    expect(actual.count).toBe(1);
  });
});
