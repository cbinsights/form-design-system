# Components Ignore `classNames`

- **Status:** Accepted
- **Deciders:** Adam Detrick, Rey Wright
- **Date:** 2019.10.15

---

## Context and Problem Statement

Some components in FDS would suffer from accepting a `classNames` prop. `Flex`, for
example, would no longer guarantee it would work as a basic layout utility if we allowed
arbitrary style overrides on the component.

We want all components in FDS to follow a similar prop interface, so this decision should
apply to _all_ components.

## Considered Options

- Every component accepts a `className`
- No components accept a `className`

## Decision Outcome

Chosen option: "No components accept a `className`", because...

- It's too risky to introduce style overrides to low-level layout components.
- Style customization should happen via props, where the component can be responsible for
  style changes and variations.

### Positive Consequences <!-- optional -->

- Prop API consistency across all components.

### Negative Consequences <!-- optional -->

- Consumers of FDS components must handle the breaking change. Any custom `className`
  props on FDS components must be moved to a direct parent or direct child of the
  component.
