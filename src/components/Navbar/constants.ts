import ProfessionalServicesImage from 'assets/images/professionalservices.png';
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
        itemName: 'IT',
        url: `${site}/who-we-serve/head-of-it/`,
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
      url: `${site}/who-we-serve/industries/professional-services/`,
      imageSrc: ProfessionalServicesImage,
      itemName: 'Professional Services',
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
        itemName: 'Industrials',
        url: `${site}/who-we-serve/industries/industrials/`,
      },
      {
        itemName: 'Financial Services',
        url: `${site}/who-we-serve/industries/financial-services/`,
      },
    ],
  },
  {
    itemName: 'Success Stories',
    url: `${site}/resources/case-studies/`,
    subMenu: [],
  },
];

export const howWeHelpDropdown = (site: string): DropdownMenu[] => [
  {
    itemName: 'Understand Tech Markets',
    url: `${site}/how-we-help/understand-tech-markets/`,
    subMenu: [],
  },
  {
    itemName: 'Anticipate Competitor Strategy',
    url: `${site}/how-we-help/competitor-strategy/`,
    subMenu: [],
  },
  {
    itemName: 'Determine Tech Strategy',
    url: `${site}/how-we-help/create-tech-strategy/`,
    subMenu: [],
  },
  {
    itemName: 'Connect with Tech Vendors & Partners',
    url: `${site}/how-we-help/find-tech-vendors/`,
    subMenu: [],
  },
  {
    itemName: 'Turbocharge Digital Transformation',
    url: `${site}/how-we-help/digital-transformation/`,
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
    itemName: 'API & Data Feeds',
    url: `${site}/what-we-offer/api-data-feeds/`,
    subMenu: [],
  },
  {
    itemName: 'Analyst Briefings',
    url: `${site}/what-we-offer/technology-vendors//`,
    subMenu: [],
  },
  {
    itemName: 'Pricing',
    url: `${site}/what-we-offer/pricing/`,
    subMenu: [],
  },
];

export const aboutUsDropdown = (site: string): DropdownMenu[] => [
  {
    itemName: 'Overview',
    url: `${site}/about/`,
    subMenu: [],
  },
  {
    itemName: 'Our teams',
    url: `${site}/about/`,
    subMenu: [
      {
        itemName: 'Business Development',
        url: `${site}/about/business-development/`,
      },
      {
        itemName: 'Engineering',
        url: `${site}/about/engineering/`,
      },
      {
        itemName: 'Operations',
        url: `${site}/about/operations/`,
      },
      {
        itemName: 'Product',
        url: `${site}/about/product/`,
      },
      {
        itemName: 'See all →',
        url: `${site}/about/#work-with-us`,
      },
    ],
  },
  {
    itemName: 'Open Jobs',
    url: `${site}/about/#work-with-us`,
    subMenu: [],
  },
];
