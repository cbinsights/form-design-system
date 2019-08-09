import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import Toaster from './Toaster';
import Toast from './Toast';
// import README from './Toast.md';

const Reusable = ({ render, ...props }) => (
  <React.Fragment>{render(props)}</React.Fragment>
);

Reusable.propTypes = {
  render: PropTypes.node,
};

storiesOf('Interactive/Toaster', module)
  .addDecorator(withKnobs)
  .add('Knobs', () => {
    const [isToastShowing, toggleToast] = useState(false);
    const niceSelect = select(
      'Select pre-build toast type',
      {
        Error: 'error',
        Warning: 'warning',
      },
      'error'
    );
    return (
      <React.Fragment>
        <button onClick={() => toggleToast(true)}>Show toast</button>
        {isToastShowing && (
          <Toaster
            toast={
              <Reusable
                toastType={niceSelect}
                toggleToast={toggleToast}
                render={(props) => {
                  if (props.toastType === 'error') {
                    return (
                      <Toast
                        content={
                          <p>
                            Check out this{' '}
                            <strong className="typemod--dark">toast</strong>
                          </p>
                        }
                        actionLabel="Action"
                        onAction={() => {}}
                        onDismiss={() => {
                          props.toggleToast(false);
                        }}
                        type="error"
                      />
                    );
                  }
                  return <p>hey</p>;
                }}
              />
            }
          />
        )}
      </React.Fragment>
    );
  })
  .add('Variations', () => (
    <React.Fragment>
      <Toast
        content={
          <p>
            Check out this <strong className="typemod--dark">toast</strong>
          </p>
        }
        actionLabel="Action"
        onAction={() => {}}
        type="info"
      />
      <br />
      <Toast
        content={
          <p>
            You better <strong className="typemod--dark">watch out</strong>
          </p>
        }
        actionLabel="run away"
        onAction={() => {}}
        type="warn"
      />
      <br />
      <Toast
        content={
          <p>
            You <strong className="typemod--dark">Did it!</strong>
          </p>
        }
        type="success"
      />
      <br />
      <Toast
        content={
          <p>
            Failed to <strong className="typemod--dark">do a thing</strong>
          </p>
        }
        actionLabel="Retry"
        onAction={() => {}}
        type="error"
      />
      <br />
      <Toast
        content={
          <p>
            Uploading a photo of your <strong className="typemod--dark">your cat</strong>
          </p>
        }
        type="progress"
      />
      <br />
      <Toast
        content={
          <p>
            <strong className="typemod--dark">42%</strong> complete uploading your cat
            photo
          </p>
        }
        progress={42}
        type="progress"
      />
    </React.Fragment>
  ));
