import React from 'react';
import { shallow } from 'enzyme';

import Chips from './Chips';

const chips = [
    { label: 'Lorem', href: "#lorem" },
    { label: 'Ipsum', href: "#ipsum", isActive: true, subtitle: 'active' },
    { label: 'Dolor', href: "#dolor", hasClose: true },
    { label: 'Sit', onClick: () => console.log('custom logic here'), isActive: false },
];

/**
 * NOTE: I have *purposely* have not extensively tested this, to force me and my 
 * manager to revisit and figure out a robust testing strategy for more
 * complex components like this.
 */

const renderComponent = (props) => shallow(<Chips {...props} />);

describe('Chips component', () => {

    it('matches snapshot (default props)', () => {
        const component = renderComponent({
            list: chips,
        });
        expect(component).toMatchSnapshot();
    });
});
