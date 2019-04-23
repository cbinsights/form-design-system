import React from 'react';
import { shallow } from 'enzyme';

import WorkFasterIcon from 'fds-icons/lib/react/WorkFasterIcon';
import Updatable from './Updatable';

const renderComponent = (props) => shallow(<Updatable {...props} />);

const MOCK_COMPONENT = (
  <div>I can be updated with an update indicator.</div>
);

describe('AvatarRow component', () => {

  it('matches snapshot with count', () => {
    const component = renderComponent({
      component: MOCK_COMPONENT,
      message: '666'
    });
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot with element in message', () => {
    const component = renderComponent({
      component: MOCK_COMPONENT,
      message: <span><WorkFasterIcon size="xs" color="#ffffff" /> lightning bolt for some reason</span>,
    });
    expect(component).toMatchSnapshot();
  });

});
