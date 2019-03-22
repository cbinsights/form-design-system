Controller for positioning, transition, and dismissal of toasts.

Timer starts immediately on mount.
**Edit the code example to re-render the `Toaster`**

```js
<Toaster
  toast={
    <Toast
      content={<p>Check out this <strong className="typemod--dark">toast</strong></p>}
      actionLabel="Action"
      onAction={() => {}}
      type="error"
    />
  }
/>
```

### Persisting a `Toast`

Use the `isAutoDismiss` prop of `Toast` to disable the dismiss timer.

```js
<Toaster
  toast={
    <Toast
      isAutoDismiss={false}
      content={<p>This is an <strong className="typemod--dark">important message</strong> that doesn't go away until a user dismisses it with the close button</p>}
      type="info"
    />
  }
/>
```
