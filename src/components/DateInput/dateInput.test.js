import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

import DateInput, { DATE_FORMAT_MAP } from '.';

describe('DateInput component', () => {
  let dateChangeFn;
  let inputChangeFn;

  beforeEach(() => {
    dateChangeFn = jest.fn();
    inputChangeFn = jest.fn();
    jest
      .spyOn(global.Date, 'now')
      .mockImplementationOnce(() =>
        new Date('2020-07-07').valueOf()
      );
    render(<DateInput onDateChange={dateChangeFn} onInputChange={inputChangeFn} />);
    fireEvent.focus(screen.getByLabelText('Date Input'));
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

  it('updates input value when user selects a day in the picker', () => {
    fireEvent.click(screen.getByRole('gridcell', { name: 'Tue Jul 07 2020' }));
    expect(screen.getByRole('textbox').value).toBe('07/07/2020'); // MM/DD/YYYY === 10 chars
    expect(screen.getByRole('textbox').value).toHaveLength(10); // MM/DD/YYYY === 10 chars
  });

  it('calls onDateChange when user selects a day in the picker', () => {
    expect(dateChangeFn).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole('gridcell', { name: 'Tue Jul 07 2020' }));
    expect(dateChangeFn).toHaveBeenCalled();
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
