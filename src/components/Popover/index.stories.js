import React, { useState } from 'react';
import Button from 'components/Button';
import Popover from '.';

const Template = (args) => <Popover {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  triggerElement: <Button label="Click Me" />,
  children: <div className="padding--all">popover content</div>,
};

export const Unthemed = Template.bind({});
Unthemed.args = {
  theme: 'unthemed',
  triggerElement: <Button label="Click Me" />,
  children: (
    <div
      className="bgColor-white"
      style={{ border: 'red dotted 3px', background: 'white', padding: '8px' }}
    >
      popover content
    </div>
  ),
};

export const controlledPopover = (args) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Popover
      {...args}
      onUserDismiss={() => setIsOpen(false)}
      triggerElement={
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Open popover
        </button>
      }
      isOpen={isOpen}
    >
      <div className="padding--all">
        <h3 className="type--head3">Look at me</h3>
        <p>
          <em>i am the popover</em>
        </p>
      </div>
    </Popover>
  );
};

export default {
  component: Popover,
  title: 'components/Popover',
};
