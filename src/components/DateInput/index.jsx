import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import DayPicker from 'react-day-picker';

import ActionsArrowLeftIcon from 'lib/icons/react/ActionsArrowLeftIcon';
import ActionsArrowRightIcon from 'lib/icons/react/ActionsArrowRightIcon';
import DatePickerIcon from 'lib/icons/react/DatePickerIcon';
import Popover from 'components/Popover';
import Flex from 'components/Flex';
import FlexItem from 'components/FlexItem';
import IconButton from 'components/IconButton';
import TextInput from 'components/TextInput';

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
 * @param {Date} minDate lower bound of selectable dates
 * @param {Date} maxDate upper bound of selectable dates
 * @param {Date} selectedDate currently selected date from DateInput
 * @returns {Object} { startYear: YYYY, endYear: YYYY }
 */
export const getYearRange = (
  currentYear,
  pastYears,
  futureYears,
  minDate,
  maxDate,
  selectedDate
) => {
  // use min/max dates if specified
  // fall back relative past/future years from current date
  let startYear =
    (minDate && minDate.getFullYear()) ||
    new Date(currentYear - pastYears, 0).getFullYear();
  let endYear =
    (maxDate && maxDate.getFullYear() + 1) ||
    new Date(currentYear + futureYears + 1, 11).getFullYear();
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
  popoverProps = {},
  inputRef,
  popoverRef,
  defaultDate: defaultDateInput,
  onDateChange = () => {},
  onInputChange = () => {},
  label = '',
  minDate,
  maxDate,
  ...rest
}) => {
  const defaultDate = moment(defaultDateInput)
    .utc()
    .toDate();
  const [selectedDate, setSelectedDate] = useState(defaultDate || null);
  const [pickerMonth, setPickerMonth] = useState(defaultDate || new Date());
  const [prevDateFormat, setPrevDateFormat] = useState(dateFormat);
  const [inputValue, setInputValue] = useState(
    defaultDate ? moment(defaultDate).format(DATE_FORMAT_MAP[dateFormat]) : ''
  );

  /* eslint-disable no-param-reassign */
  delete popoverProps.trigger;
  delete popoverProps.ref;
  /* eslint-enable no-param-reassign */

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
    minDate,
    maxDate,
    selectedDate
  );

  const handleYearMonthChange = (date) => {
    setPickerMonth(date);
  };

  const handleDaySelect = (date, modifiers = {}) => {
    if (modifiers.disabled) return;
    setSelectedDate(date);
    setPickerMonth(date);
    setInputValue(moment(date).format(DATE_FORMAT_MAP[dateFormat]));
    onDateChange(date);
  };

  const handleInputChange = ({ target: { value } }) => {
    setInputValue(value);
    onInputChange(value);

    // when the user types a date that appears valid based on the given format,
    // we attempt to parse the date string with moment. If the date is parsed
    // as valid, update the selected day.
    if (isValidUserDate(value, dateFormat)) {
      const parsedDate = moment(value, DATE_FORMAT_MAP[dateFormat]);
      if (parsedDate.isValid()) {
        setPickerMonth(parsedDate.toDate());
        handleDaySelect(parsedDate.toDate());
      }
    }

    // if user backspaces to clear the input, clear out the picker
    if (value === '') {
      setSelectedDate(null);
      onDateChange(null);
    }
  };

  return (
    <Popover
      ref={popoverRef}
      trigger={
        <TextInput
          ref={inputRef}
          {...rest}
          label={label}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={DATE_FORMAT_MAP[dateFormat]}
          pattern="[0-9/]*"
          IconRight={DatePickerIcon}
        />
      }
      {...popoverProps}
    >
      <div className="elevation--2 rounded--all bgColor--white">
        <DayPicker
          fromMonth={minDate}
          toMonth={maxDate}
          disabledDays={[{ after: maxDate, before: minDate }]}
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
   * Change callback for date selection. This is called when a valid
   * date has been selected in the picker or entered into the input.
   *
   * Called with the `Date` object of the selected date.
   * Called with `null` when the date has been cleared.
   */
  onDateChange: PropTypes.func,

  /** Change callback for `input` element. */
  onInputChange: PropTypes.func,

  /** Number of years into the past to show in the year dropdown */
  pastYears: PropTypes.number,

  /** Number of years into the future to show in the year dropdown */
  futureYears: PropTypes.number,

  /**
   * Default date selection.
   * Accepts date string or instance of Date, but a string is recommended.
   */
  defaultDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),

  /** Lower bound of selectable date range */
  minDate: PropTypes.instanceOf(Date),

  /** Upper bound of selectable date range */
  maxDate: PropTypes.instanceOf(Date),

  /** String representing the order of date components (M=month, Y=year, D=day) */
  dateFormat: PropTypes.oneOf(Object.keys(DATE_FORMAT_MAP)),

  /** Label for input */
  label: PropTypes.string,

  /** Ref to apply to `input` element */
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),

  /** Ref to apply to popover content element */
  popoverRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),

  /**
   * Object accepting any valid prop from `Popover` except for `trigger` and `ref`.
   * To apply a `ref` to the popover element, use the `popoverRef` prop.
   */
  popoverProps: PropTypes.object,
};

export default DateInput;
