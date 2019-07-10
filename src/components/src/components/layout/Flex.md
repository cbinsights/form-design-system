
### Flex direction
`Flex` renders in row orientation by default. Use the `direction` prop to change flex direction. To reverse the row or column, use the boolean prop `reverse`.

```js
import { Fragment } from 'react';
import FlexItem from './FlexItem';
<Fragment>
  <div style={{ marginTop: '1rem' }}>
    <p><strong>row</strong></p>
    <Flex direction="row" className="debug--boxModel">
      <FlexItem>
        <img src="https://place-hold.it/48x24/a02385/fff&text=item1" />
      </FlexItem>
      <FlexItem>
        <img src="https://place-hold.it/48x24/a02385/fff&text=item2" />
      </FlexItem>
      <FlexItem>
        <img src="https://place-hold.it/48x24/a02385/fff&text=item3" />
      </FlexItem>
    </Flex>
  </div>

  <div style={{ marginTop: '1rem' }}>
    <p><strong>row</strong> with <strong>reverse</strong></p>
    <Flex direction="row" reverse className="debug--boxModel">
      <FlexItem>
        <img src="https://place-hold.it/48x24/a02385/fff&text=item1" />
      </FlexItem>
      <FlexItem>
        <img src="https://place-hold.it/48x24/a02385/fff&text=item2" />
      </FlexItem>
      <FlexItem>
        <img src="https://place-hold.it/48x24/a02385/fff&text=item3" />
      </FlexItem>
    </Flex>
  </div>

  <div style={{ height: '400px', marginTop: '1rem' }}>
    <p><strong>column</strong></p>
    <Flex direction="column" className="debug--boxModel">
      <FlexItem>
        <img src="https://place-hold.it/48x24/a02385/fff&text=item1" />
      </FlexItem>
      <FlexItem>
        <img src="https://place-hold.it/48x24/a02385/fff&text=item2" />
      </FlexItem>
      <FlexItem>
        <img src="https://place-hold.it/48x24/a02385/fff&text=item3" />
      </FlexItem>
    </Flex>
  </div>
</Fragment>
```

### Flex alignment/justification
Following the flexbox spec, `align` controls cross-axis alignment and `justify` controls main axis alignment. In this example, both `align` and `justify` are set to `end`. The child
`FlexItem` components here are set to `shrink` to their content width.

_See `FlexItem` documentation below for more information on the `shrink` prop_

```js
import FlexItem from './FlexItem';
<Flex align="end" justify="end" className="debug--boxModel">
  <FlexItem shrink>
    <img src="https://place-hold.it/48x24/a02385/fff&text=item1" />
  </FlexItem>
  <FlexItem shrink>
    <img src="https://place-hold.it/48x64/a02385/fff&text=item2" />
  </FlexItem>
  <FlexItem shrink>
    <img src="https://place-hold.it/48x24/a02385/fff&text=item3" />
  </FlexItem>
  <FlexItem shrink>
    <img src="https://place-hold.it/48x64/a02385/fff&text=item4" />
  </FlexItem>
</Flex>
```
