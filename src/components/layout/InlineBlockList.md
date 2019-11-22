This layout component takes a list of strings or components and renders a `ul` with list
items displayed `inline-block`. **This component allows items in the list to wrap**.

Because `Flex` does not allow items to wrap, `InlineBlockList` can be useful for rendering
lists of chips or tags.

## Separator

An optional `separator` prop renders a given string between the items in the list. Useful
for breadcrumbs and other separated lists.

### a11y considerations
The separator string is rendered using CSS pseudo element content via the `data-separator`
attribute on each list item.
