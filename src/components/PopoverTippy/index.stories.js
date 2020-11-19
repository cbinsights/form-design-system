import React from 'react';
import Button from 'components/Button';
import State from 'util/storybook-docs/State';
import Popover from '.';

const Template = (args) => <Popover {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  triggerElement: <Button label="Click Me" />,
  children: <div className="padding--all">popover content</div>,
};

export const styledPopoverContent = Template.bind({});
styledPopoverContent.args = {
  triggerElement: <Button theme="outlined" label="Open popover" />,
  children: (
    <div className="bgColor--white rounded--all padding--all--s">
      <h3 className="type--head3">Look at me</h3>
      <p>
        <em>i am the popover</em>
      </p>
    </div>
  ),
};

export const controlledPopover = (args) => (
  <State
    initialValue={true}
    render={(myIsOpen, setMyIsOpen) => (
      <Popover
        {...args}
        onClickOutside={() => setMyIsOpen(false)}
        triggerElement={
          <button
            onClick={() => {
              setMyIsOpen(!myIsOpen);
            }}
          >
            Open popover
          </button>
        }
        isOpen={myIsOpen}
      >
        <div className="bgColor--white rounded--all padding--all--s">
          <h3 className="type--head3">Look at me</h3>
          <p>
            <em>i am the popover</em>
          </p>
        </div>
      </Popover>
    )}
  />
);

export default {
  component: Popover,
  title: 'components/PopoverTippy',
};
