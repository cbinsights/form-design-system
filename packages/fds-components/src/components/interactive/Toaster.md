Controller for positioning, transition, and dismissal of toasts.

Timer starts immediately on mount.
**Edit the code example to re-render the `Toaster`**

```js
initialState = { showToast: false };
<div>
  <button onClick={() => setState({ showToast: true })}>Show toast</button>
  {state.showToast && (
    <Toaster
      toast={
        <Toast
          content={<p>Check out this <strong className="typemod--dark">toast</strong></p>}
          actionLabel="Action"
          onAction={() => {}}
          onDismiss={() => {setState({ showToast: false })}}
          type="error"
        />
      }
    />
  )}
</div>
```

### New toasts replace existing toasts
Currently, `Toaster` only shows one toast at a time. If a new toast is rendered, it should immediately replace the existing toast.

```js
initialState = { showToast: false, firstToast: true };
<div>
  <button onClick={() => setState({ showToast: true })}>Show toast</button>
  <button onClick={() => setState({ firstToast: !state.firstToast })}>Change toast</button>
  <p>{state.firstToast ? 'success toast' : 'error toast'}</p>
  {state.showToast && state.firstToast && (
    <Toaster
      toast={
        <Toast
          content={<p>Check out this <strong className="typemod--dark">toast</strong></p>}
          actionLabel="Action"
          onAction={() => {}}
          onDismiss={() => {setState({ showToast: false })}}
          type="success"
        />
      }
    />
  )}
  {state.showToast && !state.firstToast && (
    <Toaster
      toast={
        <Toast
          content={<p>Check out this <strong className="typemod--dark">toast</strong></p>}
          actionLabel="Action"
          onAction={() => {}}
          onDismiss={() => {setState({ showToast: false })}}
          type="error"
        />
      }
    />
  )}
</div>
```

### Persisting a `Toast`

Use the `isAutoDismiss` prop of `Toast` to disable the dismiss timer.

```js
<div>
  <button onClick={() => setState({ showToast: true })}>Show toast</button>
  {state.showToast && (
    <Toaster
      toast={
        <Toast
          isAutoDismiss={false}
          onDismiss={() => {setState({ showToast: false })}}
          content={<p>This is an <strong className="typemod--dark">important message</strong> that doesn't go away until a user dismisses it with the close button</p>}
          type="info"
        />
      }
    />
  )}
</div>
```
