import React, { useContext } from 'react';
import { DocsContext } from '@storybook/addon-docs';
import { linkTo } from '@storybook/addon-links';

export const Related = () => {
  const context = useContext(DocsContext);

  const related = context.parameters.docs.fds?.related;

  if (!related) return null;

  return (
    <div className="related">
      Related:
      <span> </span>
      {related.map((item, index) => (
        <>
          <a key={index} className="relatedLink" onClick={linkTo(`components/${item}`)}>
            {item}
          </a>
          {index !== related.length - 1 && ', '}
        </>
      ))}
    </div>
  );
};

export default Related;
