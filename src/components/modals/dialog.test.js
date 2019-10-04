import React from 'react';
import { shallow } from 'enzyme';
import Dialog from './Dialog'

describe('Dialog component', () => {

  it('matches snapshot (default props)', () => {
    const component = shallow(<Dialog content="foo" />);
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot (set all props)', () => {
    const component = shallow(
      <Dialog 
        content="foo" 
        role="alertdialog" 
        isOpen={true} 
        canDismiss={true} 
        footerContent={<div>foo</div>} 
        content={<p>bar</p>} 
        title="hey" 
        onDismiss={(() => {})} 
      />
    );
    expect(component).toMatchSnapshot();
  });

})