import React from 'react';
import { shallow } from 'enzyme';
import Prompt from './Prompt'
import Button from '../interactive/Button'

describe('Prompt component', () => {

  it('matches snapshot (default props)', () => {
    const component = shallow(<Prompt primaryButton={<Button>foo</Button>} secondaryButton={<Button>bar</Button>} />);
    expect(component).toMatchSnapshot();
    const component2 = shallow(<Prompt isOpen={true} primaryButton={<Button>foo</Button>} secondaryButton={<Button>bar</Button>} />);
    expect(component2).toMatchSnapshot();
  });

  it('matches snapshot (set all props)', () => {
    const component = shallow(
      <Prompt 
        primaryButton={<Button>foo</Button>} 
        secondaryButton={<Button>bar</Button>} 
        title="title"
        desc="desc"
        isOpen={true}
      />
    );
    expect(component).toMatchSnapshot();
  });

})