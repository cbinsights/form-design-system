import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Popover from '../popovers/Popover';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

// :TODO: curry this from DateInput render (via props)
const currentYear = new Date().getFullYear(); // this year
const fromMonth = new Date(currentYear, 0); // this january
const toMonth = new Date(currentYear + 10, 11); // 10 years of decembers into the future

const LogArgs = (args) => (
  <div className="fontFamily--mono color--red">{JSON.stringify(args, null, 2)}</div>
);

const YearAndMonthSelector = ({ date, localeUtils, onChange }) => {
  const months = localeUtils.getMonths();
  const years = [];

  // :TODO: can probably use past/future props to do a `arr.map` to get this
  for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i++) {
    years.push(i);
  }

  console.warn(years);

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

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const DateInput = ({}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [month, setMonth] = useState(new Date().getMonth());

  const handleYearMonthChange = (month) => {
    setMonth(month);
  };

  return (
    <React.Fragment>
      <Popover
        trigger={
          <input type="text" value={selectedDate && selectedDate.toLocaleDateString()} />
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
              />
            )}
          />
        </div>
      </Popover>
    </React.Fragment>
  );
};

// :TODO: number of past years prop
// :TODO: number of future years prop
DateInput.propTypes = {};

export default DateInput;
