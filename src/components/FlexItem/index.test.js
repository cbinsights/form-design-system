import React from 'react';
import { shallow } from 'enzyme';

import FlexItem from '.';

describe('Flex component', () => {
  it('matches snapshot (default props)', () => {
    expect(
      shallow(
        <FlexItem>
          <div />
        </FlexItem>
      )
    ).toMatchSnapshot();
  });

  it('matches snapshot (no child)', () => {
    expect(shallow(<FlexItem></FlexItem>)).toMatchSnapshot();
  });

  it('matches snapshot (set all props)', () => {
    expect(
      shallow(<FlexItem shrink align="center" justify="spaceBetween" />)
    ).toMatchSnapshot();
  });
});
