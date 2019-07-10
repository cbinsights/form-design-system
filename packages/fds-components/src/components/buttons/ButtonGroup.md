```js
import { useState } from 'react';

import ButtonGroup  from './ButtonGroup';

import FeedIcon from 'fds-icons/lib/react/FeedIcon';
import TableIcon from 'fds-icons/lib/react/TableIcon';
import MarketMapIcon from 'fds-icons/lib/react/MarketMapIcon';
import StarEmptyIcon from 'fds-icons/lib/react/StarEmptyIcon';

const custom = () => {
  alert('all unknown props will pass through')
}

const buttons = [
  { value: 'Feed', icon: FeedIcon},
  { value: 'Table', icon: TableIcon},
  { value: 'Map', icon: MarketMapIcon},
  { value: 'Suggested', icon: StarEmptyIcon, onClick: custom },
];

const [firstButton] = buttons;

const [activeValue, setActiveValue] = useState(firstButton.value);

<ButtonGroup buttons={buttons} activeValue={activeValue} onChange={setActiveValue} />
```