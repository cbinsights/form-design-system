import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';

import DayPicker from 'react-day-picker';

import DatePickerIcon from 'icons/react/DatePickerIcon';
import TextInput from 'components/TextInput';
import YearAndMonthSelector from './YearAndMonthSelector';
import DateInputPopover from './DateInputPopover';
import NavArrows from './NavArrows';
import { getYearRange, isValidUserDate } from './util';

dayjs.extend(customParseFormat);
dayjs.extend(localizedFormat);
dayjs.extend(utc);

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
  labelPosition,
  labelWidth,
  minDate,
  maxDate,
  hasError,
  errorText,
  ...rest
}) => {
  const defaultDate = defaultDateInput ? dayjs(defaultDateInput).utc().toDate() : null;
  const [selectedDate, setSelectedDate] = useState(defaultDate || null);
  const [pickerMonth, setPickerMonth] = useState(defaultDate || new Date());
  const [prevDateFormat, setPrevDateFormat] = useState(dateFormat);
  const [inputValue, setInputValue] = useState(
    defaultDate ? dayjs(defaultDate).format(DATE_FORMAT_MAP[dateFormat]) : ''
  );
  const [isOpen, setIsOpen] = useState(false);

  /* eslint-disable no-param-reassign */
  delete popoverProps.trigger;
  delete popoverProps.ref;
  /* eslint-enable no-param-reassign */

  // If the dateFormat prop changes while the input has a user-entered value,
  // we want the value to change to reflect the new dateFormat
  if (dateFormat !== prevDateFormat && inputValue.length > 0) {
    // convert input value back into dayjs obj based on previous date format
    const parsedInputValue = dayjs(inputValue, prevDateFormat);
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

  const openPopover = () => {
    setIsOpen(true);
  };

  const closePopover = () => {
    setIsOpen(false);
  };

  const handleYearMonthChange = (date) => {
    setPickerMonth(date);
  };

  const handleDaySelect = (date, modifiers = {}) => {
    if (modifiers.disabled) return;
    setPickerMonth(date);
    setSelectedDate(date);
    setInputValue(dayjs(date).format(DATE_FORMAT_MAP[dateFormat]));
    onDateChange(date);
    closePopover();
  };

  const handleInputChange = ({ target: { value } }) => {
    setInputValue(value);
    onInputChange(value);

    // when the user types a date that appears valid based on the given format,
    // we attempt to parse the date string with dayjs. If the date is parsed
    // as valid, update the selected day.
    if (isValidUserDate(value, dateFormat)) {
      const parsedDate = dayjs(value, DATE_FORMAT_MAP[dateFormat]);
      if (parsedDate.isValid()) {
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
    <DateInputPopover
      ref={popoverRef}
      interactionMode="controlled"
      isOpen={isOpen}
      onUserDismiss={closePopover}
      trigger={
        <TextInput
          aria-label="Date Input"
          ref={inputRef}
          {...rest}
          hasError={hasError}
          errorText={errorText}
          label={label}
          labelPosition={labelPosition}
          labelWidth={labelWidth}
          type="text"
          value={inputValue}
          onFocus={openPopover}
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
    </DateInputPopover>
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
   * Default date selection. Accepts the following:
   * - (DEPRECATED) a native `Date` object
   * - a valid date string
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

  /** Controls where the label renders */
  labelPosition: PropTypes.oneOf(['top', 'left']),

  /** Specify width of label (useful for when label is positioned to left */
  labelWidth: PropTypes.string,

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

  /** Control whether input has error styling */
  hasError: PropTypes.bool,

  /** Displays as red error text below input */
  errorText: PropTypes.string,
};

export default DateInput;
