import React from 'react';

type CardProps = {
  title: string;
  paragraph: string;
};

export const Card = ({ title, paragraph }: CardProps): JSX.Element => (
  <aside>
    <h2>{title} hi</h2>
    <p>{paragraph}</p>
  </aside>
);

export default Card;
