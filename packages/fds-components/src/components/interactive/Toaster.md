Controller for positioning, transition, and dismissal of toasts.

### With default dismiss delay
Timer starts immediately on mount.
**Edit the code example to re-render the `Toaster`**

```js
<Toaster
  toast={
    <Toast
      content={<p>Check out this <strong className="typemod--dark">toast</strong></p>}
      actionLabel="Action"
      onAction={() => {}}
      type="info"
    />
  }
/>
```

### With custom dismiss delay
This `Toaster` is set to dismiss the toast after `10000ms`. Timer starts immediately on mount.
**Edit the code example to re-render the `Toaster`**

```js
<Toaster
  delay={10000}
  toast={
    <Toast
      content={<p>Check out this <strong className="typemod--dark">toast</strong></p>}
      actionLabel="Action"
      onAction={() => {}}
      type="info"
    />
  }
/>
```
