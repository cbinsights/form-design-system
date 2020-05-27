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

// Is this the correct way to localize dates? No, it is not.
// Fortunately, this is display-only.
//
// The I/O of DateInput is always a JS Date object, which ensures this
// hacky formatting is internal to DateInput and will never leak out.
export const DATE_FORMAT_MAP = {
  MDY: 'MM/DD/YYYY',
  DMY: 'DD/MM/YYYY',
  YMD: 'YYYY/MM/DD', // ISO-8601, the best but least used standard
};

// capture groups for M and D work with or without a leading zero.
// Y component requires 4 digits for all formats.
const DATE_PATTERN_MAP = {
  MDY: /^(0?[1-9]|1[0-2])[/](0?[1-9]|[12]\d|3[01])[/]\d{4}$/,
  DMY: /^(0?[1-9]|[12]\d|3[01])[/](0?[1-9]|1[0-2])[/]\d{4}$/,
  YMD: /^\d{4}[/](0?[1-9]|1[0-2])[/](0?[1-9]|[12]\d|3[01])$/,
};

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
 * Checks user-entered date strings for validity and completeness.
 *
 * moment eagerly parses dates (starting with a single number!), so
 * we must wait for a user to finish typing something that looks like
 * a full date.
 *
 * We use patterns that accept a date string with or without a leading zero.
 *
 * @param {String} inputValue
 * @param {String} dateFormat (MDY/DMY/YMD)
 * @returns {Boolean}
 */
export const isValidUserDate = (inputValue, dateFormat) =>
  DATE_PATTERN_MAP[dateFormat || 'MDY'].test(inputValue);

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
const DateInput = ({
  futureYears = 1,
  pastYears = 40,
  dateFormat = 'MDY',
  defaultDate,
  onDateChange,
  ...rest
}) => {
  const [selectedDate, setSelectedDate] = useState(defaultDate || null);
  const [pickerMonth, setPickerMonth] = useState(defaultDate || new Date());
  const [prevDateFormat, setPrevDateFormat] = useState(dateFormat);
  const [inputValue, setInputValue] = useState(
    defaultDate ? moment(defaultDate).format(DATE_FORMAT_MAP[dateFormat]) : ''
  );

  // If the dateFormat prop changes while the input has a user-entered value,
  // we want the value to change to reflect the new dateFormat
  if (dateFormat !== prevDateFormat && inputValue.length > 0) {
    // convert input value back into moment obj based on previous date format
    const parsedInputValue = moment(inputValue, prevDateFormat);
    // reformat the date in new `dateFormat`; set as new input value
    setInputValue(parsedInputValue.format(DATE_FORMAT_MAP[dateFormat]));
    // store dateFormat for next render
    setPrevDateFormat(dateFormat);
  }

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
    setPickerMonth(date);
    setInputValue(moment(date).format(DATE_FORMAT_MAP[dateFormat]));
    onDateChange(date);
  };

  const handleInputChange = ({ target: { value } }) => {
    setInputValue(value);

    if (isValidUserDate(value, dateFormat)) {
      const parsedDate = moment(value, DATE_FORMAT_MAP[dateFormat]);
      // we want the month/year in picker to update as the user types
      setPickerMonth(parsedDate.toDate());
      handleDaySelect(parsedDate.toDate());
    }
  };

  return (
    <Popover
      trigger={
        <input
          {...rest}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={DATE_FORMAT_MAP[dateFormat]}
          pattern="[0-9/]*"
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

  /** String representing the order of date components (M=month, Y=year, D=day) */
  dateFormat: PropTypes.oneOf(Object.keys(DATE_FORMAT_MAP)),
};

export default DateInput;
