module.exports = (file, api) => {
  const j = api.jscodeshift; // alias the jscodeshift API
  let root = j(file.source); // parse JS code into an AST

  root = root.find(j.ImportDeclaration).forEach((statement) => {
    const sourceValue = statement.value.source.value;
    if (sourceValue.startsWith("@cbinsights/fds/lib/components")) {
      const regex = /components\/.*\//;
      const replacedValue = sourceValue.replace(regex, "components/");
      const originalComponent = statement.value.specifiers[0].local.name;
      j(statement).replaceWith(
        j.importDeclaration(
          [j.importDefaultSpecifier(j.identifier(originalComponent))],
          j.literal(replacedValue)
        )
      );
    }
  });

  return root.toSource({quote: 'single'});
};