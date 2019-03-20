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
      type="progress"
    />
  }
/>
```
