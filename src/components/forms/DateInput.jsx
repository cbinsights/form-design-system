import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Popover from '../popovers/Popover';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

// :TODO: clean up logging shit
// :TODO: convert value to ISO-8601 string? Check with Monica.
// :TODO: custom next/prev icons?
// :TODO: styling (see ticket for Nectar's mock)
// :TODO: tests
// :TODO: stories

const LogArgs = (args) => (
  <div className="fontFamily--mono color--red">{JSON.stringify(args, null, 2)}</div>
);

const YearAndMonthSelector = ({ date, localeUtils, onChange, startYear, endYear }) => {
  const months = localeUtils.getMonths();

  const years = Array.from({ length: endYear - startYear }, (year, i) => i + startYear);

  const handleChange = (e) => {
    const { year, month } = e.target.form;
    onChange(new Date(year.value, month.value));
  };

  return (
    <form className="DayPicker-Caption flush--all">
      <div className="padding--bottom--half">
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

YearAndMonthSelector.propTypes = {
  /** current date (provided by DayPicker arguments) */
  date: PropTypes.instanceOf(Date),

  /** date utilities (provided by DayPicker arguments) */
  localeUtils: PropTypes.object,

  /** change callback for year OR month selection*/
  onChange: PropTypes.any,

  /** starting year for year select */
  startYear: PropTypes.instanceOf(Date),

  /** ending year for year select */
  endYear: PropTypes.instanceOf(Date),
};

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const DateInput = ({ futureYears, pastYears, defaultDate, onChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [month, setMonth] = useState(new Date());

  const currentYear = new Date().getFullYear();
  const startYear = new Date(currentYear - pastYears, 0).getFullYear(); // Full year from Jan
  const endYear = new Date(currentYear + futureYears + 1, 11).getFullYear(); // Full year to Dec

  const handleYearMonthChange = (month) => {
    setMonth(month);
  };

  return (
    <React.Fragment>
      <Popover
        trigger={
          <input
            type="text"
            value={selectedDate ? selectedDate.toLocaleDateString() : undefined}
            onChange={onChange}
          />
        }
      >
        <div className="elevation--2 rounded--all bgColor--white">
          <DayPicker
            month={month}
            className="fdsDateInput"
            onDayClick={setSelectedDate}
            selectedDays={selectedDate}
            captionElement={({ date, localeUtils }) => (
              <YearAndMonthSelector
                date={date}
                localeUtils={localeUtils}
                onChange={handleYearMonthChange}
                startYear={startYear}
                endYear={endYear}
              />
            )}
          />
        </div>
      </Popover>
    </React.Fragment>
  );
};

// :TODO: make past/future years work
DateInput.defaultProps = {
  futureYears: 1,
  pastYears: 1000,
};

// :TODO: selectedDate prop
DateInput.propTypes = {
  /** Input change callback */
  onChange: PropTypes.func,

  /** Number of past years to show */
  futureYears: PropTypes.number,

  /** Number of future years to show */
  pastYears: PropTypes.number,

  /** Default date selection */
  defaultDate: PropTypes.instanceOf(Date),
};

export default DateInput;
