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
  if (defaultType === INVESTOR || defaultType === COMPANY || defaultType === ORGANIZATION)
    return 'Organization';
  if (defaultType === TAG) return 'Tag';
  if (defaultType === CXN && isExpert) return 'Expert Collection';
  if (defaultType === CXN) return 'Your Collection';
  if (defaultType === PERSON) return 'People';
  if (defaultType === RESEARCH) return 'Research';
  return 'Keyword';
};

export const getIconName = (defaultType?: string, isExpert?: boolean): any => {
  if (defaultType === INVESTOR || defaultType === COMPANY) return 'CompanyIcon';
  if (defaultType === TAG) return 'HashtagIcon';
  if (defaultType === CXN && isExpert) return 'CollectionExpertIcon';
  if (defaultType === CXN) return 'CollectionPublicIcon';
  if (defaultType === PERSON) return 'UserIcon';
  return 'SearchIcon';
};

export const getItemType = (defaultType?: string, isExpert?: boolean): string => {
  if (defaultType === INVESTOR) return 'Investor';
  if (defaultType === COMPANY) return 'Company';
  if (defaultType === TAG) return 'Tag';
  if (defaultType === CXN && isExpert) return 'Expert Collection';
  if (defaultType === CXN) return 'Your Collection';
  if (defaultType === PERSON) return 'People';
  if (defaultType === RESEARCH) return 'Research';
  if (defaultType === SEARCH_TERM_RESEARCH) return 'View Research';
  if (defaultType === SEARCH_TERM) return 'View Companies';
  if (defaultType === SEARCH_TERM_CURRENT_TAB) return 'View Current Tab';
  if (defaultType === SEARCH_TERM_EARNINGS) return 'View Earning Trans.';
  if (defaultType === SEARCH_TERM_DEALS) return 'View Deals';
  if (defaultType === SEARCH_TERM_INVESTORS) return 'View Investors';
  if (defaultType === SEARCH_TERM_PATENTS) return 'View Patents';
  if (defaultType === SEARCH_TERM_NEWS) return 'View News';
  return 'Keyword';
};
