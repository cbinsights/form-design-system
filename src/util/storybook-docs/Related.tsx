import React, { useContext } from 'react';
import { DocsContext } from '@storybook/addon-docs';
import { linkTo } from '@storybook/addon-links';

export const Related = (): JSX.Element => {
  const context = useContext(DocsContext);

  const related = context.parameters?.docs.fds?.related;

  if (!related) return <></>;

  return (
    <div className="related">
      Related:
      <span> </span>
      {related.map(
        (item: React.ReactNode, index: number): JSX.Element => (
          <>
            <a key={index} className="relatedLink" onClick={linkTo(`components/${item}`)}>
              {item}
            </a>
            {index !== related.length - 1 && ', '}
          </>
        )
      )}
    </div>
  );
};

export default Related;
