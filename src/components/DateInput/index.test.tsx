import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DateInput, { DateFormat } from '.';

describe('DateInput component', () => {
  let dateChangeFn: null | (() => Date);
  let inputChangeFn: null | (() => Date);

  afterEach(() => {
    dateChangeFn = null;
    inputChangeFn = null;
  });

  it('calls onInputChange when the input value changes', () => {
    dateChangeFn = jest.fn();
    inputChangeFn = jest.fn();
    render(
      <DateInput
        onDateChange={dateChangeFn}
        onInputChange={inputChangeFn}
        defaultDate="2020-07-07"
      />
    );

    userEvent.click(screen.getByLabelText('Date Input'));
    expect(inputChangeFn).not.toHaveBeenCalled();
    userEvent.type(screen.getByRole('textbox'), '4');
    expect(inputChangeFn).toHaveBeenCalled();
  });

  it('calls onDateChange when user types a VALID freeform date', () => {
    dateChangeFn = jest.fn();
    inputChangeFn = jest.fn();
    render(
      <DateInput
        onDateChange={dateChangeFn}
        onInputChange={inputChangeFn}
        defaultDate="2020-07-07"
      />
    );

    userEvent.click(screen.getByLabelText('Date Input'));
    expect(dateChangeFn).not.toHaveBeenCalled();
    userEvent.clear(screen.getByRole('textbox'));
    userEvent.type(screen.getByRole('textbox'), '4/20/2020');
    expect(dateChangeFn).toHaveBeenCalled();
  });

  it('does not call onDateChange when user types an INCOMPLETE freeform date', () => {
    dateChangeFn = jest.fn();
    inputChangeFn = jest.fn();
    render(
      <DateInput
        onDateChange={dateChangeFn}
        onInputChange={inputChangeFn}
        defaultDate="2020-07-07"
      />
    );

    userEvent.click(screen.getByLabelText('Date Input'));
    expect(dateChangeFn).not.toHaveBeenCalled();
    userEvent.type(screen.getByRole('textbox'), '2/3');
    expect(dateChangeFn).not.toHaveBeenCalled();
  });

  it('does not call onDateChange when user types an INVALID freeform date', () => {
    dateChangeFn = jest.fn();
    inputChangeFn = jest.fn();
    render(
      <DateInput
        onDateChange={dateChangeFn}
        onInputChange={inputChangeFn}
        defaultDate="2020-07-07"
      />
    );

    userEvent.click(screen.getByLabelText('Date Input'));
    expect(dateChangeFn).not.toHaveBeenCalled();
    userEvent.type(screen.getByRole('textbox'), '2/30/2020');
    expect(dateChangeFn).not.toHaveBeenCalled();
  });

  it('calls onDateChange when user selects a day in the picker', () => {
    dateChangeFn = jest.fn();
    inputChangeFn = jest.fn();
    render(
      <DateInput
        onDateChange={dateChangeFn}
        onInputChange={inputChangeFn}
        defaultDate="2020-07-07"
        popoverProps={{ children: null, isOpen: true }}
      />
    );
    userEvent.click(screen.getByRole('gridcell', { name: 'Tue Jul 07 2020' }));
    expect(dateChangeFn).toHaveBeenCalled();
  });

  it('updates input value when user selects a day in the picker', () => {
    dateChangeFn = jest.fn();
    inputChangeFn = jest.fn();
    render(
      <DateInput
        onDateChange={dateChangeFn}
        onInputChange={inputChangeFn}
        defaultDate="2020-07-07"
        popoverProps={{ children: null, isOpen: true }}
      />
    );
    userEvent.click(screen.getByRole('gridcell', { name: 'Tue Jul 07 2020' }));
    expect(screen.getByDisplayValue('07/07/2020')).toBeInTheDocument();
  });

  it('clears selected date when user backspaces out the input', async () => {
    dateChangeFn = jest.fn();
    inputChangeFn = jest.fn();
    render(
      <DateInput
        onDateChange={dateChangeFn}
        onInputChange={inputChangeFn}
        defaultDate="2020-07-07"
      />
    );
    screen.getByRole('textbox').focus();
    await waitFor(() => {
      screen.getByRole('gridcell', { selected: true, name: 'Tue Jul 07 2020' });
    });
    userEvent.click(
      screen.getByRole('gridcell', { selected: true, name: 'Tue Jul 07 2020' })
    );
    userEvent.clear(screen.getByRole('textbox'));
    // did the callback fire with null?
    expect(dateChangeFn).toHaveBeenCalledWith(null);
    // is the date cleared in the picker?
    expect(
      screen.queryByRole('gridcell', { selected: true, name: 'Tue Jul 07 2020' })
    ).toBeNull();
  });
});

describe('Date formats', () => {
  const formats: DateFormat[] = ['MDY', 'DMY', 'YMD'];
  it('uses correct placeholder for a given format', () => {
    const expected = ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY/MM/DD'];
    formats.forEach((format: DateFormat, index) => {
      render(<DateInput dateFormat={format} />);
      expect(screen.getByPlaceholderText(expected[index])).toBeInTheDocument();
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
