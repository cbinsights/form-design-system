import React, { useRef } from 'react';
import State from 'util/storybook-docs/State';
import Button from 'components/Button';
import { StoryObj } from '@storybook/react';
import Popover, { PopoverProps } from '.';
import DropdownButton from 'components/DropdownButton';
import FlexItem from 'components/FlexItem';
import Flex from 'components/Flex';
import ComponentWithoutRef from './ComponentWithoutRef';

export const Primary: StoryObj<PopoverProps> = {
  args: {
    transitionName: 'GrowFast',
    trigger: (
      <div className="margin--bottom">
        <Button label="Click Me" />
      </div>
    ),
    children: (
      <div
        className="padding--all"
        style={{
          outline: '3px dotted red',
          background: '#FFFFFF',
        }}
      >
        popover content
      </div>
    ),
  },
};

export const HoveredPopover: StoryObj<PopoverProps> = {
  args: {
    interactionMode: 'hover',
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
  },
};

export const StyledPopoverContent: StoryObj<PopoverProps> = {
  args: {
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
  },
};

export const ControlledPopover: StoryObj<PopoverProps> = {
  render: (args: PopoverProps): JSX.Element => (
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
          distance={8}
          onUserDismiss={() => {
            setMyIsOpen(false);
          }}
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
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The "controlled" `interactionMode` follows the conventions of a [controlled component](https://reactjs.org/docs/forms.html#controlled-components), meaning the open state of the popover is exclusively controlled by the prop `isOpen`. To update the state of `isOpen` based on user interaction, you must use the `onUserDismiss` callback. The `onUserDismiss` function is invoked when 1. The user clicks the trigger element 2. The user presses `Escape` 3. the user clicks away from the popover. If you\'d like to disable scrolling of some element when a popover is open you can pass a ref of the scrolling element to the `disableScrollRef` prop.',
      },
    },
  },
};

export const ControlledPopoverWithExternalTrigger: StoryObj<PopoverProps> = {
  render: (args: PopoverProps): JSX.Element => {
    return (
      <State
        initialValue={true}
        render={(myIsOpen, setMyIsOpen) => (
          <Flex>
            <FlexItem>
              <button
                onClick={() => {
                  setMyIsOpen(!myIsOpen);
                }}
              >
                Open popover
              </button>
            </FlexItem>
            <FlexItem>
              <Popover
                {...args}
                trigger={<button>im the anchor</button>}
                position="bottom"
                alignment="start"
                interactionMode="controlled"
                isOpen={myIsOpen}
                distance={8}
                onUserDismiss={() => {
                  setMyIsOpen(false);
                }}
              >
                <div className="bgColor--white rounded--all elevation--2 padding--all">
                  <h3 className="type--head3">Look at me</h3>
                  <p>
                    <em>i am the popover</em>
                  </p>
                </div>
              </Popover>
            </FlexItem>
          </Flex>
        )}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'The "controlled" `interactionMode` follows the conventions of a [controlled component](https://reactjs.org/docs/forms.html#controlled-components), meaning the open state of the popover is exclusively controlled by the prop `isOpen`. To update the state of `isOpen` based on user interaction, you must use the `onUserDismiss` callback. The `onUserDismiss` function is invoked when 1. The user clicks the trigger element 2. The user presses `Escape` 3. the user clicks away from the popover. If you\'d like to disable scrolling of some element when a popover is open you can pass a ref of the scrolling element to the `disableScrollRef` prop.',
      },
    },
  },
};

export const PopoverWithinAPopover: StoryObj<PopoverProps> = {
  render: (args: PopoverProps): JSX.Element => (
    <Popover trigger={<button>Open popover</button>}>
      <div className="bgColor--white rounded--all elevation--2 padding--all">
        <div
          className="padding--y--s padding--x--m"
          style={{
            overflow: 'hidden',
          }}
        >
          <h3>Here is some content inside.</h3>
          <p>This popover is overflow hidden.</p>
          <p>
            Here is something else to
            <Popover
              {...args}
              trigger={<button className="margin--left--xs">click</button>}
              disablePortal={false}
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
  ),
  args: {
    disablePortal: true,
  },
};

export const CloseOnScroll: StoryObj<PopoverProps> = {
  render: (args: PopoverProps): JSX.Element => {
    const containerEl = useRef(null);
    return (
      <div
        ref={containerEl}
        style={{
          height: 200,
          border: '1px dashed red',
          overflow: 'scroll',
        }}
      >
        <div
          style={{
            height: 500,
            background: 'yellow',
          }}
        >
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
  },
  parameters: {
    docs: {
      description: {
        story:
          "If you'd like the ability to close the popover once the user scrolls some element, you can pass a ref of that element to the `closeOnScrollRef` prop. If you're not sure how to handle scrolling behavior with a popover, choose this option.",
      },
    },
  },
};

export const DisableScrolling: StoryObj<PopoverProps> = {
  render: (args: PopoverProps): JSX.Element => {
    const containerEl = useRef(null);
    return (
      <div
        ref={containerEl}
        style={{
          height: 200,
          border: '1px dashed red',
          overflow: 'scroll',
        }}
      >
        <div
          style={{
            height: 500,
            background: 'yellow',
          }}
        >
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
  },
  parameters: {
    docs: {
      description: {
        story:
          "If you'd like to disable scrolling of some element when a popover is open you can pass a ref of the scrolling element to the `disableScrollRef` prop.",
      },
    },
  },
};

export const WithDropdown = {
  render: (args: PopoverProps): JSX.Element => {
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

    return (
      <Popover
        {...args}
        trigger={
          <DropdownButton>
            {!isPopoverOpen ? 'Popover is closed' : 'Popover is open'}
          </DropdownButton>
        }
        position="bottom"
        alignment="start"
        distance={8}
        onOpen={() => {
          setIsPopoverOpen(true);
        }}
        onClose={() => {
          setIsPopoverOpen(false);
        }}
      >
        <div className="bgColor--white rounded--all elevation--2 padding--all">
          <h3 className="type--head3">Look at me</h3>
          <p>
            <em>i am the popover</em>
          </p>
        </div>
      </Popover>
    );
  },
};

export const TriggerWithoutRef = {
  render: (args: PopoverProps): JSX.Element => {
    return (
      <Popover
        {...args}
        trigger={<ComponentWithoutRef>{"I'm a trigger"}</ComponentWithoutRef>}
        position="bottom"
        alignment="start"
        distance={8}
      >
        <div className="bgColor--white rounded--all elevation--2 padding--all">
          <h3 className="type--head3">Look at me</h3>
          <p>
            <em>i am the popover</em>
          </p>
        </div>
      </Popover>
    );
  },
};

export default {
  component: Popover,
  title: 'Components/Popover',
  parameters: {
    docs: {
      description: {
        component:
          'Base popover component. Bring your own trigger and popover content. What this component does: Handle events according to `interactionMode` passed in & handle positioning of popover content What this component does **not** do: Content styling (the popover container is just a transparent div) & Arrows. They arent supported, but we can add them in the future. When setting `position` and `alignment` props, the positioning engine will prefer the props you provide, but may move the popover content to avoid edges of the viewport. This behavior is intentional.',
      },
    },
  },
};
