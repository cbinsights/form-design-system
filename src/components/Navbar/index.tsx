import React, { useState, memo } from 'react';
import ActionsArrowDownIcon from 'icons/react/ActionsArrowDownIcon';
import ActionsArrowUpIcon from 'icons/react/ActionsArrowUpIcon';
import { IconButton } from 'components';
import HamburgerBarsIcon from 'icons/react/HamburgerBarsIcon';
import DenyIcon from 'icons/react/DenyIcon';
import CBILogo from './CBI_Logo_White.svg';
import {
  WhoWeServeDropdown,
  HowWeHelpDropdown,
  WhatWeOfferDropdown,
  ResourcesDropdown,
} from './constants';
import NavBarDropdown from './NavbarDropdown';

const NAV_LIST = 'navList';
const WHO_WE_SERVE = 'whoWeServe';
const HOW_WE_HELP = 'howWeHelp';
const WHAT_WE_OFFER = 'whatWeOffer';
const RESOURCES = 'resources';

const DEFAULT_STATE: { [key: string]: boolean } = {
  [NAV_LIST]: false,
  [WHO_WE_SERVE]: false,
  [HOW_WE_HELP]: false,
  [WHAT_WE_OFFER]: false,
  [RESOURCES]: false,
};

export type NavBarProps = {
  domain: string;
  utmContext: string;
};

const NavBar = ({ domain, utmContext }: NavBarProps): JSX.Element => {
  const [showClass, setShowClass] = useState(DEFAULT_STATE);

  const handleClick = (sectionName: string): void => {
    setShowClass({ ...showClass, [sectionName]: !showClass[sectionName] });
  };

  const getArrowUpOrDown = (isOpen: boolean, sectionName: string): JSX.Element => (
    <>
      <div className={'FDSnavmobileIconButton'}>
        <IconButton
          Icon={isOpen ? ActionsArrowUpIcon : ActionsArrowDownIcon}
          onClick={() => handleClick(sectionName)}
          label="dropdown"
        />
      </div>
      <div className={'FDSnaviconButton'}>
        <ActionsArrowDownIcon />
      </div>
    </>
  );

  return (
    <header id="masthead" className="FDSnavnav" role="navigation">
      <div className={'FDSnavtopContainer'}>
        <ul id="utility-menu" className={'FDSnavutilityBar'}>
          <li>
            <a
              href={`${domain}/what-we-offer/technology-vendors/`}
              className={'FDSnavutilityBarLink'}
            >
              Technology Vendors
            </a>
          </li>
          <li>
            <a href={`${domain}/research/`} className={'FDSnavutilityBarLink'}>
              Recent Research
            </a>
          </li>
          <li>
            <a href={`${domain}/newsletter/`} className={'FDSnavutilityBarLink'}>
              Newsletter
            </a>
          </li>
          <li>
            <a href={`${domain}/media-support/`} className={'FDSnavutilityBarLink'}>
              Media Support
            </a>
          </li>
          <li>
            <a href={`${domain}/login`} className={'FDSnavutilityBarLink'}>
              Login
            </a>
          </li>
        </ul>
      </div>
      <div className={'FDSnavcontainer'}>
        <div className={'FDSnavsiteBranding'}>
          <a href={`${domain}`}>
            <img
              className={'FDSnavlogo'}
              width="168"
              height="20"
              alt="CB Insights Logo"
              src={CBILogo}
            />
          </a>
        </div>
        <nav id="site-navigation" className={'FDSnavsiteNavigation'}>
          <div className={'FDSnavmenuButton'}>
            <IconButton
              size="m"
              Icon={showClass.navList ? DenyIcon : HamburgerBarsIcon}
              onClick={() => handleClick(NAV_LIST)}
              theme="ghost"
              label="Menu"
            />
          </div>
          <div className={'FDSnavsiteNavigationWrap'}>
            <ul
              id="site-menu"
              className={`FDSnavnavBar ${showClass.navList ? 'FDSnavshow' : ''}`}
            >
              <li className={'FDSnavnavBarListItem'}>
                <a className={'FDSnavdropdownItemLink'}>Who We Serve</a>
                <span className={'FDSnavdropdownButton'}>
                  {getArrowUpOrDown(showClass.whoWeServe, WHO_WE_SERVE)}
                </span>
                <NavBarDropdown
                  content={WhoWeServeDropdown(domain)}
                  showDropdown={showClass.whoWeServe}
                />
              </li>
              <li className={'FDSnavnavBarListItem'}>
                <a className={'FDSnavdropdownItemLink'}>How We Help</a>
                <span className={'FDSnavdropdownButton'}>
                  {getArrowUpOrDown(showClass.howWeHelp, HOW_WE_HELP)}
                </span>
                <NavBarDropdown
                  content={HowWeHelpDropdown(domain)}
                  showDropdown={showClass.howWeHelp}
                />
              </li>
              <li className={'FDSnavnavBarListItem'}>
                <a className={'FDSnavdropdownItemLink'}>What We Offer</a>
                <span className={'FDSnavdropdownButton'}>
                  {getArrowUpOrDown(showClass.whatWeOffer, WHAT_WE_OFFER)}
                </span>
                <NavBarDropdown
                  content={WhatWeOfferDropdown(domain)}
                  showDropdown={showClass.whatWeOffer}
                />
              </li>
              <li className={'FDSnavnavBarListItem'}>
                <a className={'FDSnavdropdownItemLink'}>Resources</a>
                <span className={'FDSnavdropdownButton'}>
                  {getArrowUpOrDown(showClass.resources, RESOURCES)}
                </span>
                <NavBarDropdown
                  content={ResourcesDropdown(domain)}
                  showDropdown={showClass.resources}
                />
              </li>
              <li className={'FDSnavnavBarListItem'}>
                <a className={'FDSnavdropdownItemLink'} href={`${domain}/about/`}>
                  About Us
                </a>
              </li>
            </ul>
            <a
              href={`https://www.cbinsights.com/research-request-a-demo?${utmContext}`}
              className={'FDSnavrequestDemoButton'}
            >
              Request a Demo
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default memo(NavBar);
