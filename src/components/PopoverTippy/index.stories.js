import React from 'react';
import Button from 'components/Button';
import State from 'util/storybook-docs/State';
import Popover from '.';

const Template = (args) => <Popover {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  triggerElement: <Button label="Click Me" />,
  children: (
    <div
      className="padding--all"
      style={{ outline: '3px dotted red', background: '#FFFFFF' }}
    >
      popover content
    </div>
  ),
};

export const styledPopoverContent = Template.bind({});
styledPopoverContent.args = {
  triggerElement: <Button theme="outlined" label="Open popover" />,
  children: (
    <div className="bgColor--white rounded--all elevation--2 padding--all">
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
        <div className="bgColor--white rounded--all elevation--2 padding--all">
          <h3 className="type--head3">Look at me</h3>
          <p>
            <em>i am the popover</em>
          </p>
        </div>
      </Popover>
    )}
  />
);

controlledPopover.parameters = {
  docs: {
    description: {
      story:
        'The "controlled" `interactionMode` follows the conventions of a [controlled component](https://reactjs.org/docs/forms.html#controlled-components), meaning the open state of the popover is exclusively controlled by the prop `isOpen`. To update the state of `isOpen` based on user interaction, you must use the `onUserDismiss` callback. The `onUserDismiss` function is invoked when 1. The user clicks the trigger element 2. The user presses `Escape` 3. the user clicks away from the popover. If you\'d like to disable scrolling of some element when a popover is open you can pass a ref of the scrolling element to the `disableScrollRef` prop.',
    },
  },
};

export default {
  component: Popover,
  title: 'components/PopoverTippy',
  parameters: {
    docs: {
      description: {
        component: 'Base popover component. Bring your own trigger and popover content.',
      },
    },
  },
};
