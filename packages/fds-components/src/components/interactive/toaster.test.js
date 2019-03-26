import React from 'react';
import { shallow } from 'enzyme';

import Toast from './Toast';
import Toaster from './Toaster';

const renderToaster = (props) => {
  const toast = <Toast type="info" content={<p>test</p>} />;
  return shallow(<Toaster toast={toast} {...props} />);
}


describe('Toaster component', () => {

  it('matches snapshot', () => {
    const component = renderToaster();
    expect(component).toMatchSnapshot();
  });

});
