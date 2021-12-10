import React, { useContext } from 'react';
import { DocsContext, Source } from '@storybook/addon-docs';

export const ImportPath = () => {
  const context = useContext(DocsContext);
  const componentName = context.kind.split('/')[1];

  const path = `import { ${componentName} } from '@cbinsights/fds/lib/components'`;

  return <Source language="js" code={path} />;
};

export default ImportPath;
