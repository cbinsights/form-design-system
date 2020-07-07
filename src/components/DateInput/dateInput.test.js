import React from 'react';
import { mount } from 'enzyme';

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
    let wrapper;
    let input;

    beforeEach(() => {
      dateChangeFn = jest.fn();
      inputChangeFn = jest.fn();
      wrapper = mount(<DateInput onDateChange={dateChangeFn} onInputChange={inputChangeFn} />);
      wrapper.find('input').simulate('click'); // open the picker for every test
      input = wrapper.find('input');
    });

    afterEach(() => {
      dateChangeFn = null;
      inputChangeFn = null;
      wrapper = null;
      input = null;
    });

    it('calls onInputChange when the input value changes', () => {
      expect(inputChangeFn).not.toHaveBeenCalled();
      input.simulate('change', { target: { value: '4' } });
      expect(inputChangeFn).toHaveBeenCalled();
    });

    it('calls onDateChange when user types a VALID freeform date', () => {
      expect(dateChangeFn).not.toHaveBeenCalled();
      input.simulate('change', { target: { value: '4/20/2020' } });
      expect(dateChangeFn).toHaveBeenCalled();
    });

    it('does not call onDateChange when user types an INCOMPLETE freeform date', () => {
      expect(dateChangeFn).not.toHaveBeenCalled();
      input.simulate('change', { target: { value: '2/3' } });
      expect(dateChangeFn).not.toHaveBeenCalled();
    });

    it('does not call onDateChange when user types an INVALID freeform date', () => {
      expect(dateChangeFn).not.toHaveBeenCalled();
      input.simulate('change', { target: { value: '2/30/2020' } });
      expect(dateChangeFn).not.toHaveBeenCalled();
    });

    it('calls onDateChange when user selects a day in the picker', () => {
      expect(dateChangeFn).not.toHaveBeenCalled();
      wrapper.find('Day').at(7).simulate('click');
      expect(dateChangeFn).toHaveBeenCalled();
    });

    it('updates inupt value when user selects a day in the picker', () => {
      wrapper.find('Day').at(7).simulate('click');
      expect(input.instance().value).toHaveLength(10); // MM/DD/YYYY === 10 chars
    });

    it('sets DayPicker selected date correctly from input', () => {
      input.simulate('change', { target: { value: '4/20/2020' } });
      const dayPickerDate = wrapper.find('DayPicker').prop('month');
      expect(dayPickerDate.getMonth()).toBe(3);
      expect(dayPickerDate.getFullYear()).toBe(2020);
    });

    it('clears selected date when user backspaces out the input', () => {
      const dayPickerSelectedDays = wrapper.find('DayPicker').prop('selectedDays');
      expect(dateChangeFn).not.toHaveBeenCalled();
      input.simulate('change', { target: { value: '4/20/2020' } });
      expect(dateChangeFn).toHaveBeenCalled();
      input.simulate('change', { target: { value: '' } });

      // did the callback fire with null?
      expect(dateChangeFn).toHaveBeenCalledWith(null);

      // is the date cleared in the picker?
      expect(dayPickerSelectedDays).toBe(null);
    });

  });

  describe('Date formats', () => {
    it('uses correct placeholder for a given format', () => {
      Object.keys(DATE_FORMAT_MAP).forEach((format) => {
        const wrapper = mount(<DateInput dateFormat={format} />);
        const placeholder = wrapper.find('input').prop('placeholder');
        expect(placeholder).toBe(DATE_FORMAT_MAP[format]);
      });
    });

    it('formats default date in input value correctly for a given format', () => {
      const expectedValues = [
        '06/01/2020',
        '01/06/2020',
        '2020/06/01',
      ];
      Object.keys(DATE_FORMAT_MAP).forEach((format, i) => {
        const wrapper = mount(
          <DateInput
            dateFormat={format}
            defaultDate={new Date('June 1 2020')}
          />
        );
        const inputValue = wrapper.find('input').prop('value');
        expect(inputValue).toBe(expectedValues[i]);
      });
    });
  });

});
