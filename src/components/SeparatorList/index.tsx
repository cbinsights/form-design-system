import React from 'react';
import cc from 'classcat';

export interface SeparatorListProps {
  /** Components (or strings) to render in the list */
  items: Array<React.ReactElement | string>;

  /** Optional character to render between items. Useful for breadcrumbs and other separated lists */
  separator?: string;
}

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const InlineBlockList = ({ items, separator }: SeparatorListProps): JSX.Element => {
  const classNames = cc([
    {
      'fdsInlineBlockList--separators': Boolean(separator),
    },
    'fdsInlineBlockList',
  ]);

  return (
    <ul className={classNames}>
      {items.map((item, i) => (
        <li
          key={`${separator}-${i}`}
          className="display--inlineBlock"
          data-separator={separator || null}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default InlineBlockList;
