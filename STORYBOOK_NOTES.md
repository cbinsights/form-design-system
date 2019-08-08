# Decisions about storybook

## TODO

- [ ] (adam) pick readme/info plugin
- [ ] (rey) add knobs addon and try it on chips story
- [ ] canvas positioning/spacing is consistent and good
- [ ] all components have stories
  - [ ] ButtonGroup.jsx
  - [ ] Chip.jsx
  - [ ] GroupButton.jsx
  - [ ] MenuButton.jsx
  - [ ] Toast.jsx
  - [ ] Toaster.jsx
  - [ ] Flex.jsx
  - [ ] FlexItem.jsx
  - [ ] AvatarRow.jsx
  - [ ] CountdownButton.jsx
  - [ ] Updatable.jsx

## MVP
- all components have stories
- all components have a knob story

## Addons

- knobs
- storybook-readme
- chapters? Organize by layout, media, etc.?

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


