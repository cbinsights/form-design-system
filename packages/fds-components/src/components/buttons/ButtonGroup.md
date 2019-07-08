`<ButtonGroup />` wraps `<GroupButtons />` to provide the correct styling.


```js
import { useState, useEffect } from 'react';

const [activeIndex, setActiveIndex] = useState(0);

import ButtonGroup  from './ButtonGroup';
import GroupButton  from './GroupButton';

import FeedIcon from 'fds-icons/lib/react/FeedIcon';
import TableIcon from 'fds-icons/lib/react/TableIcon';
import MarketMapIcon from 'fds-icons/lib/react/MarketMapIcon';
import StarEmptyIcon from 'fds-icons/lib/react/StarEmptyIcon';

const handleClick = (index) => {
  setActiveIndex(index)
}

const custom = () => {
  alert('all unknown props will pass through')
}

const buttons = [
  { name: 'Feed', icon: FeedIcon},
  { name: 'Table', icon: TableIcon},
  { name: 'Map', icon: MarketMapIcon},
  { name: 'Suggested', icon: StarEmptyIcon},
];

<ButtonGroup>
  {buttons.map((button, index) => (
    <GroupButton 
      key={button.name}
      Icon={button.icon}
      onClick={() => handleClick(index)} 
      isActive={activeIndex === index}
    >
      {button.name}
    </GroupButton>
  ))}
  <GroupButton onClick={custom}>w/out icon</GroupButton>
</ButtonGroup>
```