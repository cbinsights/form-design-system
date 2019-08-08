```js
import Chip from './Chip'

const chips = [
  { label: 'Lorem', href: "#lorem" },
  { label: 'Ipsum', href: "#ipsum", isActive: true, subtitle: 'active' },
  { label: 'Dolor', href: "#dolor", hasClose: true },
  { label: 'Sit', onClick: () => console.log('custom logic here'), isActive: false },
];

// Yes, this even works for Link components
const Link = ({ to, children, ...rest }) => (
  <a href={to} {...rest}>{children}</a>
)

const chipsTwo = [
  { label: 'Lorem Ipsum' },
  { label: 'Dolor Sit' },
  { as: Link, label: 'hey', to: '#google' },
  { label: 'Sit Amet' },
  { label: 'Consectetur', onClick: () => console.log('custom logic here') },
];

<div>
  {chips.map(chip => <Chip {...chip} key={chip.label} size="small" />)}
  <br />
  {chips.map(chip => <Chip {...chip} key={chip.label} theme="blue" size="small" />)}
  <br /><br />
  {chips.map(chip => <Chip {...chip} key={chip.label} />)}
  <br />
  {chips.map(chip => <Chip {...chip} key={chip.label} theme="blue" />)}
  <br /><br />
  {chipsTwo.map(chip => <Chip {...chip} key={chip.label} theme="outline" hasClose={true} />)}
  <br />
</div>
```