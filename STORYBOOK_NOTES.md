# Decisions about storybook

## TODO

- [x] What should we call knobs?
  - api docs? intro? "K n' D"?
  - answer from Rey: we should them knobs for now IMO
- [x] (adam) pick readme/info plugin
- [x] (adam) set up notes addon
- [x] (adam) try addon-info for notes + prop tables
- [x] (rey) add knobs addon and try it on chips story
- [x] canvas positioning/spacing is consistent and good
- [x] set up global decorators globally instead of declaring them on each story (e.g. - `centered`)
- [ ] all components have stories
  - [x] ButtonGroup.jsx
    - [x] knobs story
    - [x] variations story
    - [-] example stories (optional)
    - [x] readme markdown
    - [ ] add emoji icons for knobs version
  - [x] Chip.jsx
    - [x] knobs story
    - [x] variations story
    - [-] example stories (optional)
    - [x] readme markdown
  - [x] MenuButton.jsx
    - [x] knobs story
    - [x] variations story
    - [-] example stories (optional)
    - [x] readme markdown
  - [x] Toast.jsx
    - [x] knobs story
    - [x] variations story
    - [-] example stories (optional)
    - [x] readme markdown
  - [ ] Toaster.jsx
    - [ ] knobs story
    - [ ] variations story
    - [ ] example stories (optional)
    - [ ] readme markdown
  - [x] Flex.jsx
    - [x] knobs story
    - [x] example stories (optional)
    - [x] readme markdown
  - [x] FlexItem.jsx
    - [x] knobs story
    - [x] readme markdown
  - [x] AvatarRow.jsx
    - [x] knobs story
    - [x] variations story
    - [-] example stories (optional)
    - [x] readme markdown
  - [x] CountdownButton.jsx
    - [x] knobs story
    - [x] variations story
    - [-] example stories (optional)
    - [x] readme markdown
  - [x] Updatable.jsx
    - [x] knobs story
    - [x] variations story
    - [-] example stories (optional)
    - [x] readme markdown

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

-------

## Launch Plan

There are a few things to do before this is production-ready.

- [x] (adam) Remove vestiges of styleguidist
- [x] (adam) figure out what to do with the debug css hacked into `.storybook/preview-head.html`
- [x] set up static storybook build (output to `docs/fds-components`)
- [x] update root README with new yarn commands
- [ ] make sure prettier is running on `.stories.js`
- [ ] change title in upper left? Add a link back to our github or base documentation site?

