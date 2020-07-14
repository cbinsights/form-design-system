module.exports = (file, api) => {
  const j = api.jscodeshift; // alias the jscodeshift API
  let root = j(file.source); // parse JS code into an AST 
  
  const oldComponentPath = "@cbinsights/fds/lib/components/InlineBlockList";
  const newComponentName = "SeparatorList";
  const newComponentPath = "@cbinsights/fds/lib/components/SeparatorList";
  
  // Can we find an import path?
  const findLinkImport = root.find(j.ImportDeclaration, {
    source: { value: oldComponentPath }
  })
  
  // If we can't find that import, we don't want to process anything further
  if (!findLinkImport.size()) return root.toSource()

  const componentName = findLinkImport.__paths[0].value.specifiers[0].local.name

  root = root.find(j.ImportDeclaration, {
    source: { value: oldComponentPath }
  }).forEach((statement) => {
        j(statement).replaceWith(
          j.importDeclaration(
            [j.importDefaultSpecifier(j.identifier(newComponentName))],
            j.literal(newComponentPath)
          )
        );
      }).toSource({quote: 'single'})


  root = j(root).find(j.JSXElement, {
    openingElement: { name: { name: componentName } }
  }).forEach((statement) => {
        j(statement).replaceWith(
          j.jsxElement(
            j.jsxOpeningElement(j.jsxIdentifier(newComponentName), statement.value.openingElement.attributes, statement.value.openingElement.selfClosing ),
            !statement.value.openingElement.selfClosing ? j.jsxClosingElement(j.jsxIdentifier(newComponentName)) : null,
            statement.value.children
          )
        );
      })
  
  return root.toSource();
};