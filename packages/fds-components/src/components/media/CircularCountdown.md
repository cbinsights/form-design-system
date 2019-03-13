
## CircularCountdown
Renders a circular SVG path that counts down a given duration _or_ shows a given
amount of % progress.

### With `duration`
When `duration` is passed, the animation begines immediately on component mount.

```js
<CircularCountdown
  size="m"
  duration={1500}
/>
```

### With `progress`
When `progress` is passed, the circle reflects the percentage number provided.

```js
<CircularCountdown
  size="m"
  progress={42}
/>
```
