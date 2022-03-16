import React from 'react';
import { getValueType } from '../utils';
import { OptionProps } from '..';
import { Props } from 'react-select';

export interface SelectedValueProps {
  item: OptionProps;
  selectProps: Props<OptionProps, true>;
}

export const SelectedValue = ({ item, selectProps }: SelectedValueProps): JSX.Element => {
  const { text, defaultType, isExpert, type } = item;
  const { setCursorPosition, value, onSetSearchItems } = selectProps;
  const itemIndex = Array.isArray(value) ? value?.findIndex((i) => i === item) : 0;

  const handleClick = () => setCursorPosition?.(itemIndex);

  const handleDoubleClick = () => {
    if (Array.isArray(value)) {
      const deletedItem = value[itemIndex];
      const newValues = value?.filter((val) => val !== deletedItem);
      setCursorPosition?.(itemIndex - 1);
      onSetSearchItems(newValues);
    }
  };

  return (
    <span
      className={`${type} ${type === 'bool' ? `${`bool${text}`}` : ''}`}
      role="presentation"
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      {text}
      {type === 'entity' && (
        <span className="color--secondary fontSize--xs margin--left--xs">
          {getValueType(defaultType, isExpert)}
        </span>
      )}
    </span>
  );
};

export default SelectedValue;
