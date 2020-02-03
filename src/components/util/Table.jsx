import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { readableColor } from 'polished';

export const Table = (props) => <table className="doctable">{props.children}</table>;

Table.propTypes = {
  children: PropTypes.node,
};

export const TableBody = (props) => <tbody>{props.children}</tbody>;

TableBody.propTypes = {
  children: PropTypes.node,
};

export const TableRow = (props) => <tr>{props.children}</tr>;

TableRow.propTypes = {
  children: PropTypes.node,
};

export const TableCell = (props) => {
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = (value) => {
    window.navigator.clipboard.writeText(value);
    setCopiedText(value);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const background =
    props.children.startsWith('#') || props.children.startsWith('rgba')
      ? props.children
      : undefined;
  return (
    <td
      style={{
        background,
        color: readableColor(background || '#FFF', '#333'),
      }}
      onClick={() => copyToClipboard(props.children)}
    >
      {props.children}
      <span style={{ color: readableColor(background || '#FFF', '#333') }}>
        {copiedText ? <b>Copied to Clipboard</b> : 'Copy to Clipboard'}
      </span>
    </td>
  );
};

TableCell.propTypes = {
  children: PropTypes.node,
};

export default Table;
