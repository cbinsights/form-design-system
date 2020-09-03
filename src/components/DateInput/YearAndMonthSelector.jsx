import React from 'react';
import PropTypes from 'prop-types';

/**
 * Private component for DateInput that renders Month/Year select inputs.
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const YearAndMonthSelector = ({ date, localeUtils, onChange, startYear, endYear }) => {
  const months = localeUtils.getMonths();

  const years = Array.from({ length: endYear - startYear }, (year, i) => i + startYear);

  const handleChange = ({
    target: {
      form: { year, month },
    },
  }) => {
    onChange(new Date(year.value, month.value));
  };

  return (
    <form className="DayPicker-Caption border--bottom">
      <div className="padding--bottom--half align--left">
        <select
          name="month"
          onChange={handleChange}
          value={date.getMonth()}
          className="margin--right--half"
        >
          {months.map((month, i) => (
            <option key={month} value={i}>
              {month}
            </option>
          ))}
        </select>
        <select name="year" onChange={handleChange} value={date.getFullYear()}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

// { date, localeUtils, onChange, startYear, endYear }
YearAndMonthSelector.propTypes = {
  /** Selected or current date as native JS `Date` object */
  date: PropTypes.instanceOf(Date).isRequired,

  /** `react-day-picker` localeUtils */
  localeUtils: PropTypes.object.isRequired,

  /** Year range start as JS `Date` object */
  startYear: PropTypes.instanceOf(Date).isRequired,

  /** Year range start as JS `Date` object */
  endYear: PropTypes.instanceOf(Date).isRequired,

  /** Month/year change callback */
  onChange: PropTypes.func,
};

export default YearAndMonthSelector;
