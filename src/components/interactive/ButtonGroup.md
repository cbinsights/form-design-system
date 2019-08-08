Hardcoded example without any local state

```js
import ButtonGroup  from './ButtonGroup';

import FeedIcon from '../../../lib/icons/react/FeedIcon';
import TableIcon from '../../../lib/icons/react/TableIcon';
import MarketMapIcon from '../../../lib/icons/react/MarketMapIcon';
import StarEmptyIcon from '../../../lib/icons/react/StarEmptyIcon';

import { Link } from '../util/react-router';

const buttons = [
  { label: 'Feed', Icon: FeedIcon, isActive: true, isActive: true, href: "#" },
  { label: 'Table', Icon: TableIcon, disabled: true, isActive: false,  },
  { label: 'Map', Icon: MarketMapIcon, isActive: false, Link: Link, to: '#example' },
  { label: 'Suggested', Icon: StarEmptyIcon, onClick: () => console.log('more custom logic here'), isActive: false },
];

<ButtonGroup buttons={buttons} onChange={() => console.log('custom logic here')} />
```

Example wired up to local state

```js
import { useState } from 'react';

import ButtonGroup  from './ButtonGroup';

import FeedIcon from '../../../lib/icons/react/FeedIcon';
import TableIcon from '../../../lib/icons/react/TableIcon';
import MarketMapIcon from '../../../lib/icons/react/MarketMapIcon';
import StarEmptyIcon from '../../../lib/icons/react/StarEmptyIcon';

const [activeButton, setActiveButton] = useState('Feed');

const buttons = [
  { label: 'Feed', Icon: FeedIcon, isActive: activeButton === 'Feed' },
  { label: 'Table', Icon: TableIcon, disabled: true },
  { label: 'Map', Icon: MarketMapIcon, isActive: activeButton === 'Map' },
  { label: 'Suggested', Icon: StarEmptyIcon, onClick: () => console.log('more custom logic here'), isActive: activeButton === 'Suggested' },
];

<ButtonGroup buttons={buttons} onChange={setActiveButton} />
```
