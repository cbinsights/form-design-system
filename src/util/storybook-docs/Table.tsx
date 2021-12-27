import React from 'react';
import useClipboard from 'util/storybook-docs/useClipboard';
import ReactMarkdown from 'react-markdown';
import cc from 'classcat';

export interface TableProps {
  children?: React.ReactNode;
  shrinkLastColumn?: boolean;
}

export const Table = (props: TableProps): JSX.Element => (
  <table className={`doctable ${props.shrinkLastColumn ? 'shrinkLastColumn' : ''}`}>
    {props.children}
  </table>
);

export interface TableCellProps {
  children?: React.ReactNode;
  copy?: boolean;
  isCSS?: boolean;
}

export const TableCell = ({
  children,
  isCSS,
  copy,
  ...props
}: TableCellProps): JSX.Element => {
  const [copiedText, copyToClipboard] = useClipboard();
  return (
    <td
      className={cc([
        {
          hasCopy: copy,
          hasCSS: isCSS,
        },
      ])}
      onClick={(e: React.MouseEvent<HTMLTableCellElement>) => {
        if (e.currentTarget.firstElementChild?.textContent) {
          copyToClipboard(e.currentTarget.firstElementChild.textContent.trim());
        }
      }}
      {...props}
    >
      <div style={{ width: '100%' }}>
        {typeof children === 'string' ? (
          <ReactMarkdown>{children}</ReactMarkdown>
        ) : (
          children
        )}
      </div>
      {copy && (
        <span className="cliptext">
          {copiedText ? <b>Copied to Clipboard</b> : 'Copy to Clipboard'}
        </span>
      )}
    </td>
  );
};

export interface TableHeadLayoutProps {
  headers?: Array<string | number>;
}

const TableHeadLayout = ({ headers = [] }: TableHeadLayoutProps): JSX.Element => (
  <thead>
    <tr>
      {headers.map((header) => (
        <th key={header}>{header}</th>
      ))}
    </tr>
  </thead>
);

export interface TableLayoutProps {
  rows?: Array<Array<React.ReactNode | object>>;
  headers?: Array<string | number>;
  copy?: boolean;
  shrinkLastColumn?: boolean;
  /* controls whether we consider the first column of a table to be CSS classes */
  isCSS?: boolean;
}

export const TableLayout = ({
  headers,
  shrinkLastColumn,
  rows = [],
  isCSS,
  copy = true,
}: TableLayoutProps): JSX.Element => (
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

export default Table;
