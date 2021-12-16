import React from 'react';
import type { LocaleUtils } from 'react-day-picker';

// { date, localeUtils, onChange, startYear, endYear }
export interface YearAndMonthSelectorProps {
  /** Selected or current date as native JS `Date` object */
  date: Date;

  /** `react-day-picker` localeUtils */
  localeUtils: LocaleUtils;

  /** Year range start as number */
  startYear: number;

  /** Year range end as number */
  endYear: number;

  /** Month/year change callback */
  onChange?: (date: Date) => void;
}

/**
 * Private component for DateInput that renders Month/Year select inputs.
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const YearAndMonthSelector = ({
  date,
  localeUtils,
  onChange,
  startYear,
  endYear,
}: YearAndMonthSelectorProps): JSX.Element => {
  const months: ReturnType<typeof localeUtils.getMonths> = localeUtils.getMonths();

  const years = Array.from({ length: endYear - startYear }, (_, i) => i + startYear);

  const handleMonthChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    onChange?.(new Date(date.getFullYear(), Number(event.target.value)));
  };

  const handleYearChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    onChange?.(new Date(Number(event.target.value), date.getMonth()));
  };

  return (
    <div className="DayPicker-Caption border--bottom">
      <div className="padding--bottom--s align--left">
        <select
          name="month"
          onChange={handleMonthChange}
          value={date.getMonth()}
          className="margin--right--s"
        >
          {months.map((month, i) => (
            <option key={month} value={i}>
              {month}
            </option>
          ))}
        </select>
        <select name="year" onChange={handleYearChange} value={date.getFullYear()}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default YearAndMonthSelector;
