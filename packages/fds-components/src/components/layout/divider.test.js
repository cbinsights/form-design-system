import React from 'react';
import { shallow } from 'enzyme';

import Divider from './Divider';

const renderComponent = (props) => shallow(<Divider {...props} />);

describe('Divider component', () => {

  it('matches snapshot (default props)', () => {
    const wrapper = renderComponent();
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot (with label)', () => {
    const wrapper = renderComponent({
      label: 'Expert Tags'
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot (with action button)', () => {
    const wrapper = renderComponent({
      label: 'Expert Tags',
      actionButton: (<button>Reset</button>),
    });
    expect(wrapper).toMatchSnapshot();
  });

});
