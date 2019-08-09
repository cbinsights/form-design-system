# Decisions about storybook

## TODO

- [x] (adam) pick readme/info plugin
- [x] (adam) set up notes addon
  - in branch `storybook/notes-tab`
- [ ] (adam) try addon-info for notes + prop tables
- [x] (rey) add knobs addon and try it on chips story
- [x] canvas positioning/spacing is consistent and good
- [x] set up global decorators globally instead of declaring them on each story (e.g. - `centered`)
- [ ] all components have stories
  - [ ] ButtonGroup.jsx
  - [x] Chip.jsx
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
├── (Variations - optional)
├── Illustrative example 1
└── Illustrative example 2, etc


