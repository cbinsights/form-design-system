import { getIconName, getItemType, getValueType } from './utils';

describe('utils', () => {
  describe('getValueType', () => {
    test.each([
      { defaultType: 'collection', isExpert: true, expected: 'Expert Collection' },
      { defaultType: 'collection', isExpert: undefined, expected: 'Your Collection' },
      { defaultType: 'investor', isExpert: undefined, expected: 'Organization' },
      { defaultType: 'company', isExpert: undefined, expected: 'Organization' },
      { defaultType: 'organization', isExpert: undefined, expected: 'Organization' },
      { defaultType: 'tag', isExpert: undefined, expected: 'Tag' },
      { defaultType: 'person', isExpert: undefined, expected: 'People' },
      { defaultType: 'research', isExpert: undefined, expected: 'Research' },
      { defaultType: 'something-else', isExpert: undefined, expected: 'Keyword' },
    ])(
      'returns $expected when defaultType is $defaultType and isExpert is $isExpert',
      ({ defaultType, isExpert, expected }) => {
        expect(getValueType(defaultType, isExpert)).toEqual(expected);
      }
    );
  });

  describe('getIconName', () => {
    test.each([
      { defaultType: 'collection', isExpert: true, expected: 'CollectionExpertIcon' },
      {
        defaultType: 'collection',
        isExpert: undefined,
        expected: 'CollectionPublicIcon',
      },
      { defaultType: 'investor', isExpert: undefined, expected: 'CompanyIcon' },
      { defaultType: 'company', isExpert: undefined, expected: 'CompanyIcon' },
      { defaultType: 'tag', isExpert: undefined, expected: 'HashtagIcon' },
      { defaultType: 'person', isExpert: undefined, expected: 'UserIcon' },
      { defaultType: 'something-else', isExpert: undefined, expected: 'SearchIcon' },
    ])(
      'returns $expected when defaultType is $defaultType and isExpert is $isExpert',
      ({ defaultType, isExpert, expected }) => {
        expect(getIconName(defaultType, isExpert)).toEqual(expected);
      }
    );
  });

  describe('getItemType', () => {
    test.each([
      { defaultType: 'investor', isExpert: undefined, expected: 'Investor' },
      { defaultType: 'company', isExpert: undefined, expected: 'Company' },
      { defaultType: 'tag', isExpert: undefined, expected: 'Tag' },
      { defaultType: 'collection', isExpert: true, expected: 'Expert Collection' },
      { defaultType: 'collection', isExpert: undefined, expected: 'Your Collection' },
      { defaultType: 'tag', isExpert: undefined, expected: 'Tag' },
      { defaultType: 'person', isExpert: undefined, expected: 'People' },
      { defaultType: 'research', isExpert: undefined, expected: 'Research' },
      {
        defaultType: 'Research search term',
        isExpert: undefined,
        expected: 'View Research',
      },
      { defaultType: 'Search term', isExpert: undefined, expected: 'View Companies' },
      {
        defaultType: 'Current tab search term',
        isExpert: undefined,
        expected: 'View Current Tab',
      },
      {
        defaultType: 'Earning Trans. search term',
        isExpert: undefined,
        expected: 'View Earning Trans.',
      },
      { defaultType: 'Deals search term', isExpert: undefined, expected: 'View Deals' },
      {
        defaultType: 'Investors tab search term',
        isExpert: undefined,
        expected: 'View Investors',
      },
      {
        defaultType: 'Patents search term',
        isExpert: undefined,
        expected: 'View Patents',
      },
      { defaultType: 'News search term', isExpert: undefined, expected: 'View News' },
      { defaultType: 'something-else', isExpert: undefined, expected: 'Keyword' },
    ])(
      'returns $expected when defaultType is $defaultType and isExpert is $isExpert',
      ({ defaultType, isExpert, expected }) => {
        expect(getItemType(defaultType, isExpert)).toEqual(expected);
      }
    );
  });
});
