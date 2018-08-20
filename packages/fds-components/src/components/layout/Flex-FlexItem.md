Here is my very _c o o l_ example.

#### Basic example

```js
<Flex>
  <FlexItem shrink>
    <img src="https://via.placeholder.com/80/a02385/ffffff" />
  </FlexItem>
  <FlexItem>
    <p>The first <code>FlexItem</code> will shrink to content width.</p>
    <p><em>This item</em> grows to fill remaining width of parent</p>
  </FlexItem>
</Flex>
```

#### With `reverse` prop
This also injects some props into the example wrapper i guess

```js { "props": { "className": "debug" } } 
<Flex reverse>
  <FlexItem shrink>
    <img src="https://via.placeholder.com/80/a02385/ffffff" />
  </FlexItem>
  <FlexItem>
    <p>The first <code>FlexItem</code> will shrink to content width.</p>
    <p><em>This item</em> grows to fill remaining width of parent</p>
  </FlexItem>
</Flex>
```

#### No editor

```jsx noeditor
<Flex>
  <FlexItem shrink>
    <img src="https://via.placeholder.com/80/a02385/ffffff" />
  </FlexItem>
  <FlexItem>
    <p>The first <code>FlexItem</code> will shrink to content width.</p>
    <p><em>This item</em> grows to fill remaining width of parent</p>
  </FlexItem>
</Flex>
```

#### Source only

```jsx static
<Flex>
  <FlexItem shrink>
    <img src="https://via.placeholder.com/80/a02385/ffffff" />
  </FlexItem>
  <FlexItem>
    <p>The first <code>FlexItem</code> will shrink to content width.</p>
    <p><em>This item</em> grows to fill remaining width of parent</p>
  </FlexItem>
</Flex>
```
