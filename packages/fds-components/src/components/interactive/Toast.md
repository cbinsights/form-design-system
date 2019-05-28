### Info Toast

```js
<Toast
  content={<p>Check out this <strong className="typemod--dark">toast</strong></p>}
  actionLabel="Action"
  onAction={() => {}}
  type="info"
/>
```

### Warn Toast

```js
<Toast
  content={<p>You better <strong className="typemod--dark">watch out</strong></p>}
  actionLabel="run away"
  onAction={() => {}}
  type="warn"
/>
```

### Success Toast

```js
<Toast
  content={<p>You <strong className="typemod--dark">Did it!</strong></p>}
  type="success"
/>
```

### Error Toast

```js
<Toast
  content={<p>Failed to <strong className="typemod--dark">do a thing</strong></p>}
  actionLabel="Retry"
  onAction={() => {}}
  type="error"
/>
```

### Progress Toast (without progress specified)
By default, progress toasts show a continuous animation of a progress bar.

To make the progress bar reflect a specific amount of progress, use the `progress` prop (see below).

Most of the operations on `cbi-site` are not cancellable, so progress toasts do not render
a dismiss button to avoid misleading the user (dismissing a toast is not the same as
cancelling an operation).

```js
<Toast
  content={<p>Uploading a photo of your <strong className="typemod--dark">your cat</strong></p>}
  type="progress"
/>
```

### Progress Toast (with progress specified)

```js
<Toast
  content={<p><strong className="typemod--dark">42%</strong> complete uploading your cat photo</p>}
  progress={42}
  type="progress"
/>
```
