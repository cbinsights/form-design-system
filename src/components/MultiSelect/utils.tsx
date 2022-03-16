import {
  CompanyIcon,
  HashtagIcon,
  CollectionExpertIcon,
  CollectionPublicIcon,
  UserIcon,
  SearchIcon,
} from 'icons/react';
import React from 'react';
import {
  DropdownOption,
  DropdownOptionProps,
} from './CustomSelectComponents/DropdownOption';

export const RESEARCH = 'research';
export const COMPANY = 'company';
export const INVESTOR = 'investor';
export const CXN = 'collection';
export const TAG = 'tag';
export const ENTITY = 'entity';
export const PERSON = 'person';
export const ORGANIZATION = 'organization';
export const SEARCH_TERM = 'Search term';
export const SEARCH_TERM_RESEARCH = 'Research search term';
export const SEARCH_TERM_CURRENT_TAB = 'Current tab search term';
export const SEARCH_TERM_EARNINGS = 'Earning Trans. search term';
export const SEARCH_TERM_DEALS = 'Deals search term';
export const SEARCH_TERM_INVESTORS = 'Investors tab search term';
export const SEARCH_TERM_PATENTS = 'Patents search term';
export const SEARCH_TERM_NEWS = 'News search term';

export const SEARCH_TERM_TABS = [
  SEARCH_TERM,
  SEARCH_TERM_RESEARCH,
  SEARCH_TERM_CURRENT_TAB,
  SEARCH_TERM_EARNINGS,
  SEARCH_TERM_DEALS,
  SEARCH_TERM_INVESTORS,
  SEARCH_TERM_PATENTS,
  SEARCH_TERM_NEWS,
];

export const getValueType = (defaultType?: string, isExpert?: boolean): string => {
  switch (defaultType) {
    case INVESTOR:
    case COMPANY:
    case ORGANIZATION:
      return 'Organization';
    case TAG:
      return 'Tag';
    case CXN:
      return isExpert ? 'Expert Collection' : 'Your Collection';
    case PERSON:
      return 'People';
    case RESEARCH:
      return 'Research';
    default:
      return 'Keyword';
  }
};

export const getIcon = (defaultType?: string, isExpert?: boolean): JSX.Element => {
  switch (defaultType) {
    case INVESTOR:
    case COMPANY:
      return <CompanyIcon size="xs" />;
    case TAG:
      return <HashtagIcon size="xs" />;
    case CXN:
      return isExpert ? (
        <CollectionExpertIcon size="xs" />
      ) : (
        <CollectionPublicIcon size="xs" />
      );

    case PERSON:
      return <UserIcon size="xs" />;

    default:
      return <SearchIcon size="xs" />;
  }
};

export const getItemType = (defaultType?: string, isExpert?: boolean): string => {
  switch (defaultType) {
    case INVESTOR:
      return 'Investor';
    case COMPANY:
      return 'Company';
    case TAG:
      return 'Tag';
    case CXN:
      return isExpert ? 'Expert Collection' : 'Your Collection';
    case PERSON:
      return 'People';
    case RESEARCH:
      return 'Research';
    case SEARCH_TERM_RESEARCH:
      return 'View Research';
    case SEARCH_TERM:
      return 'View Companies';
    case SEARCH_TERM_CURRENT_TAB:
      return 'View Current Tab';
    case SEARCH_TERM_EARNINGS:
      return 'View Earning Trans.';
    case SEARCH_TERM_DEALS:
      return 'View Deals';
    case SEARCH_TERM_INVESTORS:
      return 'View Investors';
    case SEARCH_TERM_PATENTS:
      return 'View Patents';
    case SEARCH_TERM_NEWS:
      return 'View News';
    default:
      return 'Keyword';
  }
};

export const getFormatOptionLabel = (props: DropdownOptionProps): JSX.Element => {
  return <DropdownOption {...props} />;
};
