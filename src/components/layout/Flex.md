# Flex

Flex is an abstraction of CSS flexbox that provides a subset of flexbox functionality.

**A `Flex` should only contain `FlexItem` children**.

## Flex direction
`Flex` renders in row orientation by default. Use the `direction` prop to change flex direction. To reverse the row or column, use the boolean prop `reverse`.

## Flex alignment/justification
Following the flexbox spec, `align` controls cross-axis alignment and `justify` controls main axis alignment. In this example, both `align` and `justify` are set to `end`. The child
`FlexItem` components here are set to `shrink` to their content width.

_See `FlexItem` documentation for more information on the `FlexItem` `shrink` prop_

