Hardcoded example without any local state

```js
import { useState } from 'react';

import ButtonGroup  from './ButtonGroup';

import FeedIcon from 'fds-icons/lib/react/FeedIcon';
import TableIcon from 'fds-icons/lib/react/TableIcon';
import MarketMapIcon from 'fds-icons/lib/react/MarketMapIcon';
import StarEmptyIcon from 'fds-icons/lib/react/StarEmptyIcon';

const buttons = [
  { value: 'Feed', icon: FeedIcon, isActive: true, isActive: true },
  { value: 'Table', icon: TableIcon, disabled: true, isActive: false },
  { value: 'Map', icon: MarketMapIcon, isActive: false },
  { value: 'Suggested', icon: StarEmptyIcon, onClick: () => console.log('more custom logic here'), isActive: false },
];

<ButtonGroup buttons={buttons} onChange={() => console.log('custom logic here')} />
```

Example wired up to local state

```js
import { useState } from 'react';

import ButtonGroup  from './ButtonGroup';

import FeedIcon from 'fds-icons/lib/react/FeedIcon';
import TableIcon from 'fds-icons/lib/react/TableIcon';
import MarketMapIcon from 'fds-icons/lib/react/MarketMapIcon';
import StarEmptyIcon from 'fds-icons/lib/react/StarEmptyIcon';

const [activeValue, setActiveValue] = useState('Feed');

const buttons = [
  { value: 'Feed', icon: FeedIcon, isActive: activeValue === 'Feed' },
  { value: 'Table', icon: TableIcon, disabled: true },
  { value: 'Map', icon: MarketMapIcon, isActive: activeValue === 'Map' },
  { value: 'Suggested', icon: StarEmptyIcon, onClick: () => console.log('more custom logic here'), isActive: activeValue === 'Suggested' },
];

<ButtonGroup buttons={buttons} onChange={setActiveValue} />
```