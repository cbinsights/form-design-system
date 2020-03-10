import React from 'react';
import PropTypes from 'prop-types';
import { mostReadable } from 'tinycolor2';
import { useClipboard } from 'components/util/storybook';
import ReactMarkdown from 'react-markdown';
import cx from 'classnames';

const camelToCaps = (camelCase) =>
  camelCase.replace(/([A-Z])/g, (match) => ` ${match}`).toUpperCase();

export const Table = (props) => (
  <table className={`doctable ${props.shrinkLastColumn ? 'shrinkLastColumn' : ''}`}>
    {props.children}
  </table>
);

Table.propTypes = {
  children: PropTypes.node,
  shrinkLastColumn: PropTypes.bool,
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

export const TableCell = ({ cellType, children, label, isCSS, copy, ...props }) => {
  const [copiedText, copyToClipboard] = useClipboard();

  const background =
    cellType && (cellType.startsWith('FONT_COLOR') || cellType.startsWith('BORDER_COLOR'))
      ? children
      : undefined;

  const color = background && mostReadableConfig(background);

  const fontFamily = cellType && cellType.startsWith('FONT_FAMILY') && children;

  const fontSize = cellType && cellType.startsWith('FONT_SIZE') && children;

  const fontWeight = cellType && cellType.startsWith('FONT_WEIGHT') && children;

  const newChildren =
    typeof children === 'string' ? <ReactMarkdown source={children} /> : children;

  return (
    <td
      style={{
        fontFamily,
        fontWeight,
        fontSize,
        background,
        color,
      }}
      className={cx({
        hasCopy: copy,
        hasCSS: isCSS,
      })}
      onClick={() => copyToClipboard(children)}
      {...props}
    >
      {newChildren}
      {copy && (
        <span>{copiedText ? <b>Copied to Clipboard</b> : 'Copy to Clipboard'}</span>
      )}
    </td>
  );
};

TableCell.propTypes = {
  children: PropTypes.node,
  copy: PropTypes.bool,
  cellType: PropTypes.string,
  isCSS: PropTypes.bool,
  label: PropTypes.string,
};

export const TableHeadLayout = ({ headers }) => (
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

export const DictionaryTableLayout = ({ data, copy = true }) => (
  <Table shrinkLastColumn>
    <TableHeadLayout
      headers={Object.keys(data[0]).map((header) => camelToCaps(header))}
    />
    <TableBody>
      {data.map((row, idx) => (
        <tr key={idx}>
          <TableCell copy={copy}>{row.cssVar}</TableCell>
          <TableCell copy={copy}>{row.jsVar}</TableCell>
          <TableCell copy={copy} cellType={row.jsVar}>
            {row.value}
          </TableCell>
        </tr>
      ))}
    </TableBody>
  </Table>
);

DictionaryTableLayout.propTypes = {
  data: PropTypes.any,
  copy: PropTypes.bool,
};

export const TableLayout = ({ headers, rows, isCSS, copy = true }) => (
  <Table>
    <TableHeadLayout headers={headers} />
    <TableBody>
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
    </TableBody>
  </Table>
);

TableLayout.propTypes = {
  rows: PropTypes.array,
  headers: PropTypes.array,
  copy: PropTypes.bool,
  /* controls whether we consider the first column of a table to be CSS classes */
  isCSS: PropTypes.bool,
};

export default Table;

export const ClassTableLayout = ({ headers, rows }) => (
  <Table>
    <TableHeadLayout headers={headers} />
    <TableBody>
      {rows.map((row, idx) => (
        <tr key={idx}>
          {row.map((cell, idx2) =>
            typeof cell === 'object' ? (
              <TableCell key={idx2} {...cell} />
            ) : (
              <TableCell key={idx2} isCSS={idx2 === 0}>
                {cell}
              </TableCell>
            )
          )}
        </tr>
      ))}
    </TableBody>
  </Table>
);

ClassTableLayout.propTypes = {
  headers: PropTypes.array,
  rows: PropTypes.arrayOf(PropTypes.array),
  color: PropTypes.string,
  fontSize: PropTypes.number,
};
