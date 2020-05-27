import React from 'react';
import PropTypes from 'prop-types';
import { useClipboard } from 'components/util/storybook';
import ReactMarkdown from 'react-markdown';
import cc from 'classcat';

export const Table = (props) => (
  <table className={`doctable ${props.shrinkLastColumn ? 'shrinkLastColumn' : ''}`}>
    {props.children}
  </table>
);

Table.propTypes = {
  children: PropTypes.node,
  shrinkLastColumn: PropTypes.bool,
};

export const TableCell = ({ children, label, isCSS, copy, ...props }) => {
  const [copiedText, copyToClipboard] = useClipboard();
  return (
    <td
      className={cc([
        {
          hasCopy: copy,
          hasCSS: isCSS,
        },
      ])}
      onClick={(e) => {
        copyToClipboard(e.currentTarget.firstElementChild.innerText.trim());
      }}
      {...props}
    >
      <div style={{ width: '100%' }}>
        {typeof children === 'string' ? <ReactMarkdown source={children} /> : children}
      </div>
      {copy && (
        <span className="cliptext">
          {copiedText ? <b>Copied to Clipboard</b> : 'Copy to Clipboard'}
        </span>
      )}
    </td>
  );
};

TableCell.propTypes = {
  children: PropTypes.node,
  copy: PropTypes.bool,
  isCSS: PropTypes.bool,
  label: PropTypes.string,
};

const TableHeadLayout = ({ headers }) => (
  <thead>
    <tr>
      {headers.map((header) => (
        <th key={header}>{header}</th>
      ))}
    </tr>
  </thead>
);

TableHeadLayout.propTypes = {
  headers: PropTypes.array,
};

export const TableLayout = ({ headers, shrinkLastColumn, rows, isCSS, copy = true }) => (
  <Table shrinkLastColumn={shrinkLastColumn}>
    <TableHeadLayout headers={headers} />
    <tbody>
      {rows.map((row, idx) => (
        <tr key={idx}>
          {row.map((cell, idx2) =>
            typeof cell === 'object' ? (
              <TableCell copy={!isCSS && copy} key={idx2} {...cell} />
            ) : (
              <TableCell copy={!isCSS && copy} key={idx2} isCSS={isCSS && idx2 === 0}>
                {cell}
              </TableCell>
            )
          )}
        </tr>
      ))}
    </tbody>
  </Table>
);

TableLayout.propTypes = {
  rows: PropTypes.array,
  headers: PropTypes.array,
  copy: PropTypes.bool,
  shrinkLastColumn: PropTypes.bool,
  /* controls whether we consider the first column of a table to be CSS classes */
  isCSS: PropTypes.bool,
};

export default Table;
