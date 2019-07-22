Wraps children in an "updatable" container with a `message` displayed as a
notification-style red bubble.

#### With a count

```js
<Updatable message="42">
  <div className="media--xl" style={{ border: '1px solid blue' }}>just a div, but could be anything</div>
</Updatable>
```

#### With an arbitrary message

```js
<Updatable message="OMG NEW LOL">
  <div className="media--xl" style={{ border: '1px solid blue' }}>just a div, but could be anything</div>
</Updatable>
```

#### With an icon

```js
import WorkFasterIcon from 'fds-icons/lib/react/WorkFasterIcon';

<Updatable message={<WorkFasterIcon size="xs" color="#ffffff" />}>
  <div className="media--xl" style={{ border: '1px solid blue' }}>just a div, but could be anything</div>
</Updatable>
```
