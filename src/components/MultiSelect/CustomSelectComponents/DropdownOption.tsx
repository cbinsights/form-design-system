import React from 'react';
import { getIcon, getItemType, SEARCH_TERM_RESEARCH, SEARCH_TERM_TABS } from '../utils';
import CenteredHighlightedText from './CenteredHighlightedText';
import HighlightedText from './HighlightedText';
import { OptionProps } from '..';

export interface SuggestionProps {
  suggestion: OptionProps;
}

export const SuggestionIcon = ({ suggestion }: SuggestionProps): JSX.Element => (
  <span className={'suggestionIcon'} data-test="cbi-icon-search">
    {getIcon(suggestion.defaultType, suggestion.isExpert)}
  </span>
);

export const SuggestionType = ({ suggestion }: SuggestionProps): JSX.Element => (
  <span className={'searchItemType'} data-test="cbi-type-search">
    {getItemType(suggestion.defaultType, suggestion.isExpert)}
  </span>
);

export interface DropdownOptionProps {
  selectValue: OptionProps;
  query?: string;
  isHeader?: boolean;
  handleOptionClick?: () => void;
  optionColor?: string;
}

export const DropdownOption = ({
  selectValue,
  query,
  isHeader = false,
  optionColor,
  handleOptionClick = () => {},
}: DropdownOptionProps): JSX.Element => {
  const {
    boolean,
    category,
    extraInfo = '',
    text = '',
    defaultType = '',
    alias = '',
  } = selectValue;
  const optionStyle = { color: optionColor };

  const isTabDefaultType = SEARCH_TERM_TABS.includes(defaultType);
  const SuggestionComponent = isHeader ? SuggestionType : SuggestionIcon;
  const suggestedText = alias ? `${text} (${alias})` : text;

  const TSEnhancementsLayout = (
    <div
      className={`
        'smart-input-option'}
        display--flex
        ${defaultType === SEARCH_TERM_RESEARCH ? 'border--bottom' : ''}
      `}
      data-test="smart-input-option"
      data-sugg-type={category}
      style={optionStyle}
      title={text}
      onMouseDown={handleOptionClick}
      role="presentation"
    >
      <div className={'optionLeft'}>
        <SuggestionComponent suggestion={selectValue} />
      </div>
      <div className={'optionRight'}>
        {isTabDefaultType ? (
          <span className="display--block wrap--singleLine--truncate span--100">
            with keyword &quot;<span className="fontWeight--bold">{text}</span>&quot;
          </span>
        ) : (
          <CenteredHighlightedText suggestion={suggestedText} query={query}>
            {boolean && <span className={'bool'}>{boolean}</span>}
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

  const CustomQueryInputLayout = (
    <div
      className={'smart-input-option'}
      data-test="smart-input-option"
      data-sugg-type={category}
      style={optionStyle}
      onMouseDown={handleOptionClick}
      role="presentation"
    >
      <SuggestionComponent suggestion={selectValue} />
      <HighlightedText suggestion={suggestedText} query={query} />
      <span className={'bool'}>{boolean}</span>
      <HighlightedText
        className={'custom-query-extra-info'}
        suggestion={extraInfo}
        query={query}
      />
    </div>
  );

  return !isHeader ? CustomQueryInputLayout : TSEnhancementsLayout;
};
