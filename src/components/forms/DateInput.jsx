import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import ActionsArrowLeftIcon from 'lib/icons/react/ActionsArrowLeftIcon';
import ActionsArrowRightIcon from 'lib/icons/react/ActionsArrowRightIcon';
import Popover from '../popovers/Popover';
import Flex from '../layout/Flex';
import FlexItem from '../layout/FlexItem';
import IconButton from '../interactive/IconButton';

// :TODO: styling (see ticket for Nectar's mock)
// :TODO: tests

const DATE_FORMAT = 'MM/DD/YYYY';
const DATE_PATTERN = '[0-9/]*';

/**
 * Private component for DateInput that renders Month/Year select inputs.
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const YearAndMonthSelector = ({ date, localeUtils, onChange, startYear, endYear }) => {
  const months = localeUtils.getMonths();

  const years = Array.from({ length: endYear - startYear }, (year, i) => i + startYear);

  const handleChange = (e) => {
    const { year, month } = e.target.form;
    onChange(new Date(year.value, month.value));
  };

  return (
    <form className="DayPicker-Caption border--bottom">
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
  date: PropTypes.instanceOf(Date).isRequired,

  /** date utilities (provided by DayPicker arguments) */
  localeUtils: PropTypes.object.isRequired,

  /** change callback for year OR month selection */
  onChange: PropTypes.any.isRequired,

  /** starting year for year select */
  startYear: PropTypes.instanceOf(Date).isReqruied,

  /** ending year for year select */
  endYear: PropTypes.instanceOf(Date).isRequired,
};

/**
 * Private component for DateInput that renders prev/next arrows.
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const NavArrows = ({ onPreviousClick, onNextClick }) => (
  <div className="fdsDateInput-navArrows alignChild--right--center">
    <Flex noGutters>
      <FlexItem shrink>
        <IconButton onClick={() => onPreviousClick()} Icon={ActionsArrowLeftIcon} />
      </FlexItem>
      <FlexItem shrink>
        <IconButton onClick={() => onNextClick()} Icon={ActionsArrowRightIcon} />
      </FlexItem>
    </Flex>
  </div>
);
NavArrows.propTypes = {
  /** Previous click function provided by DayPicker */
  onPreviousClick: PropTypes.func.isRequired,

  /** Next click function provided by DayPicker */
  onNextClick: PropTypes.func.isRequired,
};

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const DateInput = ({ futureYears, pastYears, defaultDate, onDateChange }) => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(defaultDate || null);
  const [month, setMonth] = useState(today);

  const selectedYear = selectedDate instanceof Date && selectedDate.getFullYear();
  const currentYear = today.getFullYear();
  const startYear = new Date(currentYear - pastYears, 0).getFullYear(); // Full year from Jan
  const endYear = new Date(currentYear + futureYears + 1, 11).getFullYear(); // Full year to Dec

  const handleYearMonthChange = (date) => {
    setMonth(date);
  };

  const handleDaySelect = (date) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  const handleInputChange = (e) => {
    const dateWrapper = moment(e.target.value, DATE_FORMAT);
    const isYearWithinRage = dateWrapper.year().toString().length === 4; // years below 1000 are not useful

    if (dateWrapper.isValid() && isYearWithinRage) {
      setMonth(dateWrapper.toDate());
      handleDaySelect(dateWrapper.toDate());
    }
  };

  return (
    <React.Fragment>
      <Popover
        trigger={
          <input
            type="text"
            defaultValue={
              selectedDate ? moment(selectedDate).format(DATE_FORMAT) : undefined
            }
            onChange={handleInputChange}
            placeholder={DATE_FORMAT}
            pattern={DATE_PATTERN}
          />
        }
      >
        <div className="elevation--2 rounded--all bgColor--white">
          <DayPicker
            month={month}
            className="fdsDateInput"
            onDayClick={handleDaySelect}
            selectedDays={selectedDate}
            navbarElement={<NavArrows />}
            captionElement={({ date, localeUtils }) => (
              <YearAndMonthSelector
                date={date}
                localeUtils={localeUtils}
                onChange={handleYearMonthChange}
                /* adjust yearn range based on user input */
                startYear={
                  selectedYear && selectedYear < startYear ? selectedYear : startYear
                }
                endYear={
                  selectedYear && selectedYear > endYear ? selectedYear + 1 : endYear
                }
              />
            )}
          />
        </div>
      </Popover>
    </React.Fragment>
  );
};

DateInput.defaultProps = {
  futureYears: 2,
  pastYears: 40,
};

DateInput.propTypes = {
  /**
   * Change callback for date selection.
   * Called with the `Date` object of the selected date.
   */
  onDateChange: PropTypes.func,

  /** Number of past years to show */
  futureYears: PropTypes.number,

  /** Number of future years to show */
  pastYears: PropTypes.number,

  /** Default date selection */
  defaultDate: PropTypes.instanceOf(Date),
};

export default DateInput;
