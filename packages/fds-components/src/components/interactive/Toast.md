### Info Toast

```js
<Toast
  content={<p className="typemod--light">Check out this <strong className="typemod--dark">cool toast</strong></p>}
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
  content={<p>You made a <strong className="typemod--dark">huge mistake</strong></p>}
  actionLabel="Try again"
  onAction={() => {}}
  type="error"
/>
```

### Progress Toast (without progress specified)
By default, progress toasts show a continuous animation of a progress bar.
To make the progress bar reflect a specific amount of progress, use the `progress` prop (see below).

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
