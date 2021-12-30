import React, { useRef } from 'react';
import State from 'util/storybook-docs/State';
import Button from 'components/Button';
import Popover, { PopoverProps } from '.';

const Template = (args: PopoverProps): JSX.Element => <Popover {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  transitionName: 'GrowFast',
  trigger: (
    <div className="margin--bottom">
      <Button label="Click Me" />
    </div>
  ),
  children: (
    <div
      className="padding--all"
      style={{ outline: '3px dotted red', background: '#FFFFFF' }}
    >
      popover content
    </div>
  ),
};

export const StyledPopoverContent = Template.bind({});
StyledPopoverContent.args = {
  trigger: <Button theme="outlined" label="Open popover" />,
  position: 'bottom',
  alignment: 'start',
  distance: 8,
  children: (
    <div className="bgColor--white rounded--all elevation--2 padding--all">
      <h3 className="type--head3">Look at me</h3>
      <p>
        <em>i am the popover</em>
      </p>
    </div>
  ),
};

export const ControlledPopover = (args: PopoverProps): JSX.Element => (
  <State
    initialValue={true}
    render={(myIsOpen, setMyIsOpen) => (
      <Popover
        {...args}
        trigger={
          <button
            onClick={() => {
              setMyIsOpen(!myIsOpen);
            }}
          >
            Open popover
          </button>
        }
        position="bottom"
        alignment="start"
        interactionMode="controlled"
        isOpen={myIsOpen}
        onUserDismiss={() => {
          setMyIsOpen(false);
        }}
        distance={8}
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

ControlledPopover.parameters = {
  docs: {
    description: {
      story:
        'The "controlled" `interactionMode` follows the conventions of a [controlled component](https://reactjs.org/docs/forms.html#controlled-components), meaning the open state of the popover is exclusively controlled by the prop `isOpen`. To update the state of `isOpen` based on user interaction, you must use the `onUserDismiss` callback. The `onUserDismiss` function is invoked when 1. The user clicks the trigger element 2. The user presses `Escape` 3. the user clicks away from the popover. If you\'d like to disable scrolling of some element when a popover is open you can pass a ref of the scrolling element to the `disableScrollRef` prop.',
    },
  },
};

export const PopoverWithinAPopover = (args: PopoverProps): JSX.Element => (
  <Popover trigger={<button>Open popover</button>}>
    <div className="bgColor--white rounded--all elevation--2 padding--all">
      <div className="padding--y--s padding--x--m" style={{ overflow: 'hidden' }}>
        <h3>Here is some content inside.</h3>
        <p>This popover is overflow hidden.</p>
        <p>
          Here is something else to
          <Popover
            {...args}
            trigger={<button className="margin--left--xs">click</button>}
          >
            <div className="bgColor--white rounded--all elevation--2 padding--all">
              <div className="padding--all--m">
                <p>
                  You can see this modal even though the parent modal has its{' '}
                  <code>overflow</code> set to <code>hidden</code>.
                </p>
                <p>You can also click inside here without closing the parent modals.</p>
              </div>
            </div>
          </Popover>
        </p>
      </div>
    </div>
  </Popover>
);
PopoverWithinAPopover.args = {
  isFixed: true,
  disablePortal: 'true',
};
const hidden = { table: { disable: true } };
PopoverWithinAPopover.argTypes = {
  triggerElement: hidden,
  theme: hidden,
  children: hidden,
  placement: hidden,
  isOpen: hidden,
  onUserDismiss: hidden,
  triggerType: hidden,
};

export const CloseOnScroll = (args: PopoverProps): JSX.Element => {
  const containerEl = useRef(null);
  return (
    <div
      ref={containerEl}
      style={{ height: 200, border: '1px dashed red', overflow: 'scroll' }}
    >
      <div style={{ height: 500, background: 'yellow' }}>
        <Popover
          {...args}
          trigger={<Button theme="outlined" label="Open popover" />}
          position="bottom"
          alignment="start"
          distance={8}
          closeOnScrollRef={containerEl}
        >
          <div className="bgColor--white rounded--all elevation--2 padding--all">
            <h3 className="type--head3">Look at me</h3>
            <p>
              <em>i am the popover</em>
            </p>
          </div>
        </Popover>
      </div>
    </div>
  );
};

CloseOnScroll.parameters = {
  docs: {
    description: {
      story:
        "If you'd like the ability to close the popover once the user scrolls some element, you can pass a ref of that element to the `closeOnScrollRef` prop. If you're not sure how to handle scrolling behavior with a popover, choose this option.",
    },
  },
};

export const DisableScrolling = (args: PopoverProps): JSX.Element => {
  const containerEl = useRef(null);
  return (
    <div
      ref={containerEl}
      style={{ height: 200, border: '1px dashed red', overflow: 'scroll' }}
    >
      <div style={{ height: 500, background: 'yellow' }}>
        <Popover
          {...args}
          trigger={<Button theme="outlined" label="Open popover" />}
          position="bottom"
          alignment="start"
          distance={8}
          disableScrollRef={containerEl}
        >
          <div className="bgColor--white rounded--all elevation--2 padding--all">
            <h3 className="type--head3">Look at me</h3>
            <p>
              <em>i am the popover</em>
            </p>
          </div>
        </Popover>
      </div>
    </div>
  );
};

DisableScrolling.parameters = {
  docs: {
    description: {
      story:
        "If you'd like to disable scrolling of some element when a popover is open you can pass a ref of the scrolling element to the `disableScrollRef` prop.",
    },
  },
};

export default {
  component: Popover,
  title: 'components/Popover',
  parameters: {
    docs: {
      description: {
        component:
          'Base popover component. Bring your own trigger and popover content. What this component does: Handle events according to `interactionMode` passed in & handle positioning of popover content What this component does **not** do: Content styling (the popover container is just a transparent div) & Arrows. They arent supported, but we can add them in the future. When setting `position` and `alignment` props, the positioning engine will prefer the props you provide, but may move the popover content to avoid edges of the viewport. This behavior is intentional.',
      },
    },
  },
};
