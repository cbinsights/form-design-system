[&larr; Table of Contents](../CONTRIBUTING.md)

# Guiding Principles

💡 The _what_ and _why_ of Form Design System software.

## Purpose of the design system

At CB Insights, our design system has a number of goals that aim to help us build a
world-class UI:

- _Record design and implementation decisions for reusable UI_
- _Foster consistency in visual design and behavior of UI_
- _Enable front end engineers to pool their knowledge into a single point of truth for UI components_
- _Help feature teams spend less time on UI details and more time on solving business problems_

## What belongs in FDS?

All styles and components in FDS should be application-agnostic. We should be able to use
the FDS library within `cbi-site`, admins, and any other front end CB Insights may build.

### ✅ Belongs in FDS

- Low specificity, global utility classes
- React layout utilities and other low-level React helpers
- Presentational components that are not tied to any specific feature or application

### 🚫 Does not belong in FDS

- Components that rely on Redux state
- Components that are tied to a specific application or feature
- Components that are not "small and sharp" (see below)

## Alignment with design

When it comes to standard UI components, Engineering and Design should speak the same
language. In practice, this means:

- Publicly exposed components in FDS should be named based on how design refers to the
  component in their sketch library
- Component structure and semantic grouping should reflect design intention

When someone refers to a "Chip", we should have a shared understanding across design,
engineering, and product.

## Small, sharp tools

Components, CSS classes, and other tools in FDS follow what could be called the ["Unix
Philosphy"](https://en.wikipedia.org/wiki/Unix_philosophy). There is no formal definition, but this summary fits well:

> Write programs that do one thing and do it well. Write programs to work together.

Consider the design of `cat`:

> The design of cat is typical of most UNIX programs: it implements one simple but general function that can be used in many different applications (including many not envisioned by the original author).

Making our CSS classes and React components as small and sharp as possible gives consumers
the flexibility to compose those smaller pieces into more complex patterns.

Each individual component or class should behave the same way no matter where it lives in a
consumer application.

Each component should define only the props it needs for presentation.

Each component or utility class should strive to do one, and only one thing.

## "Worse is Better"

Building a generic component that can accommodate all future use cases is hard. To
optimize for building components and gaining contributors, we can ease the burden of
designing a generic component by following the ["Worse is Better"](https://en.wikipedia.org/wiki/Worse_is_better) method.

Here are some key points of this method as it applies to FDS:

- Simplicity is the most important consideration in a design.
- Components should be consistent, **but not at the sacrifice of simplicity**.
- Components should cover as many use cases as possible, but **completeness is not as important as simplicity**

This means that a component only needs to support the absolute minimum functionality before shipping.

**Favor software designs that can be iterated on as needed instead of optimizing for complexity up-front.**

## Native web standards preferred

You can do almost anything in javascript, but that doesn't mean you should. Components
should leverage as much as possible from native web standards supported by modern
browsers.

It is unlikely that a custom JS solution will perform as reliably as something implemented
natively in a browser.

For example, `position: sticky` should be preferred over a JS solution to fixing content
during scroll.

### JS-in-JS, CSS-in-CSS

In FDS, we have opted for keeping styling as close to native web standards as possible.
We do not use any CSS-in-JS libraries. We do not use any special superset syntax like Less
or Sass. CSS is written "vanilla", based on the latest CSS standards. PostCSS handles
polyfills and vendor prefixing.
