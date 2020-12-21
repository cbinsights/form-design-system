# Utilize relative spacing through tshirt sizes

- **Status:** Accepted
- **Deciders:** Rey Wright, Adam Detrick
- **Date:** 2020-08-28

---

## Context and Problem Statement

We'd like to change the spacing system to something more generic.

## Decision Drivers <!-- optional -->

The current pattern of relative spacing (half, double) that's based on a default, is deficient in a couple of ways:

- We'd like to add additional spacing values that don't map cleanly to these words. If default spacing is 16, there's no clean word to describe the jump to 24.
- The current model makes it impossible to ever cleanly change the default value. Given the model of default, half, and double, if we decided to make double the new default, the current default would have to be renamed to half, and half would need to be renamed to half/half.

## Considered Options

- Encode the value directly in the class. padding-16 / margin-x-32
- Use generic numbering system (padding-2 / margin-x-4)
- Use generic tshirt system (padding-s / margin-x-l)

## Decision Outcome

Generic tshirt system was chosen over the other options.

- Coding a direct "arbitrary value" into a CSS class (color, number representing a unit) is generally considered an anti-pattern for reasons that are too long to cover in this ADR.
- We like the numbering system but we use t-shirt sizes everywhere else in our system so it makes sense to skew towards alignment with the larger system.

## Positive Consequences <!-- optional -->

- By doing this we were able to add additional spacing classes without any friction and we'll be able to add / remove these easily in the future.
- It's very easy to change what our default spacing is now if we so choose.

## Negative Consequences <!-- optional -->

- The jumps are arbitrary and it's not always immediately clear to an engineer how a relative jump maps to the raw spacing value.
