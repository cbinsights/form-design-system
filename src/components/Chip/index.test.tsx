import React from 'react';
import { shallow } from 'enzyme';
import StarFilledIcon from 'icons/react/StarFilledIcon';
import Chip, { ChipProps } from '.';

const renderComponent = (props: ChipProps) => shallow(<Chip {...props} />);

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
      isActive: true,
      subtitle: 'bar',
      onClose: () => {},
      Icon: StarFilledIcon,
      size: 'm',
      theme: 'blue',
    });
    expect(component).toMatchSnapshot();
  });
});
