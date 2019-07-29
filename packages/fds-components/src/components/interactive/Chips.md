```js
import Chips from './Chips';

const chips = [
  { label: 'Lorem', href: "#lorem" },
  { label: 'Ipsum', href: "#ipsum", isActive: true, subtitle: 'active' },
  { label: 'Dolor', href: "#dolor", hasClose: true },
  { label: 'Sit', onClick: () => console.log('more custom logic here'), isActive: false },
];

// Yes, this even works for Link components
const Link = ({ to, children, ...rest }) => (
  <a href={to} {...rest}>{children}</a>
)

const chipsTwo = [
  { label: 'Lorem Ipsum' },
  { label: 'Dolor Sit' },
  { rootEl: Link, label: 'hey', to: '#google' },
  { label: 'Sit Amet' },
  { label: 'Consectetur', onClick: () => console.log('more custom logic here') },
];

<div>
  <Chips list={chips} size="small" />
  <br />
  <Chips list={chips} theme="blue" size="small" />
  <br /><br />
  <Chips list={chips} />
  <br />
  <Chips list={chips} theme="blue"  />
  <br /><br />
  <Chips list={chipsTwo} hasClose={true} theme="outline"  />
  <br />
</div>
```