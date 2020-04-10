import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import DayPicker from 'react-day-picker';

import ActionsArrowLeftIcon from 'lib/icons/react/ActionsArrowLeftIcon';
import ActionsArrowRightIcon from 'lib/icons/react/ActionsArrowRightIcon';
import Popover from 'components/popovers/Popover';
import Flex from 'components/layout/Flex';
import FlexItem from 'components/layout/FlexItem';
import IconButton from 'components/interactive/IconButton';

const DATE_FORMAT = 'MM/DD/YYYY';
const DATE_PATTERN = '[0-9/]*';

// tests for full date string in either MM/DD/YYYY or M/D/YYYY format
const VALID_DATE_REGEX = /^(0?[1-9]|1[0-2])[/](0?[1-9]|[12]\d|3[01])[/]\d{4}$/;

/**
 * Returns a range of years to show in date picker. The range will expand to include
 * the selected date, if a date has been selected.
 *
 * @param {Number} currentYear YYYY
 * @param {Number} pastYears number of prior years in range
 * @param {Number} futureYears number of future years in range
 * @param {Date} selectedDate currently selected date from DateInput
 * @returns {Object} { startYear: YYYY, endYear: YYYY }
 */
export const getYearRange = (currentYear, pastYears, futureYears, selectedDate) => {
  let startYear = new Date(currentYear - pastYears, 0).getFullYear();
  let endYear = new Date(currentYear + futureYears + 1, 11).getFullYear();
  const selectedYear = selectedDate instanceof Date && selectedDate.getFullYear();

  // Expand range to include selected year if out of range
  if (selectedYear && selectedYear < startYear) {
    startYear = selectedYear;
  }
  if (selectedYear && selectedYear > endYear) {
    endYear = selectedYear + 1;
  }

  return { startYear, endYear };
};

/**
 * Checks user-entered date strings for validity and completeness
 *
 * @param {String} inputValue
 * @returns {Boolean}
 */
export const isValidUserDate = (inputValue) => VALID_DATE_REGEX.test(inputValue);

/* eslint-disable react/prop-types */
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
 * Private component for DateInput that renders prev/next arrows.
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const NavArrows = ({ onPreviousClick, onNextClick }) => (
  <div className="fdsDateInput-navArrows alignChild--right--center">
    <Flex noGutters>
      <FlexItem shrink>
        <IconButton
          onClick={() => onPreviousClick()}
          Icon={ActionsArrowLeftIcon}
          label="Previous Month"
        />
      </FlexItem>
      <FlexItem shrink>
        <IconButton
          onClick={() => onNextClick()}
          Icon={ActionsArrowRightIcon}
          label="Next Month"
        />
      </FlexItem>
    </Flex>
  </div>
);
/* eslint-enable react/prop-types */

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const DateInput = ({ futureYears = 1, pastYears = 40, defaultDate, onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(defaultDate || null);
  const [pickerMonth, setPickerMonth] = useState(new Date());
  const [inputValue, setInputValue] = useState(
    defaultDate ? moment(defaultDate).format(DATE_FORMAT) : ''
  );

  const { startYear, endYear } = getYearRange(
    new Date().getFullYear(),
    pastYears,
    futureYears,
    selectedDate
  );

  const handleYearMonthChange = (date) => {
    setPickerMonth(date);
  };

  const handleDaySelect = (date) => {
    setSelectedDate(date);
    setInputValue(moment(date).format(DATE_FORMAT));
    onDateChange(date);
  };

  const handleInputChange = ({ target: { value } }) => {
    setInputValue(value);

    if (isValidUserDate(value)) {
      const parsedDate = moment(value, DATE_FORMAT);
      setPickerMonth(parsedDate.toDate()); // update the picker month/year in picker as user types
      handleDaySelect(parsedDate.toDate());
    }
  };

  return (
    <Popover
      trigger={
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={DATE_FORMAT}
          pattern={DATE_PATTERN}
        />
      }
    >
      <div className="elevation--2 rounded--all bgColor--white">
        <DayPicker
          month={pickerMonth}
          className="fdsDateInput"
          onDayClick={handleDaySelect}
          selectedDays={selectedDate}
          showOutsideDays={true}
          navbarElement={<NavArrows />}
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
  );
};

DateInput.propTypes = {
  /**
   * Change callback for date selection.
   * Called with the `Date` object of the selected date.
   */
  onDateChange: PropTypes.func,

  /** Number of years into the past to show in the year dropdown */
  pastYears: PropTypes.number,

  /** Number of years into the future to show in the year dropdown */
  futureYears: PropTypes.number,

  /** Default date selection - accepts date string or instance of Date */
  defaultDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
};

export default DateInput;
