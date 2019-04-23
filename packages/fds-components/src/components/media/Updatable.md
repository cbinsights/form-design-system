
### Updatable
Add an updates indicator to any component.

#### With a count

```js
<Updatable
  component={<div className="media--xl" style={{ border: '1px solid blue' }}>just a div, but could be anything</div>}
  message="42"
/>
```

#### With an arbitrary message

```js
<Updatable
  component={<div className="media--xl" style={{ border: '1px solid blue' }}>just a div, but could be anything</div>}
  message="OMG NEW LOL"
/>
```

#### With an icon

```js
import WorkFasterIcon from 'fds-icons/lib/react/WorkFasterIcon';
<Updatable
  component={<div className="media--xl" style={{ border: '1px solid blue' }}>just a div, but could be anything</div>}
  message={<WorkFasterIcon size="xs" color="#ffffff" />}
/>
```
