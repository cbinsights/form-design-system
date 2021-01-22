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

export const popoverWithinAPopover = (args) => (
  <Popover triggerElement={<button>Open popover</button>}>
    <div className="padding--y--s padding--x--m" style={{ overflow: 'hidden' }}>
      <h3>Here is some content inside.</h3>
      <p>This popover is overflow hidden.</p>
      <p>
        Here is something else to
        <Popover
          triggerElement={<button className="margin--left--xs">click</button>}
          {...args}
        >
          <div className="padding--all--m">
            <p>
              You can see this modal even though the parent modal has its{' '}
              <code>overflow</code> set to <code>hidden</code>.
            </p>
            <p>You can also click inside here without closing the parent modals.</p>
          </div>
        </Popover>
      </p>
    </div>
  </Popover>
);
popoverWithinAPopover.args = {
  isFixed: true,
  appendTo: 'parent',
};
const hidden = { table: { disable: true } };
popoverWithinAPopover.argTypes = {
  triggerElement: hidden,
  theme: hidden,
  children: hidden,
  placement: hidden,
  isOpen: hidden,
  onUserDismiss: hidden,
  triggerType: hidden,
};

export default {
  component: Popover,
  title: 'components/Popover',
  argTypes: { onShow: { action: 'onShow' }, onHide: { action: 'onHide' } },
};
