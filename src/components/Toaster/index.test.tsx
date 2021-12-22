import React from 'react';
import { mount } from 'enzyme';
import Toaster from '.';
import Toast from './Toast';

describe('Toaster component', () => {
  it('matches snapshot', () => {
    const component = mount(
      <Toaster isOpen toastInstance={{ type: 'info', content: <p>test</p> }} />
    );
    expect(component).toMatchSnapshot();
  });

  it('passes dismiss func to toast', () => {
    const mockOnDismiss = jest.fn();
    const component = mount(
      <Toaster
        isOpen
        toastInstance={{ type: 'info', content: <p>test</p>, onDismiss: mockOnDismiss }}
      />
    );
    const { onDismiss } = component.find(Toast).props();
    expect(typeof onDismiss).toBe('function');
  });
});
