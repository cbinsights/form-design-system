# Only spread props on "form-like" components

- **Status:** Accepted
- **Deciders:** Adam Detrick, Rey Wright
- **Date:** 2019.11.1

---

## Context and Problem Statement

When should we spread props in components?

**Example**

```
const Component = ({ foo, bar, ...restProps}) => {
  <element foo={foo} bar={bar} {...restProps} />
}
```

If we spread rest props on every component, we create an opportunity for developers to
customize components via code instead of explicitly defined props.

For components that render attribute-heavy DOM elements (like `button`), it may make
sense to spread props. For more complex components, spreading props could lead to bugs,
side effects, and unnecessary customization.

## Considered Options

- Every component spreads rest props
- No components spread rest props
- Only components that render attribute-heavy DOM elements spread rest props

## Decision Outcome

Chosen option: "Only components that render attribute-heavy DOM elements spread rest props", because...

- Compromise that allows us to create the right prop interface for the job of each component
- Components that conceptually map to attribute-heavy DOM elements (i.e. html form elements)
  will allow spread props to keep the explicitly defined props easier to reason about.
- Components that **do not** conceptually map to attribute-heavy DOM elements (e.g. `Toast`)
  will be able to continue to define an explicit prop interface instead of spreading props.

### Negative Consequences <!-- optional -->

- Not all components will behave the same way.
- **We must document when a component supports spread props**.
