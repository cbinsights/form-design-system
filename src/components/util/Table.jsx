import React from 'react';
import PropTypes from 'prop-types';
import { mostReadable } from 'tinycolor2';
import { useClipboard } from 'components/util/storybook';

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

const mostReadableConfig = (hexName) =>
  mostReadable(hexName, '#333', { includeFallbackColors: true, level: 'AAA' });

export const TableCell = (props) => {
  const [copiedText, copyToClipboard] = useClipboard();

  const background =
    props.children.startsWith('#') || props.children.startsWith('rgba')
      ? props.children
      : undefined;
  return (
    <td
      style={{
        background,
        color: mostReadableConfig(background || '#FFF'),
      }}
      onClick={() => copyToClipboard(props.children)}
    >
      {props.children}
      <span>{copiedText ? <b>Copied to Clipboard</b> : 'Copy to Clipboard'}</span>
    </td>
  );
};

TableCell.propTypes = {
  children: PropTypes.node,
};

export default Table;
