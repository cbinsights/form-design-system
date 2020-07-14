import React from 'react';
import PropTypes from 'prop-types';
import CloneIcon from 'lib/icons/react/CloneIcon';
import CheckIcon from 'lib/icons/react/CheckIcon';
import useToggleHover from './useToggleHover';
import useClipboard from './useClipboard';

export const ImportPath = ({ component }) => {
  const toggleHover = useToggleHover()[1];
  const [copiedText, copyToClipboard] = useClipboard();

  const path = `import { ${component.displayName} } from '@cbinsights/fds/lib/components'`;

  const pathParts = path.split(' ');

  return (
    <p
      className="importPath margin--bottom"
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

ImportPath.propTypes = {
  component: PropTypes.func,
  section: PropTypes.oneOf([
    'forms',
    'interactive',
    'layout',
    'media',
    'modals',
    'popovers',
  ]),
};

export default ImportPath;
