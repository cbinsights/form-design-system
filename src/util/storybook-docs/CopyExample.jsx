import React from 'react';
import FDS from 'dictionary/js/styleConstants';
import CheckIcon from 'icons/react/CheckIcon';
import DenyIcon from 'icons/react/DenyIcon';
import PropTypes from 'prop-types';

/**
 * For displaying a do/don't example of copy writing
 */
const CopyExample = ({ valid, invalid }) => (
  <div className="bgColor--haze rounded--all padding--y--s padding--x--l">
    <table>
      <tbody>
        {invalid && (
          <tr>
            <td>
              <DenyIcon color={FDS.COLOR_RED} />
              <strong className="padding--x--s color--red">Don&apos;t:</strong>
            </td>
            <td className="color--secondary">{invalid}</td>
          </tr>
        )}
        <tr>
          <td>
            <CheckIcon color={FDS.COLOR_GREEN} />
            <strong className="padding--x--s color--green">Do:</strong>
          </td>
          <td>{valid}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

CopyExample.propTypes = {
  /** valid example text */
  valid: PropTypes.string.isRequired,

  /** optional invalid example text */
  invalid: PropTypes.string,
};

export default CopyExample;
