[&larr; Table of Contents](../CONTRIBUTING.md)

# React Guidelines
⚛️ How to build reusable components in FDS

## Pure, presentational components
We want components to follow the same rules of a pure function:

- The render result is always the same when given the same props
- The component does not rely on or mutate external state
  - The component does not rely on anything other than props passed in
  - The component behaves the same way regardless of where it is placed in the DOM

Consider [this chip component](http://mbootstrap.com/docs/forms/chips). It only renders a
chip. A consumer may have a business requirement to render the chip as a link, a button,
or an input... the possibilities are endless. By constraining `Chip` to be a [small, sharp tool](./principles.md#small-sharp-tools),
consumers are held responsible for meeting business requirements via composition.


## Prop interface guidelines

Always abstract size-related props into shirt sizes.

```diff
-size: PropTypes.number,
+size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', '2xl', '3xl'])
```

Avoid declaring variations of a component via boolean props. Use a `oneOf` prop type
instead. This makes it easier to add or deprecate options in the future.

```diff
-<Button isPrimary />
+<Button type="primary" />
```
