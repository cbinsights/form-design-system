import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const InlineBlockList = ({ items, separator }) => {
  const classNames = cx('fdsInlineBlockList', {
    'fdsInlineBlockList--separators': Boolean(separator),
  });

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

InlineBlockList.propTypes = {
  /** Components (or strings) to render in the list */
  items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, PropTypes.string]))
    .isRequired,

  /** Optional character to render between items */
  separator: PropTypes.string,
};

export default InlineBlockList;
