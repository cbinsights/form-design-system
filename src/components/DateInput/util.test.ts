import { getYearRange, isValidUserDate } from './util';

describe('DateInput utils', () => {
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
      expect(getYearRange(2020, 10, 10, null, null, battleOfHastings)).toMatchObject({
        startYear: 1066,
        endYear: 2031,
      });
      expect(getYearRange(2020, 10, 10, null, null, totalRecall)).toMatchObject({
        startYear: 2010,
        endYear: 2085,
      });
    });

    it('returns bounded date range when minDate and/or maxDate are passed', () => {
      const min = new Date('Jan 1 2018');
      const max = new Date('Oct 1 2020');
      expect(getYearRange(2020, 1, 1, min)).toMatchObject({
        startYear: 2018,
        endYear: 2022,
      });
      expect(getYearRange(2020, 1, 1, null, max)).toMatchObject({
        startYear: 2019,
        endYear: 2021,
      });
      expect(getYearRange(2020, 1, 1, min, max)).toMatchObject({
        startYear: 2018,
        endYear: 2021,
      });
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
});
