Hardcoded example without any local state

```js
import ButtonGroup  from './ButtonGroup';

import FeedIcon from 'fds-icons/lib/react/FeedIcon';
import TableIcon from 'fds-icons/lib/react/TableIcon';
import MarketMapIcon from 'fds-icons/lib/react/MarketMapIcon';
import StarEmptyIcon from 'fds-icons/lib/react/StarEmptyIcon';

// Yes, this even works for Link components
const Link = ({ to, children, ...rest }) => (
  <a href={to} {...rest}>{children}</a>
)

const buttons = [
  { label: 'Feed', Icon: FeedIcon, isActive: true, isActive: true, href: "#" },
  { label: 'Table', Icon: TableIcon, disabled: true, isActive: false,  },
  { label: 'Map', Icon: MarketMapIcon, isActive: false, as: Link, to: '#example' },
  { label: 'Suggested', Icon: StarEmptyIcon, onClick: () => console.log('more custom logic here'), isActive: false },
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

const [activeButton, setActiveButton] = useState('Feed');

const buttons = [
  { label: 'Feed', Icon: FeedIcon, isActive: activeButton === 'Feed' },
  { label: 'Table', Icon: TableIcon, disabled: true },
  { label: 'Map', Icon: MarketMapIcon, isActive: activeButton === 'Map' },
  { label: 'Suggested', Icon: StarEmptyIcon, onClick: () => console.log('more custom logic here'), isActive: activeButton === 'Suggested' },
];

<ButtonGroup buttons={buttons} onChange={setActiveButton} />
```