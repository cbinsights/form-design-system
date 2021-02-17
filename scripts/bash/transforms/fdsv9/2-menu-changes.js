module.exports = (file, api) => {
  const j = api.jscodeshift; // alias the jscodeshift API
  let root = j(file.source); // parse JS code into an AST

  // Can we find an import path?
  const findLinkImport = root.find(j.ImportDeclaration, {
    specifiers: [
      {
        local: {
          name: 'Menu',
        },
      },
    ],
    source: { value: '@cbinsights/fds/lib/components/Menu' },
  });

  // If we can't find that import, we don't want to process anything further
  if (!findLinkImport.size()) return root.toSource();

  const componentName = findLinkImport.__paths[0].value.specifiers[0].local.name;

  root = root
    .find(j.JSXElement, {
      openingElement: { name: { name: componentName } },
    })
    .forEach((statement) => {
      const filteredAttributes = statement.value.openingElement.attributes.filter(
        (obj) => {
          return !(obj.name.name === 'isInModal');
        }
      );
      j(statement).replaceWith(
        j.jsxElement(
          j.jsxOpeningElement(
            j.jsxIdentifier(statement.value.openingElement.name.name),
            filteredAttributes,
            statement.value.openingElement.selfClosing
          ),
          !statement.value.openingElement.selfClosing
            ? statement.value.closingElement
            : null,
          statement.value.children
        )
      );
    });

  return root.toSource();
};
