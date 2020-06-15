import React from 'react';
import { shallow } from 'enzyme';

import GapList from '.';

describe('GapList component', () => {

  it('matches snapshot for string items', () => {
    const component = shallow(
      <GapList
        items={['why', 'did', 'it', 'have', 'to', 'be', 'snakes?']}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot for mixed strings and components', () => {
    const component = shallow(
      <GapList
        items={[
          <a key="👻" href="#">Spooky</a>,
          'snapshot',
        ]}
      />
    );
    expect(component).toMatchSnapshot();
  });

});
