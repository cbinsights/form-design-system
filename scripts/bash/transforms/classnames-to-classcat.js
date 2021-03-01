module.exports = (file, api) => {
  const j = api.jscodeshift; // alias the jscodeshift API
  let root = j(file.source); // parse JS code into an AST

  // Can we find an import path
  const findImport = root.find(j.ImportDeclaration, {
    specifiers: [
      {
        local: {
          name: 'cx',
        },
      },
    ],
    source: { value: 'classnames' },
  });

  // If we can't find that import, we don't want to process anything further
  if (!findImport.size()) return root.toSource();

  root = root
    .find(j.ImportDeclaration, {
      specifiers: [
        {
          local: {
            name: 'cx',
          },
        },
      ],
      source: {
        value: 'classnames',
      },
    })
    .forEach((statement) => {
      j(statement).replaceWith(
        j.importDeclaration(
          [j.importDefaultSpecifier(j.identifier('cc'))],
          j.literal('classcat')
        )
      );
    })
    .toSource({ quote: 'single' });

  const sortArguments = (args) => {
    return args.sort((a, b) => {
      if (a.type === 'ObjectExpression') {
        return -1;
      }
      return 0;
    });
  };

  root = j(root)
    .find(j.CallExpression)
    .forEach((statement) => {
      if (statement.value.callee.name === 'cx') {
        sortArguments(statement.value.arguments);
        j(statement).replaceWith(
          j.callExpression(j.identifier('cc'), [
            j.arrayExpression(sortArguments(statement.value.arguments)),
          ])
        );
      }
    });

  return root.toSource();
};
