# Decisions about storybook

## TODO

- [ ] (adam) pick readme/info plugin
- [ ] (rey) add knobs addon and try it on chips story
- [ ] canvas positioning/spacing is consistent and good

```
── interactive
│   ├── ButtonGroup.jsx
│   ├── ButtonGroup.md
│   ├── Chip.jsx
│   ├── Chip.md
│   ├── GroupButton.jsx
│   ├── MenuButton.jsx
│   ├── MenuButton.md
│   ├── Toast.jsx
│   ├── Toast.md
│   ├── Toaster.jsx
│   ├── Toaster.md
│   ├── __snapshots__
│   ├── buttonGroup.test.js
│   ├── chip.stories.js
│   ├── chip.test.js
│   ├── groupButton.test.js
│   ├── index.md
│   ├── menuButton.test.js
│   ├── toast.test.js
│   └── toaster.test.js
├── layout
│   ├── Flex.jsx
│   ├── Flex.md
│   ├── FlexItem.jsx
│   ├── FlexItem.md
│   ├── __snapshots__
│   ├── flex.test.js
│   ├── flexItem.test.js
│   └── index.md
├── media
│   ├── AvatarRow.jsx
│   ├── AvatarRow.md
│   ├── CountdownButton.jsx
│   ├── CountdownButton.md
│   ├── Updatable.jsx
│   ├── Updatable.md
│   ├── __snapshots__
│   ├── avatarRow.test.js
│   ├── countdownButton.test.js
│   ├── index.md
│   └── updatable.test.js
```

## MVP
- all components have stories
- all components have a knob story

## Addons

- knobs
- storybook-addon-notes OR community readme plugin

## Story organization

Every component should have a "knobs" story that appears first in the list.
Every prop in the "knobs" story should have a knob.

"Illustrative examples" should be limited to 2-3 examples based on our best judgement on
what is important to demonstrate about a given component.

MyComponent
├── Knobs
├── (Matrix - optional)
├── Illustrative example 1
└── Illustrative example 2, etc


