[&larr; Table of Contents](../CONTRIBUTING.md)

# Styling Guidelines
🎨 How to CSS in FDS

## Styling components

Prefer CSS custom properties defined by our [style dictionary](https://help.github.com/en/articles/customizing-how-changed-files-appear-on-github) over hard coded values.

```diff
.foo {
-  background-color: #ff6633;
+  background-color: var(--color-orange);
}
```

Prefer existing utility classes over writing new CSS

```diff
-.fooComponent {
-  padding-top: var(--space-default);
-  color: var(--color-secondary);
-  display: inline-block;
-}
+<div className="padding--top color--secondary display--inlineBlock">
```

## Managing specificity
**Aim to keep selectors to a single class**. Avoid ancestry and combinators.

CSS classes in FDS follow an _additive class pattern_. A base class should define default
styles of an element, and additional classes can be added to modify style properties.

```
/* "base" includes all default styles. Variant classes only change what is necessary */
<Component className="base base--variant base--anotherVariant" />
```

**Avoid binary class switching**. Use an additive class pattern instead.

```diff
-className={isSelected ? 'menu-item-selected' : 'menu-item-normal'}
+className=cx('menu-item', { 'menu-item--selected': isSelected })
```

**Avoid ancestry.** Instead, use a single class that is directly applied to the element that must be
styled.

```diff
-.flex .flexItem {}
+.flex-flexItem {}
```

## Managing layout and spacing
The outermost element of a component **should avoid layout side effects**. Because we want
our component to behave the same way regardless of where it is placed in the DOM, avoid
properties that cause layout side effects:

- 🚫 `margin` (pushes other components around)
- 🚫 `float` (affects layout mode of neighboring elements)

Instead, manage spacing and layout within the box boundary of the outermost element in the
component.


## Styling typography

**Avoid setting font properties in CSS**. Prefer utility classes provided by FDS:

CSS rule                                   | utility class
------------------------------------------ | --------------------
🚫 `font-size: var(--font-size-xl)`        | ✅ `.fontSize--xl`
🚫 `font-weight: var(--font-weight-bold)`  | ✅ `.fontWeight--bold`
🚫 `color: var(--font-color-secondary)`    | ✅ `.color--secondary`

**Avoid setting `line-height`.** The utility classes provided by FDS set an appropriate
line height for type based on font size.

```diff
-.foo {
-  font-size: var(--font-size-xl);
-  line-height: var(--font-lineHeight-default);
-}
+<Foo className="fontSize--xl" /> /* FDS adds less leading for larger text; more leading for smaller text */
```
