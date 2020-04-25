module.exports = (file, api) => {
    const j = api.jscodeshift; // alias the jscodeshift API
    let root = j(file.source); // parse JS code into an AST 
    
    // Can we find an import path
    const findImport = root.find(j.ImportDeclaration, {
      specifiers: [{
        local: {
          name: 'cx'
        }
      }],
      source: { value: "classnames" }
    })
    
    // If we can't find that import, we don't want to process anything further
    if (!findImport.__paths.length) return root.toSource()
  
      root = root.find(j.ImportDeclaration, {
        specifiers: [{
          local:{
            name:"cx"
          }
        }],
        source: {
          value: "classnames"
        }
      }).forEach(statement => {
        console.log(statement)
        j(statement).replaceWith(j.importDeclaration(
          [
            j.importDefaultSpecifier(j.identifier("cc"))
          ],
        j.literal('classcat')
        ));
      })
    
    return root.toSource();
  };