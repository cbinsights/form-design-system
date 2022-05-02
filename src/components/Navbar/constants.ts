import ThreeMImage from 'assets/images/3M_Homepage.png';
import FeedsGeneral from 'assets/images/Feeds_General.svg';
import WellsFargoImage from 'assets/images/Wells_Fargo_Homepage.png';

type MenuItem = {
  itemName: string;
  url: string;
};

type SubMenuFeature = {
  url: string;
  imageSrc: string;
  itemName: string;
};

export type DropdownMenu = {
  itemName: string;
  url: string;
  subMenu: MenuItem[];
  subMenuFeaturedItem?: SubMenuFeature;
};

export const whoWeServeDropdown = (site: string): DropdownMenu[] => [
  {
    itemName: 'Function',
    url: '',
    subMenuFeaturedItem: {
      url: `${site}/resources/case-studies/wells-fargo-case-study/`,
      imageSrc: WellsFargoImage,
      itemName: 'Wells Fargo Success Story',
    },
    subMenu: [
      {
        itemName: 'Corporate Strategy',
        url: `${site}/who-we-serve/function/corporate-strategy/`,
      },
      {
        itemName: 'Corporate Venture Capital',
        url: `${site}/who-we-serve/function/corporate-venture-capital/`,
      },
      {
        itemName: 'Venture Capital',
        url: `${site}/who-we-serve/function/venture-capital/`,
      },
      {
        itemName: 'Corporate Innovation',
        url: `${site}/who-we-serve/function/corporate-innovation/`,
      },
    ],
  },
  {
    itemName: 'Industries',
    url: '',
    subMenuFeaturedItem: {
      url: `${site}/resources/case-studies/3m-case-study/`,
      imageSrc: ThreeMImage,
      itemName: '3M Success Story',
    },
    subMenu: [
      {
        itemName: 'Consumer',
        url: `${site}/who-we-serve/industries/consumer/`,
      },
      {
        itemName: 'Tech',
        url: `${site}/who-we-serve/industries/tech/`,
      },
      {
        itemName: 'Insurance',
        url: `${site}/who-we-serve/industries/insurance/`,
      },
      {
        itemName: 'Healthcare',
        url: `${site}/who-we-serve/industries/healthcare/`,
      },
      {
        itemName: 'Financial Services',
        url: `${site}/who-we-serve/industries/financial-services/`,
      },
    ],
  },
];

export const howWeHelpDropdown = (site: string): DropdownMenu[] => [
  {
    itemName: 'Create Tech Strategy',
    url: `${site}/how-we-help/create-tech-strategy/`,
    subMenu: [],
  },
  {
    itemName: 'Find Tech Vendors',
    url: `${site}/how-we-help/find-tech-vendors/`,
    subMenu: [],
  },
  {
    itemName: 'Turbocharge Digital Transformation',
    url: `${site}/how-we-help/identify-disruptors/`,
    subMenu: [],
  },
  {
    itemName: 'Track Competitors',
    url: `${site}/how-we-help/track-competitors/`,
    subMenu: [],
  },
  {
    itemName: 'Understand Tech Markets',
    url: `${site}/how-we-help/understand-tech-markets/`,
    subMenu: [],
  },
];

export const whatWeOfferDropdown = (site: string): DropdownMenu[] => [
  {
    itemName: 'Platform',
    url: `${site}/what-we-offer/platform/`,
    subMenuFeaturedItem: {
      url: `${site}/what-we-offer/platform/`,
      imageSrc: FeedsGeneral,
      itemName: 'Platform Overview',
    },
    subMenu: [
      {
        itemName: 'Overview',
        url: `${site}/what-we-offer/platform/`,
      },
      {
        itemName: 'Market Analytics and Visualizations',
        url: `${site}/what-we-offer/market-analytics-and-visualizations/`,
      },
      {
        itemName: 'Team Management and Collaboration',
        url: `${site}/what-we-offer/team-management-and-collaboration/`,
      },
      {
        itemName: 'Technology Search Engine',
        url: `${site}/what-we-offer/technology-search-engine/`,
      },
    ],
  },
  {
    itemName: 'Data',
    url: `${site}/what-we-offer/data/`,
    subMenu: [],
  },
  {
    itemName: 'Research',
    url: `${site}/what-we-offer/research/`,
    subMenu: [],
  },
  {
    itemName: 'Our Pricing',
    url: `${site}/what-we-offer/pricing/`,
    subMenu: [],
  },
  {
    itemName: 'API & Data Feeds',
    url: `${site}/what-we-offer/api-data-feeds/`,
    subMenu: [],
  },
];

export const resourcesDropdown = (site: string): DropdownMenu[] => [
  {
    itemName: 'Success Stories',
    url: `${site}/resources/case-studies/`,
    subMenu: [],
  },
  {
    itemName: 'Events',
    url: `https://events.cbinsights.com/`,
    subMenu: [],
  },
];
