import React from 'react';
import PropTypes from 'prop-types';
import { mostReadable } from 'tinycolor2';
import { useClipboard } from 'components/util/storybook';

const camelToCaps = (camelCase) =>
  camelCase.replace(/([A-Z])/g, (match) => ` ${match}`).toUpperCase();

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
    props.cellType &&
    (props.cellType.startsWith('FONT_COLOR') || props.cellType.startsWith('BORDER_COLOR'))
      ? props.children
      : undefined;

  const color = mostReadableConfig(background || '#FFF');

  const fontFamily =
    props.cellType && props.cellType.startsWith('FONT_FAMILY') && props.children;

  const fontSize =
    props.cellType && props.cellType.startsWith('FONT_SIZE') && props.children;

  const fontWeight =
    props.cellType && props.cellType.startsWith('FONT_WEIGHT') && props.children;

  return (
    <td
      style={{
        fontFamily,
        fontWeight,
        fontSize,
        background,
        color,
      }}
      onClick={() => copyToClipboard(props.children)}
    >
      {props.children}
      {props.copy && (
        <span>{copiedText ? <b>Copied to Clipboard</b> : 'Copy to Clipboard'}</span>
      )}
    </td>
  );
};

TableCell.propTypes = {
  children: PropTypes.node,
  copy: PropTypes.bool,
  cellType: PropTypes.string,
};

export const DictionaryTableLayout = ({ data, copy = true }) => (
  <Table>
    <thead>
      <tr>
        {Object.keys(data[0]).map((header, idx) => (
          <th key={idx}>{camelToCaps(header)}</th>
        ))}
      </tr>
    </thead>
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

export const TableLayout = ({ data, headers, copy = true }) => (
  <Table>
    <thead>
      <tr>
        {headers.map((header, idx) => (
          <th key={idx}>{header}</th>
        ))}
      </tr>
    </thead>
    <TableBody>
      {data.map((row, idx) => (
        <tr key={idx}>
          {row.map((item, idxCell) => (
            <TableCell copy={copy} key={idxCell}>
              {item}
            </TableCell>
          ))}
        </tr>
      ))}
    </TableBody>
  </Table>
);

TableLayout.propTypes = {
  data: PropTypes.any,
  headers: PropTypes.any,
  copy: PropTypes.bool,
};

export default Table;
