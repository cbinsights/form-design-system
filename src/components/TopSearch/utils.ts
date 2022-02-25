export const RESEARCH = 'research';
export const COMPANY = 'company';
export const INVESTOR = 'investor';
export const CXN = 'collection';
export const TAG = 'tag';
export const ENTITY = 'entity';
export const PERSON = 'person';
export const ORGANIZATION = 'organization';

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
