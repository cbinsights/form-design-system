import React, { useState } from 'react';
import { v4 } from 'uuid';
import { Toaster, ToasterProps } from 'components/Toaster';
import Toast from './Toast';
import { StoryObj } from '@storybook/react';
export const Primary: StoryObj<ToasterProps> = {
  render: (args: ToasterProps): JSX.Element => {
    const [isToastShowing, setIsToastShowing] = useState(false);
    return (
      <>
        <button onClick={() => setIsToastShowing(!isToastShowing)}>
          {isToastShowing ? 'Hide Toaster' : 'Show Toaster'}
        </button>
        <Toaster
          {...args}
          isOpen={isToastShowing}
          toastInstance={{
            content: 'hey',
            type: 'info',
            progress: 42,
            dismissOnAction: true,
            actionLabel: 'Action',
            onDismiss: () => setIsToastShowing(false),
          }}
        />
      </>
    );
  },
};

export const Playground: StoryObj<ToasterProps> = {
  render: (args: ToasterProps): JSX.Element => {
    const defaults: ToasterProps = {
      id: v4(),
      isOpen: false,
      isAutoDismiss: true,
      toastInstance: {
        content: null,
      },
    };
    const [params, setParams] = useState(defaults);

    const dismissToast = () => {
      setParams({ ...params, isOpen: false });
    };

    const randomNum = () => Math.floor(Math.random() * 100);

    const { id, isOpen, toastInstance, isAutoDismiss } = params;
    const actionLabel = toastInstance?.actionLabel;
    return (
      <div className="padding--all">
        <h4>Core:</h4>
        <button onClick={() => setParams({ ...params, isOpen: true })}>Open Toast</button>
        <button onClick={() => setParams({ ...params, isOpen: false })}>
          Close Toast
        </button>
        <button onClick={() => setParams({ ...params, isAutoDismiss: !isAutoDismiss })}>
          Toggle isAutoDismiss {isAutoDismiss ? 'off' : 'on'}
        </button>
        <button onClick={() => setParams({ ...params, id: v4() })}>New ID</button>
        <button onClick={() => setParams({ ...defaults })}>Reset all</button>
        <br />
        <br />
        <h4>Types:</h4>
        <button
          onClick={() =>
            setParams({
              ...params,
              toastInstance: { ...params.toastInstance, type: 'info' },
            })
          }
        >
          info
        </button>
        <button
          onClick={() =>
            setParams({
              ...params,
              toastInstance: { ...params.toastInstance, type: 'warn' },
            })
          }
        >
          warn
        </button>
        <button
          onClick={() =>
            setParams({
              ...params,
              toastInstance: { ...params.toastInstance, type: 'error' },
            })
          }
        >
          error
        </button>
        <button
          onClick={() =>
            setParams({
              ...params,
              toastInstance: { ...params.toastInstance, type: 'success' },
            })
          }
        >
          success
        </button>
        <button
          onClick={() =>
            setParams({
              ...params,
              toastInstance: { ...params.toastInstance, type: 'progress' },
            })
          }
        >
          progress
        </button>
        <button
          onClick={() =>
            setParams({
              ...params,
              toastInstance: { ...params.toastInstance, progress: randomNum() },
            })
          }
        >
          Add random progress
        </button>
        <button
          onClick={() =>
            setParams({
              ...params,
              toastInstance: { ...params.toastInstance, progress: undefined },
            })
          }
        >
          Remove progress
        </button>
        <br />
        <br />
        <h4>Modify Content:</h4>
        <button
          onClick={() =>
            setParams({
              ...params,
              toastInstance: {
                ...params.toastInstance,
                actionLabel: actionLabel === 'Hello' ? 'World' : 'Hello',
              },
            })
          }
        >
          Change Action Label
        </button>
        <button
          onClick={() =>
            setParams({
              ...params,
              toastInstance: {
                ...params.toastInstance,
                content: 'hello world',
              },
            })
          }
        >
          Add content
        </button>
        <button
          onClick={() =>
            setParams({
              ...params,
              toastInstance: {
                ...params.toastInstance,
                content: <b>hello world</b>,
              },
            })
          }
        >
          Add HTML content
        </button>
        <button
          onClick={() =>
            setParams({
              ...params,
              toastInstance: { ...params.toastInstance, content: null },
            })
          }
        >
          Remove content
        </button>
        <button
          onClick={() =>
            setParams({
              ...params,
              toastInstance: {
                ...params.toastInstance,
                actionLabel: undefined,
              },
            })
          }
        >
          Remove Action Label
        </button>
        <br />
        <br />
        <h4>Example usages:</h4>
        <button
          onClick={() =>
            setParams({
              ...params,
              toastInstance: {
                ...params.toastInstance,
                type: 'error',
                content: 'New ID? Yes!',
              },
              id: v4(),
              isOpen: true,
            })
          }
        >
          Error Toast (animate)
        </button>
        <button
          onClick={() =>
            setParams({
              ...params,
              id: v4(),
              isOpen: true,
              toastInstance: {
                ...params.toastInstance,
                content: 'New ID? Yes!',
                type: 'info',
              },
            })
          }
        >
          Info Toast (animate)
        </button>
        <button
          onClick={() =>
            setParams({
              ...params,
              id,
              isOpen: true,
              toastInstance: {
                ...params.toastInstance,
                content: 'New ID? No.',
                type: 'error',
              },
            })
          }
        >
          Error Toast (do not animate)
        </button>
        <br />
        <br />
        <b>NOTE: this is state is EXTERNAL to toaster and is being passed in</b>
        <pre>{JSON.stringify(params, null, 1)}</pre>
        <Toaster
          {...args}
          id={id}
          isOpen={isOpen}
          isAutoDismiss={isAutoDismiss}
          toastInstance={{ ...toastInstance, onDismiss: dismissToast }}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'This is a playground where you can enable certain functionality and see how Toaster reacts in real time, while being able to visualize the exact prop structure to generate it.',
      },
    },
  },
};

export const Variations: StoryObj<ToasterProps> = {
  render: (args: ToasterProps): JSX.Element => (
    <React.Fragment>
      <Toast
        {...args}
        content={
          <p>
            Check out this <strong className="color--heading">toast</strong>
          </p>
        }
        actionLabel="Action"
        onAction={() => {}}
        type="info"
      />
      <br />
      <Toast
        {...args}
        content={
          <p>
            You better <strong className="color--heading">watch out</strong>
          </p>
        }
        actionLabel="run away"
        onAction={() => {}}
        type="warn"
      />
      <br />
      <Toast
        {...args}
        content={
          <p>
            You <strong className="color--heading">Did it!</strong>
          </p>
        }
        type="success"
      />
      <br />
      <Toast
        {...args}
        content={
          <p>
            Failed to <strong className="color--heading">do a thing</strong>
          </p>
        }
        actionLabel="Retry"
        onAction={() => {}}
        type="error"
      />
      <br />
      <Toast
        {...args}
        content={
          <p>
            Uploading a photo of your <strong className="color--heading">your cat</strong>
          </p>
        }
        type="progress"
      />
      <br />
      <Toast
        {...args}
        content={
          <p>
            <strong className="color--heading">42%</strong> complete uploading your cat
            photo
          </p>
        }
        progress={42}
        type="progress"
      />
    </React.Fragment>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This is merely to give you a better visual idea of all the variations.',
      },
      source: {
        code: 'Hidden. This is merely to give you a visual idea of the themes available.',
      },
    },
  },
};

export default {
  component: Toaster,
  subcomponents: {
    Toast,
  },
  title: 'Components/Toaster',
  parameters: {
    componentSubtitle: 'Displays Toast alerts',
    docs: {
      description: {
        component:
          'Important notes: - **⚠️ Import only one `Toaster` component per application**. - Pass in a brand new `id` (with optional props) if you would like to animate a new toast in. - Passing in new props without changing the id will not retrigger the animation',
      },
    },
  },
};
