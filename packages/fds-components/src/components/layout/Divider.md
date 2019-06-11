Content divider with optional label and action button areas.

### Basic divider

```js
<div
  className="padding--all"
  style={{ outline: '1px dotted red', width: '320px',}}
>
  <p>Some random content</p>
  <Divider />
  <p>This content is <em>cool</em></p>
</div>
```

### Divider with label

```js
<div
  className="padding--all"
  style={{ outline: '1px dotted red', width: '320px',}}
>
  <p>Some random content</p>
  <Divider label="Cool content" />
  <p>This content is <em>cool</em></p>
</div>
```

### Divider with action button

```js
<div
  className="padding--all"
  style={{ outline: '1px dotted red', width: '320px',}}
>
  <h3 className="typeset--head4">Filter your results</h3>

  <Divider
    label="Exclude items"
    actionButton={<button className="resetButton">Clear selection</button>}
  />
  <div className="typemod--small">
    <label htmlFor="one"><input type="checkbox" id="one" checked /> Option one</label>
    <label htmlFor="two"><input type="checkbox" id="two" /> Option two</label>
    <label htmlFor="three"><input type="checkbox" id="three" checked /> Option three</label>
  </div>
</div>
```
