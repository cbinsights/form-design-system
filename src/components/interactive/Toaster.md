Controller for positioning, transition, and dismissal of toasts.

Timer starts immediately on mount.

**⚠️ Include only one `Toaster` component per page/container** to ensure that only one toast is rendered at a time.

### New toasts replace existing toasts
Currently, `Toaster` only shows one toast at a time. If a new toast is rendered, it should immediately replace the existing toast.

### Persisting a `Toast`
Use the `isAutoDismiss` prop of `Toast` to disable the dismiss timer.

