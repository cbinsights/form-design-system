import React from 'react';
import { shallow } from 'enzyme';

import IconButton from '@material-ui/core/IconButton';
import CountdownButton from '../media/CountdownButton';

import Toast from './Toast';

const renderByType = (type, extraProps) => {
  return shallow(<Toast type={type} content={<p>lol</p>} {...extraProps} />)
}


describe('Toast component', () => {

  it('matches snapshot (info)', () => {
    const component = renderByType('info');
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot (success)', () => {
    const component = renderByType('success');
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot (progress)', () => {
    const component = renderByType('progress');
    expect(component).toMatchSnapshot();
  });

  /*
  it('matches snapshot (progress determinate)', () => {
    const component = renderByType('progress', { progress: 66 });
    expect(component).toMatchSnapshot();
  });
  */

  it('matches snapshot (error)', () => {
    const component = renderByType('error');
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot (warn)', () => {
    const component = renderByType('error');
    expect(component).toMatchSnapshot();
  });

  it('does NOT render action button if label and action are not passed', () => {
    const component = renderByType('info');
    const actionButton = component.find('.toast-action');
    expect(actionButton).toHaveLength(0);
  });

  it('renders action button if label and action are passed', () => {
    const component = renderByType('info', {
      onAction: () => {},
      actionLabel: 'action',
    });
    const actionButton = component.find('.toast-action');
    expect(actionButton).toHaveLength(1);
  });

  it('does NOT render close button when `canDismiss` set to false', () => {
    const component = renderByType('info', {
      canDismiss: false,
    });
    const closeButton = component.find(CountdownButton);
    expect(closeButton).toHaveLength(0);
  });

  it('renders close button by default', () => {
    const component = renderByType('info');
    const closeButton = component.find(CountdownButton);
    expect(closeButton).toHaveLength(1);
  });

  it('uses normal dismiss button when `isAutoDismiss` set to false', () => {
    const component = renderByType('info', {
      isAutoDismiss: false,
    });
    const countdownButton = component.find(CountdownButton);
    const standardButton = component.find(IconButton);
    expect(countdownButton).toHaveLength(0);
    expect(standardButton).toHaveLength(1);
  });
});
