import React from 'react';
import { shallow } from 'enzyme';

import WorkFasterIcon from 'fds-icons/lib/react/WorkFasterIcon';
import Updatable from './Updatable';

const MOCK_COMPONENT = (
  <div>I can be updated with an update indicator.</div>
);

describe('AvatarRow component', () => {

  it('matches snapshot with count', () => {
    const component = shallow(<Updatable message="666">{MOCK_COMPONENT}</Updatable>)
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot with element in message', () => {
    const message = (<span><WorkFasterIcon size="xs" color="#ffffff" /> lightning bolt for some reason</span>);
    const component = shallow(<Updatable message={message}>{MOCK_COMPONENT}</Updatable>);
    expect(component).toMatchSnapshot();
  });

});
