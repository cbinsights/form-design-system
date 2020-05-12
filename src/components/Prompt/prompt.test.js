import React from 'react';
import { shallow } from 'enzyme';
import Button from 'components/interactive/Button'
import Prompt from '.'

describe('Prompt component', () => {

  it('matches snapshot (default props)', () => {
    const component = shallow(<Prompt primaryButton={<Button label="foo" />} secondaryButton={<Button label="bar" />} />);
    expect(component).toMatchSnapshot();
    const component2 = shallow(<Prompt isOpen primaryButton={<Button label="foo" />} secondaryButton={<Button label="bar" />} />);
    expect(component2).toMatchSnapshot();
  });

  it('matches snapshot (set all props)', () => {
    const component = shallow(
      <Prompt 
        primaryButton={<Button label="foo" />} 
        secondaryButton={<Button label="bar" />} 
        title="title"
        desc="desc"
        isOpen
      />
    );
    expect(component).toMatchSnapshot();
  });

})