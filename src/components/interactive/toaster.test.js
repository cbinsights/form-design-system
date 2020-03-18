import React from 'react';
import { mount, shallow } from 'enzyme';
import uuid from 'uuid/v4';

import Toast from './Toast';
import Toaster from './Toaster';

jest.mock('uuid/v4');

const renderToaster = (useShallow, props) => {
  const toast = <Toast type="info" content={<p>test</p>} />;
  let result;
  if (useShallow) {
    result = shallow(<Toaster toast={toast} {...props} />);
  } else {
    result = mount(<Toaster toast={toast} {...props} />);
  }
  return result;
}


describe('Toaster component', () => {

  uuid.mockImplementation(() => 'testid');

  it('matches snapshot', () => {
    const component = renderToaster(true);
    expect(component).toMatchSnapshot();
  });

  it('passes dismiss func to toast', () => {
    const component = renderToaster();
    const {dismissToast} = component.find(Toast).props();
    expect(typeof dismissToast).toBe('function');
  })

});
