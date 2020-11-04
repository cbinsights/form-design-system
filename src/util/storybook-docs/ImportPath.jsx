import React, { useContext } from 'react';
import { DocsContext } from '@storybook/addon-docs/blocks';
import CloneIcon from 'lib/icons/react/CloneIcon';
import CheckIcon from 'lib/icons/react/CheckIcon';
import useToggleHover from './useToggleHover';
import useClipboard from './useClipboard';

export const ImportPath = () => {
  const toggleHover = useToggleHover()[1];
  const [copiedText, copyToClipboard] = useClipboard();
  const context = useContext(DocsContext);
  const componentName = context.kind.split('/')[1];

  const path = `import { ${componentName} } from '@cbinsights/fds/lib/components'`;

  const pathParts = path.split(' ');

  return (
    <p
      className="sbdocs-title importPath margin--bottom"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={() => copyToClipboard(path)}
    >
      <span>{pathParts[0]} </span>
      <span className="importPath--highlight">
        {pathParts[1]} {pathParts[2]} {pathParts[3]}
      </span>
      <span> {pathParts[4]} </span>
      <span className="importPath--highlight">{pathParts[5]}</span>
      {!copiedText ? (
        <CloneIcon customSize={14} />
      ) : (
        <CheckIcon customSize={14} color="green" />
      )}
    </p>
  );
};

export default ImportPath;
