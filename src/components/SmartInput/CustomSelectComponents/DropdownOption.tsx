import React from 'react';
import {
  getIconName,
  getItemType,
  SEARCH_TERM_RESEARCH,
  SEARCH_TERM_TABS,
} from '../utils';
import cc from 'classcat';
import CenteredHighlightedText from './CenteredHighlightedText';
import HighlightedText from './HighlightedText';
import { OptionProps } from '..';

export interface BaseDropdownOptionProps {
  option: OptionProps;
  query?: string;
  onOptionClick?: () => void;
  optionColor?: string;
}
export interface DropdownOptionProps extends BaseDropdownOptionProps {
  type?: 'condensed' | 'detailed';
}

const DetailedDropdownOption = ({
  option,
  query,
  optionColor,
  onOptionClick = () => {},
}: BaseDropdownOptionProps): JSX.Element => {
  const {
    boolean,
    category,
    defaultType = '',
    extraInfo = '',
    text = '',
    alias = '',
    isExpert,
  } = option;
  const isTabDefaultType = SEARCH_TERM_TABS.includes(defaultType);
  const optionStyle = { color: optionColor };
  const suggestedText = alias ? `${text} (${alias})` : text;
  return (
    <div
      className={cc([
        'smart-input-option display--flex',
        {
          'border--bottom': defaultType === SEARCH_TERM_RESEARCH,
        },
      ])}
      data-testid="smart-header-input-option"
      data-sugg-type={category}
      style={optionStyle}
      title={text}
      onMouseDown={onOptionClick}
      role="option"
    >
      <div className={'optionLeft'}>
        <span className={'searchItemType'} data-test="cbi-type-search">
          {getItemType(defaultType, isExpert)}
        </span>
      </div>
      <div className={'optionRight'}>
        {isTabDefaultType ? (
          <span
            data-testid="keyword"
            className="display--block wrap--singleLine--truncate span--100"
          >
            with keyword &quot;<span className="fontWeight--bold">{text}</span>&quot;
          </span>
        ) : (
          <CenteredHighlightedText suggestion={suggestedText} query={query}>
            {boolean && (
              <span data-testid="boolean" className={'bool'}>
                {boolean}
              </span>
            )}
            <HighlightedText
              className={'extra-info'}
              suggestion={extraInfo}
              query={query}
            />
          </CenteredHighlightedText>
        )}
      </div>
    </div>
  );
};

const CondensedDropdownOption = ({
  option,
  query,
  optionColor,
  onOptionClick = () => {},
}: BaseDropdownOptionProps): JSX.Element => {
  const {
    boolean,
    category,
    extraInfo = '',
    text = '',
    alias = '',
    defaultType,
    isExpert,
  } = option;
  const optionStyle = { color: optionColor };
  const suggestedText = alias ? `${text} (${alias})` : text;
  const Icon = getIconName(defaultType, isExpert);
  return (
    <div
      className={'smart-input-option'}
      data-testid="smart-custom-input-option"
      data-sugg-type={category}
      style={optionStyle}
      onMouseDown={onOptionClick}
      role="option"
    >
      <span className={'suggestionIcon'} data-test="cbi-icon-search">
        <Icon size="xs" />
      </span>
      <HighlightedText suggestion={suggestedText} query={query} />
      <span className={'bool'}>{boolean}</span>
      <HighlightedText
        className={'custom-query-extra-info'}
        suggestion={extraInfo}
        query={query}
      />
    </div>
  );
};

const DropdownOption = ({
  type = 'condensed',
  ...props
}: DropdownOptionProps): JSX.Element => {
  return type === 'condensed' ? (
    <CondensedDropdownOption {...props} />
  ) : (
    <DetailedDropdownOption {...props} />
  );
};

export default DropdownOption;
