import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import Toaster from './Toaster';
import Toast from './Toast';
import README from './Toaster.md';

const ReusableToaster = (props) => {
  if (props.toastType === 'error') {
    return (
      <Toaster
        toast={
          <Toast
            content={
              <p>
                Check out this <strong className="typemod--dark">toast</strong>
              </p>
            }
            actionLabel="Action"
            onDismiss={() => {
              props.toggleToast(false);
            }}
            type="error"
          />
        }
      />
    );
  }
  if (props.toastType === 'success') {
    return (
      <Toaster
        toast={
          <Toast
            content={
              <p>
                Check out this <strong className="typemod--dark">toast</strong>
              </p>
            }
            actionLabel="Action"
            onDismiss={() => {
              props.toggleToast(false);
            }}
            type="success"
          />
        }
      />
    );
  }
  if (props.toastType === 'persisting') {
    return (
      <Toaster
        toast={
          <Toast
            isAutoDismiss={false}
            onDismiss={() => {
              props.toggleToast(false);
            }}
            content={
              <p>
                This is an <strong className="typemod--dark">important message</strong>{' '}
                that does not go away until a user dismisses it with the close button
              </p>
            }
            type="info"
          />
        }
      />
    );
  }
  return null;
};

ReusableToaster.propTypes = {
  toastType: PropTypes.string,
  toggleToast: PropTypes.func,
};

const ToasterStory = () => {
  const [isToastShowing, toggleToast] = useState(false);
  const niceSelect = select(
    'Select pre-build toast type',
    {
      Error: 'error',
      Success: 'success',
      Persisting: 'persisting',
    },
    'error'
  );
  return (
    <React.Fragment>
      <button onClick={() => toggleToast(!isToastShowing)}>
        {isToastShowing ? (
          <p>
            Hide toast <small>(abruptly)</small>
          </p>
        ) : (
          'Show Toast'
        )}
      </button>
      {isToastShowing && (
        <Toaster
          toast={<ReusableToaster toggleToast={toggleToast} toastType={niceSelect} />}
        />
      )}
    </React.Fragment>
  );
};

storiesOf('Interactive/Toaster', module)
  .addDecorator(withKnobs)
  .add('Knobs', () => <ToasterStory />, { notes: { markdown: README } });
