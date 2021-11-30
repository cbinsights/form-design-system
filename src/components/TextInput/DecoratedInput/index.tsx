import React from 'react';

export interface DecoratedInputProps {
  /** String to place to the left of the input */
  before?: string;

  /** String to place to the right of the input */
  after?: string;

  /** React children */
  children?: Array<React.ReactNode> | React.ReactNode;
}

const DecoratedInput = ({
  before,
  after,
  children,
}: DecoratedInputProps): JSX.Element => (
  <div className="fdsDecoratedInput" data-before={before} data-after={after}>
    {children}
  </div>
);

export default DecoratedInput;
