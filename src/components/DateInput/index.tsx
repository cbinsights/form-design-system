import React, { MutableRefObject, useState } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';

import DayPicker, { DayModifiers } from 'react-day-picker';

import DatePickerIcon from 'icons/react/DatePickerIcon';
import TextInput from 'components/TextInput';
import YearAndMonthSelector from './YearAndMonthSelector';
import NavArrows from './NavArrows';
import { getDisabledDays, getYearRange, isValidUserDate } from './util';
import DateInputPopover, { PopoverProps } from 'components/Popover';

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
} as const;

export type DateFormat = keyof typeof DATE_FORMAT_MAP;

export interface DateInputProps {
  /**
   * Change callback for date selection. This is called when a valid
   * date has been selected in the picker or entered into the input.
   *
   * Called with the `Date` object of the selected date.
   * Called with `null` when the date has been cleared.
   */
  onDateChange?: (d?: Date | null) => void;

  /** Change callback for `input` element. */
  onInputChange?: (s?: string) => void;

  /** Number of years into the past to show in the year dropdown */
  pastYears?: number;

  /** Number of years into the future to show in the year dropdown */
  futureYears?: number;

  /**
   * Default date selection. Accepts the following:
   * - (DEPRECATED) a native `Date` object
   * - a valid date string
   */
  defaultDate?: string | Date;

  /** Lower bound of selectable date range */
  minDate?: Date;

  /** Upper bound of selectable date range */
  maxDate?: Date;

  /** String representing the order of date components (M=month, Y=year, D=day) */
  dateFormat?: DateFormat;

  /** Label for input */
  label?: string;

  /** Controls where the label renders */
  labelPosition?: 'top' | 'left';

  /** Specify width of label (useful for when label is positioned to left */
  labelWidth?: string;

  /** Ref to apply to `input` element */
  inputRef?: MutableRefObject<HTMLInputElement>;

  /** Ref to apply to popover content element */
  popoverRef?: MutableRefObject<HTMLDivElement>;

  /**
   * Object accepting any valid prop from `Popover` except for `trigger` and `ref`.
   * To apply a `ref` to the popover element, use the `popoverRef` prop.
   */
  popoverProps?: Omit<PopoverProps, 'ref' | 'trigger'>;

  /** Control whether input has error styling */
  hasError?: boolean;

  /** Displays as red error text below input */
  errorText?: string;
}

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const DateInput = ({
  futureYears = 1,
  pastYears = 40,
  dateFormat = 'MDY',
  popoverProps,
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
}: DateInputProps): JSX.Element => {
  const defaultDate = defaultDateInput
    ? dayjs(defaultDateInput).utc().toDate()
    : undefined;
  const [selectedDate, setSelectedDate] = useState(defaultDate);
  const [pickerMonth, setPickerMonth] = useState(defaultDate || new Date());
  const [prevDateFormat, setPrevDateFormat] = useState(dateFormat);
  const [inputValue, setInputValue] = useState(
    defaultDate ? dayjs(defaultDate).format(DATE_FORMAT_MAP[dateFormat]) : ''
  );
  const [isOpen, setIsOpen] = useState(false);

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

  const handleYearMonthChange = (date: Date) => {
    setPickerMonth(date);
  };

  const handleDaySelect = (date: Date, modifiers?: DayModifiers) => {
    if (modifiers?.disabled) return;
    setPickerMonth(date);
    setSelectedDate(date);
    setInputValue(dayjs(date).format(DATE_FORMAT_MAP[dateFormat]));
    onDateChange(date);
    closePopover();
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
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
      setSelectedDate(undefined);
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
          disabledDays={getDisabledDays(minDate, maxDate)}
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

export default DateInput;
