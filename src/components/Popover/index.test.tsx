import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Popover from '.';

describe('Popover component', () => {
  it('tests that trigger text gets rendered', () => {
    render(
      <Popover trigger={<button>trigger</button>}>
        <p>popover content</p>
      </Popover>
    );
    expect(screen.queryByText('popover content')).toBeNull();
    expect(screen.getByText('trigger')).toBeInTheDocument();
  });

  it('tests that trigger and content text gets rendered', () => {
    render(
      <Popover isOpen trigger={<button>trigger</button>} interactionMode="controlled">
        <p>popover content</p>
      </Popover>
    );
    expect(screen.getByText('trigger')).toBeInTheDocument();
    expect(screen.getByText('popover content')).toBeInTheDocument();
  });

  it('tests that onUserDismiss is called only once when clicking outside popover', async () => {
    const onUserDismiss = jest.fn();
    render(
      <div>
        <Popover trigger={<button>trigger</button>} onUserDismiss={onUserDismiss}>
          <p>popover content</p>
        </Popover>
        <button>outside click</button>
      </div>
    );

    userEvent.click(screen.getByText('trigger'));
    userEvent.click(screen.getByText('popover content'));
    expect(screen.getByText('popover content')).toBeInTheDocument();
    userEvent.click(screen.getByText('outside click'));
    await waitFor(() => expect(screen.queryByText('popover content')).toBeNull());

    userEvent.click(screen.getByText('outside click'));
    userEvent.click(screen.getByText('outside click'));
    userEvent.click(screen.getByText('outside click'));
    expect(onUserDismiss).toHaveBeenCalledTimes(1);
  });

  it('tests that onUserDismiss is called only once when pressing escape key', async () => {
    const onUserDismiss = jest.fn();
    render(
      <Popover trigger={<button>trigger</button>} onUserDismiss={onUserDismiss}>
        <p>popover content</p>
      </Popover>
    );

    userEvent.click(screen.getByText('trigger'));
    expect(screen.getByText('popover content')).toBeInTheDocument();
    userEvent.type(document.body, '{esc}');
    await waitFor(() => expect(screen.queryByText('popover content')).toBeNull());

    userEvent.type(document.body, '{esc}');
    userEvent.type(document.body, '{esc}');
    userEvent.type(document.body, '{esc}');
    expect(onUserDismiss).toHaveBeenCalledTimes(1);
  });

  it('tests that the popover closes when the user scrolls if it is passed a closeOnScrollRef', async () => {
    const onUserDismiss = jest.fn();
    const refObject = { current: null };
    render(
      <div ref={refObject} style={{ height: 200, overflow: 'scroll' }}>
        <div style={{ height: 500 }}>
          <Popover
            trigger={<button>trigger</button>}
            onUserDismiss={onUserDismiss}
            closeOnScrollRef={refObject}
          >
            <div className="bgColor--white rounded--all elevation--2 padding--all">
              <h3 className="type--head3">Look at me</h3>
              <p>
                <em>i am the popover</em>
              </p>
            </div>
          </Popover>
        </div>
        scroll here
      </div>
    );

    userEvent.click(screen.getByText('trigger'));
    expect(screen.getByText('i am the popover')).toBeInTheDocument();
    fireEvent.scroll(screen.getByText('scroll here'), { target: { scrollTop: 100 } });
    expect(screen.queryByText('i am the popover')).not.toBeInTheDocument();
  });
});
