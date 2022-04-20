import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MultiSelect from '.';
import { mockOptions } from './mockData';

describe('<MultiSelect />', () => {
  it('renders <MultiSelect />', () => {
    render(<MultiSelect />);
    expect(screen.queryByRole('combobox')).toBeInTheDocument();
  });

  it('changes value on user input', () => {
    render(<MultiSelect />);
    const input = screen.getByRole<HTMLInputElement>('combobox');
    userEvent.type(input, 'apple');
    expect(input.value).toEqual('apple');
  });

  it('shows dropdown with options on click', () => {
    render(<MultiSelect options={mockOptions.slice(0, 5)} />);
    const input = screen.getByRole<HTMLInputElement>('combobox');
    userEvent.click(input);
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(5);
  });

  it('does not show dropdown with options on focus', () => {
    render(<MultiSelect options={mockOptions.slice(0, 5)} openMenuOnClick={false} />);
    const input = screen.getByRole<HTMLInputElement>('combobox');
    userEvent.click(input);
    const options = screen.queryAllByRole('option');
    expect(options).toHaveLength(0);
  });

  it('renders selected items', () => {
    render(<MultiSelect searchItems={mockOptions.slice(0, 2)} />);
    const selected = screen.getAllByRole('listitem');
    expect(selected).toHaveLength(2);
  });

  it('clears elements when user clicks on clear button', () => {
    render(<MultiSelect options={mockOptions.slice(0, 2)} isClearable={true} />);
    const input = screen.getByRole<HTMLInputElement>('combobox');
    userEvent.click(input);
    const options = screen.getAllByRole('option');
    userEvent.click(options[0]);
    let selected = screen.getAllByRole('listitem');
    expect(selected).toHaveLength(1);
    const clear = screen.getByRole('button');
    userEvent.click(clear);
    selected = screen.queryAllByRole('listitem');
    expect(selected).toHaveLength(0);
  });
});
