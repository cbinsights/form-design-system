import React from 'react';
import { shallow } from 'enzyme';

import Chips from './Chips';

const chips = [
    { label: 'Lorem', href: "#lorem" },
    { label: 'Ipsum', href: "#ipsum", isActive: true, subtitle: 'active' },
    { label: 'Dolor', href: "#dolor", hasClose: true },
    { label: 'Sit', onClick: () => console.log('custom logic here'), isActive: false },
];

const renderComponent = (props) => shallow(<Chips {...props} />);

describe('Chips component', () => {

    it('matches snapshot (default props)', () => {
        const component = renderComponent({
            list: chips,
        });
        expect(component).toMatchSnapshot();
    });
});
