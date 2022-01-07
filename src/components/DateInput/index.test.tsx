import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DateInput, { DateFormat, DATE_FORMAT_MAP } from '.';
import { getKeys } from 'util/index';

describe('DateInput component', () => {
  let dateChangeFn: null | (() => Date);
  let inputChangeFn: null | (() => Date);

  beforeEach(() => {
    dateChangeFn = jest.fn();
    inputChangeFn = jest.fn();
    render(
      <DateInput
        onDateChange={dateChangeFn}
        onInputChange={inputChangeFn}
        defaultDate="2020-07-07"
      />
    );
    fireEvent.focus(screen.getByLabelText('Date Input'));
  });

  afterEach(() => {
    dateChangeFn = null;
    inputChangeFn = null;
  });

  it('calls onInputChange when the input value changes', async () => {
    expect(inputChangeFn).not.toHaveBeenCalled();
    await userEvent.type(screen.getByRole('textbox'), '4');
    expect(inputChangeFn).toHaveBeenCalled();
  });

  it('calls onDateChange when user types a VALID freeform date', async () => {
    expect(dateChangeFn).not.toHaveBeenCalled();
    await userEvent.clear(screen.getByRole('textbox'));
    await userEvent.type(screen.getByRole('textbox'), '4/20/2020');
    expect(dateChangeFn).toHaveBeenCalled();
  });

  it('does not call onDateChange when user types an INCOMPLETE freeform date', async () => {
    expect(dateChangeFn).not.toHaveBeenCalled();
    await userEvent.type(screen.getByRole('textbox'), '2/3');
    expect(dateChangeFn).not.toHaveBeenCalled();
  });

  it('does not call onDateChange when user types an INVALID freeform date', async () => {
    expect(dateChangeFn).not.toHaveBeenCalled();
    await userEvent.type(screen.getByRole('textbox'), '2/30/2020');
    expect(dateChangeFn).not.toHaveBeenCalled();
  });

  it('calls onDateChange when user selects a day in the picker', () => {
    expect(dateChangeFn).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole('gridcell', { name: 'Tue Jul 07 2020' }));
    expect(dateChangeFn).toHaveBeenCalled();
  });

  it('updates input value when user selects a day in the picker', () => {
    fireEvent.click(screen.getByRole('gridcell', { name: 'Tue Jul 07 2020' }));
    expect(screen.getByDisplayValue('07/07/2020')).toBeInTheDocument();
  });

  it('clears selected date when user backspaces out the input', async () => {
    expect(dateChangeFn).not.toHaveBeenCalled();
    expect(
      screen.getByRole('gridcell', { selected: true, name: 'Tue Jul 07 2020' })
    ).toBeInTheDocument();
    await userEvent.clear(screen.getByRole('textbox'));
    // did the callback fire with null?
    expect(dateChangeFn).toHaveBeenCalledWith(null);
    // is the date cleared in the picker?
    expect(
      screen.queryByRole('gridcell', { selected: true, name: 'Tue Jul 07 2020' })
    ).toBeNull();
  });
});

describe('Date formats', () => {
  const formats = getKeys(DATE_FORMAT_MAP);
  it('uses correct placeholder for a given format', () => {
    formats.forEach((format: DateFormat) => {
      render(<DateInput dateFormat={format} />);
      expect(screen.getByPlaceholderText(DATE_FORMAT_MAP[format])).toBeInTheDocument();
    });
  });

  it('formats default date in input value correctly for a given format', () => {
    const expectedValues = ['06/01/2020', '01/06/2020', '2020/06/01'];
    formats.forEach((format: DateFormat, i: number) => {
      render(<DateInput dateFormat={format} defaultDate={new Date('June 1 2020')} />);
      expect(screen.getByDisplayValue(expectedValues[i])).toBeInTheDocument();
    });
  });
});
