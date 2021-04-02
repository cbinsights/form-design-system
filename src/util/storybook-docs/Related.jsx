import React, { useContext } from 'react';
import { DocsContext } from '@storybook/addon-docs/blocks';

export const Related = () => {
  const context = useContext(DocsContext);

  const related = context.parameters.docs.fds?.related;

  if (!related) return null;

  return (
    <div
      style={{
        borderRadius: '3px',
        padding: '8px 16px',
        fontSize: '15px',
        fontWeight: 'bold',
        marginBottom: '16px',
        background: '#EEE',
      }}
    >
      Related: {related.map((item) => item).join(', ')}
    </div>
  );
};

export default Related;
