import React from 'react';
import { mount } from 'enzyme';

import Toaster from '.';

describe('Toaster component', () => {
  it('matches snapshot', () => {
    const component = mount(
      <Toaster isOpen toastProps={{ type: 'info', content: <p>test</p> }} />
    );
    expect(component).toMatchSnapshot();
  });

  it('passes dismiss func to toast', () => {
    const onDismiss = jest.fn();
    const component = mount(
      <Toaster
        onDismiss={onDismiss}
        isOpen
        toastProps={{ type: 'info', content: <p>test</p> }}
      />
    );
    const { dismissToast } = component.find('Toast').props();
    expect(typeof dismissToast).toBe('function');
  });
});
