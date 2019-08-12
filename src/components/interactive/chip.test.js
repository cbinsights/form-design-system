import React from 'react';
import { shallow } from 'enzyme';

import Chip from './Chip';

const renderComponent = (props) => shallow(<Chip {...props} />);

describe('Chip component', () => {

    it('matches snapshot (default props)', () => {
        const component = renderComponent({
            label: 'foo',
        });
        expect(component).toMatchSnapshot();
    });


    it('matches snapshot (set all props)', () => {
        const component = renderComponent({
            label: 'foo',
            as: () => {},
            isActive: true,
            subtitle: 'bar',
            hasClose: false,
            size: 'large',
            theme: 'blue'
        });
        expect(component).toMatchSnapshot();
    });
});
