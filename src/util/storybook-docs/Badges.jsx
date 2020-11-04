import React, { useContext } from 'react';
import { DocsContext } from '@storybook/addon-docs/blocks';

export const Badges = () => {
  const context = useContext(DocsContext);
  console.log(context);

  const isRest = context.parameters.docs.attributes;

  if (!isRest) return null;

  return (
    <div
      style={{
        border: '1px solid rgba(167, 130, 238)',
        borderRadius: '3px',
        color: '#9f74ce',
        fontWeight: 'bold',
        padding: '4px',
        fontSize: '15px',
        textAlign: 'center',
      }}
    >
      😴 Supports Rest Props
    </div>
  );
};

export default Badges;
