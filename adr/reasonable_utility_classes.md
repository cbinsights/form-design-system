# When to build a utility class

- **Status:** Accepted
- **Deciders:** Adam Detrick, Rey Wright
- **Date:** 2020.02.04

---

## Context and Problem Statement

We take a utility class based approach (aka "functional CSS" aka "expressive CSS") in FDS.
We have a lot of utility classes that do only one thing (e.g. `display--none`).

At one point, we discussed adding a `position--relative` class, which led us to a key question
we needed to clarify:

> When does it make sense to add a utility class?

## Considered Options

- Add a utility class for _any_ property/value combination as needed
- Only add utility classes that are useful on their own
  - `position-relative`, for example, doesn't accomplish much on its own without adding more CSS rules to the element or its children.

## Decision Outcome

Chosen option: "Only add utility classes that are useful on their own"

### Example of a utility class that is not "useful on its own"

```html
<div class="position--relative">
  <div>
    If this element is absolutely positioned, we need additional ad-hoc CSS rules beyond
    what the utility class above provides. `position--relative` is not helpful on its own.
  </div>
</div>
```

### Example of a utility class that is "useful on its own"

```html
<div class="color--red">
  <div>
    This text will be red. No additional CSS rules are needed for the above utility class
    to be useful.
  </div>
</div>
```

## Pros and Cons of the Options

### Add a utility class for _any_ property/value combination as needed

- Good, because it's a rule that can be universally applied without any additional decision making
- Bad, because we'd eventually end up with a large number of functionally useless classes

### Only add utility classes that are useful on their own

- Good, because utility classes will only be introduced when they're useful as a single unit
- Good, because our utility class API surface area will remain smaller
- Bad, because it takes a judgement call on each candidate for a utility class
