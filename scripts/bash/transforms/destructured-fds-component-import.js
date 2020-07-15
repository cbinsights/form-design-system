module.exports = (file, api) => {
    const fdsComponentPath = "@cbinsights/fds/lib/components";

    const j = api.jscodeshift; // alias the jscodeshift API
    const root = j(file.source); // parse JS code into an AST
  
    // Find all single component imports
    const findSingleImports = root.find(j.ImportDeclaration, (node) => (
      node.source.value.startsWith(`${fdsComponentPath}/`)
    ));
  
    // If there's no single component imports we never need to do anything
    if (!findSingleImports.size()) return root.toSource();
  
    // There has to be a way to map this or something :(
    const importArr = [];
    findSingleImports.forEach((item) => {
      importArr.push(j.importSpecifier(j.identifier(item.value.specifiers[0].local.name)));
    });
  
    // Find destructured component import
    const destructuredImport = root.find(j.ImportDeclaration, {
      source: { value: fdsComponentPath }
    });
  
    // If there's no existing destructured import,
    if (!destructuredImport.size()) {
      findSingleImports
         // Find the first single import
        .at(0)
        // and construct the destructured import right before that line
        .insertBefore(j.importDeclaration(importArr, j.stringLiteral(fdsComponentPath)));
    }
  
    destructuredImport.forEach((statement) => {
      j(statement).replaceWith(
        j.importDeclaration(
          [...statement.value.specifiers, ...importArr],
          j.stringLiteral(statement.value.source.value)
        )
      );
    });
  
    // Now that single imports have been added to destructured imports, remove the single ones.
    findSingleImports.remove();
  
    return root.toSource({ quote: "single" });
  };