import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

import DateInput, { DATE_FORMAT_MAP, getYearRange, isValidUserDate } from '.';

describe('DateInput component', () => {

  describe('getYearRange', () => {

    it('returns expected date ranges without `selectedDate`', () => {
      expect(getYearRange(2020, 1, 1)).toMatchObject({ startYear: 2019, endYear: 2022 });
      expect(getYearRange(2020, 25, 5)).toMatchObject({ startYear: 1995, endYear: 2026 });
      // FUN FACT: the oldest funding round in CBI data is 1820, for Guiness 🍺💰
      expect(getYearRange(1900, 80, 0)).toMatchObject({ startYear: 1820, endYear: 1901 });
    });

    it('returns adjusted date ranges when a `selectedDate` is passed', () => {
      const battleOfHastings = new Date('Oct 14 1066');
      const totalRecall = new Date('Jun 1 2084');
      expect(getYearRange(2020, 10, 10, null, null, battleOfHastings)).toMatchObject({ startYear: 1066, endYear: 2031 });
      expect(getYearRange(2020, 10, 10, null, null, totalRecall)).toMatchObject({ startYear: 2010, endYear: 2085 });
    });

    it('returns bounded date range when minDate and/or maxDate are passed', () => {
      const min = new Date('Jan 1 2018');
      const max = new Date('Oct 1 2020');
      expect(getYearRange(2020, 1, 1, min)).toMatchObject({ startYear: 2018, endYear: 2022 });
      expect(getYearRange(2020, 1, 1, null, max)).toMatchObject({ startYear: 2019, endYear: 2021 });
      expect(getYearRange(2020, 1, 1, min, max)).toMatchObject({ startYear: 2018, endYear: 2021 });
    });
  });

  describe('isValidUserDate regex', () => {
    it('allows valid, complete dates to pass', () => {
      expect(isValidUserDate('04/20/2050', 'MDY')).toBe(true);
      expect(isValidUserDate('4/06/2001', 'MDY')).toBe(true);
      expect(isValidUserDate('4/6/2012', 'MDY')).toBe(true);
      expect(isValidUserDate('10/14/1066', 'MDY')).toBe(true);
      expect(isValidUserDate('06/1/2084', 'MDY')).toBe(true);
      expect(isValidUserDate('2084/6/1', 'YMD')).toBe(true);
      expect(isValidUserDate('1/6/2084', 'DMY')).toBe(true);
    });
    it('fails incomplete or invalid date strings', () => {
      expect(isValidUserDate('4', 'MDY')).toBe(false);
      expect(isValidUserDate('4/20', 'MDY')).toBe(false);
      expect(isValidUserDate('4/20/10', 'MDY')).toBe(false);
      expect(isValidUserDate('4/20/10', 'MDY')).toBe(false);
      expect(isValidUserDate('4/20/201', 'MDY')).toBe(false);
      expect(isValidUserDate('201/4/20', 'YMD')).toBe(false);
      expect(isValidUserDate('20/4/201', 'DMY')).toBe(false);
    });
  });

  describe('input and picker interation', () => {
    let dateChangeFn;
    let inputChangeFn;

    beforeEach(() => {
      dateChangeFn = jest.fn();
      inputChangeFn = jest.fn();
      render(<DateInput onDateChange={dateChangeFn} onInputChange={inputChangeFn} />);
      fireEvent.click(screen.getByLabelText('Date Input'));
    });

    afterEach(() => {
      dateChangeFn = null;
      inputChangeFn = null;
    });

    it('calls onInputChange when the input value changes', async () => {
      expect(inputChangeFn).not.toHaveBeenCalled();
      await userEvent.type(screen.getByRole('textbox'), '4')
      expect(inputChangeFn).toHaveBeenCalled();
    });

    it('calls onDateChange when user types a VALID freeform date', async () => {
      expect(dateChangeFn).not.toHaveBeenCalled();
      await userEvent.type(screen.getByRole('textbox'), '4/20/2020')
      expect(dateChangeFn).toHaveBeenCalled();
    });

    it('does not call onDateChange when user types an INCOMPLETE freeform date', async () => {
      expect(dateChangeFn).not.toHaveBeenCalled();
      await userEvent.type(screen.getByRole('textbox'), '2/3')
      expect(dateChangeFn).not.toHaveBeenCalled();
    });

    it('does not call onDateChange when user types an INVALID freeform date', async () => {
      expect(dateChangeFn).not.toHaveBeenCalled();
      await userEvent.type(screen.getByRole('textbox'), '2/30/2020')
      expect(dateChangeFn).not.toHaveBeenCalled();
    });

    it('calls onDateChange when user selects a day in the picker', () => {
      expect(dateChangeFn).not.toHaveBeenCalled();
      fireEvent.click(screen.getByRole('gridcell', { name: 'Tue Jul 07 2020' }));
      expect(dateChangeFn).toHaveBeenCalled();
    });

    it('updates inupt value when user selects a day in the picker', () => {
      fireEvent.click(screen.getByText('7'));
      expect(screen.getByRole('textbox').value).toBe('07/07/2020'); // MM/DD/YYYY === 10 chars
      expect(screen.getByRole('textbox').value).toHaveLength(10); // MM/DD/YYYY === 10 chars
    });

    it('sets DayPicker selected date correctly from input', async () => {
      await userEvent.type(screen.getByRole('textbox'), '4/20/2020')
      expect(screen.getByRole('gridcell', { selected: true, name: 'Mon Apr 20 2020' })).toBeTruthy()
    });

    it('clears selected date when user backspaces out the input', async () => {
      expect(dateChangeFn).not.toHaveBeenCalled();
      await userEvent.type(screen.getByRole('textbox'), '4/20/2020')
      expect(dateChangeFn).toHaveBeenCalled();

      expect(screen.getByRole('gridcell', { selected: true, name: 'Mon Apr 20 2020' })).toBeTruthy()

      await userEvent.type(screen.getByRole('textbox'), '{selectall}')
      await userEvent.type(screen.getByRole('textbox'), '{backspace}')

      // did the callback fire with null?
      expect(dateChangeFn).toHaveBeenCalledWith(null);

      // is the date cleared in the picker?
      expect(screen.queryByRole('gridcell', { selected: true, name: 'Mon Apr 20 2020' })).toBeNull()
    });

  });

  describe('Date formats', () => {
    it('uses correct placeholder for a given format', () => {
      Object.keys(DATE_FORMAT_MAP).forEach((format) => {
        render(<DateInput dateFormat={format} />);
        expect(screen.getByPlaceholderText(DATE_FORMAT_MAP[format])).toBeTruthy();
      });
    });

    it('formats default date in input value correctly for a given format', () => {
      const expectedValues = [
        '06/01/2020',
        '01/06/2020',
        '2020/06/01',
      ];
      Object.keys(DATE_FORMAT_MAP).forEach((format, i) => {
        render(
          <DateInput
            dateFormat={format}
            defaultDate={new Date('June 1 2020')}
          />
        );
        expect(screen.getByDisplayValue(expectedValues[i])).toBeTruthy();
      });
    });
  });

});
