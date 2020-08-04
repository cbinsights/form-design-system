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
