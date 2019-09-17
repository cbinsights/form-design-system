# Button

Displays standard Buttons.

## Handling events
The `Button` component passes through `...rest` props. You may add an `onClick` prop to
handle click events.

## Themes
Use the `theme` prop to chose the button style.

### Colors
Themes named by color will render a button with a filled background. These buttons should
be reserved for primary actions (e.g. `theme="blue"`).

### Outline and "Ghost" buttons
The `outline` and `ghost` themes will render an outlined button or a text button
respectively.

## Destructive buttons
The `isDestructive` prop is reserved for buttons that take a destructive action of some
kind (e.g. "Delete"). This prop can be applied to a button of any theme.
