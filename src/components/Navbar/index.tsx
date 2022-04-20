import React, { useState, memo, useCallback } from 'react';
import cc from 'classcat';
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

type Section = 'navList' | 'whoWeServe' | 'howWeHelp' | 'whatWeOffer' | 'resources';

const DEFAULT_STATE: Record<Section, boolean> = {
  [NAV_LIST]: false,
  [WHO_WE_SERVE]: false,
  [HOW_WE_HELP]: false,
  [WHAT_WE_OFFER]: false,
  [RESOURCES]: false,
};

export type NavBarProps = {
  site: string;
  utmContext: string;
};

const NavBar = ({ site, utmContext }: NavBarProps): JSX.Element => {
  const [showClass, setShowClass] = useState(DEFAULT_STATE);

  const handleClick = (sectionName: Section): void => {
    setShowClass((prevState: Record<Section, boolean>) => ({
      ...prevState,
      [sectionName]: !showClass[sectionName],
    }));
  };

  const getArrowUpOrDown = useCallback(
    (isOpen: boolean, sectionName: Section): JSX.Element => (
      <>
        <div className={'fdsNavbar-mobileIconButton'}>
          <IconButton
            Icon={isOpen ? ActionsArrowUpIcon : ActionsArrowDownIcon}
            onClick={() => handleClick(sectionName)}
            label="dropdown"
          />
        </div>
        <div className={'fdsNavbar-iconButton'}>
          <ActionsArrowDownIcon />
        </div>
      </>
    ),
    [showClass]
  );

  return (
    <header id="masthead" className="fdsNavbar-nav" role="navigation">
      <div className={'fdsNavbar-topContainer'}>
        <ul id="utility-menu" className={'fdsNavbar-utilityBar'}>
          <li>
            <a
              href={`${site}/what-we-offer/technology-vendors/`}
              className={'fdsNavbar-utilityBarLink'}
            >
              Technology Vendors
            </a>
          </li>
          <li>
            <a href={`${site}/research/`} className={'fdsNavbar-utilityBarLink'}>
              Recent Research
            </a>
          </li>
          <li>
            <a href={`${site}/newsletter/`} className={'fdsNavbar-utilityBarLink'}>
              Newsletter
            </a>
          </li>
          <li>
            <a href={`${site}/media-support/`} className={'fdsNavbar-utilityBarLink'}>
              Media Support
            </a>
          </li>
          <li>
            <a href={`${site}/login`} className={'fdsNavbar-utilityBarLink'}>
              Login
            </a>
          </li>
        </ul>
      </div>
      <div className={'fdsNavbar-container'}>
        <div className={'fdsNavbar-siteBranding'}>
          <a href={`${site}`}>
            <img
              className={'fdsNavbar-navLogo'}
              width="168"
              height="20"
              alt="CB Insights Logo"
              src={CBILogo}
            />
          </a>
        </div>
        <nav id="site-navigation" className={'fdsNavbar-navigation'}>
          <div className={'fdsNavbar-navMenuButton'}>
            <IconButton
              size="m"
              Icon={showClass.navList ? DenyIcon : HamburgerBarsIcon}
              onClick={() => handleClick(NAV_LIST)}
              theme="ghost"
              label="Menu"
            />
          </div>
          <div className={'fdsNavbar-navigationWrap'}>
            <ul
              id="site-menu"
              className={cc([
                { 'fdsNavbar-navShow': showClass.navList },
                'fdsNavbar-navBar',
              ])}
            >
              <li className={'fdsNavbar-navBarListItem'}>
                <a className={'fdsNavbar-dropdownItemLink'}>Who We Serve</a>
                <span className={'fdsNavbar-dropdownButton'}>
                  {getArrowUpOrDown(showClass.whoWeServe, WHO_WE_SERVE)}
                </span>
                <NavBarDropdown
                  content={WhoWeServeDropdown(site)}
                  showDropdown={showClass.whoWeServe}
                />
              </li>
              <li className={'fdsNavbar-navBarListItem'}>
                <a className={'fdsNavbar-dropdownItemLink'}>How We Help</a>
                <span className={'fdsNavbar-dropdownButton'}>
                  {getArrowUpOrDown(showClass.howWeHelp, HOW_WE_HELP)}
                </span>
                <NavBarDropdown
                  content={HowWeHelpDropdown(site)}
                  showDropdown={showClass.howWeHelp}
                />
              </li>
              <li className={'fdsNavbar-navBarListItem'}>
                <a className={'fdsNavbar-dropdownItemLink'}>What We Offer</a>
                <span className={'fdsNavbar-dropdownButton'}>
                  {getArrowUpOrDown(showClass.whatWeOffer, WHAT_WE_OFFER)}
                </span>
                <NavBarDropdown
                  content={WhatWeOfferDropdown(site)}
                  showDropdown={showClass.whatWeOffer}
                />
              </li>
              <li className={'fdsNavbar-navBarListItem'}>
                <a className={'fdsNavbar-dropdownItemLink'}>Resources</a>
                <span className={'fdsNavbar-dropdownButton'}>
                  {getArrowUpOrDown(showClass.resources, RESOURCES)}
                </span>
                <NavBarDropdown
                  content={ResourcesDropdown(site)}
                  showDropdown={showClass.resources}
                />
              </li>
              <li className={'fdsNavbar-navBarListItem'}>
                <a className={'fdsNavbar-dropdownItemLink'} href={`${site}/about/`}>
                  About Us
                </a>
              </li>
            </ul>
            <a
              href={`https://www.cbinsights.com/research-request-a-demo?${utmContext}`}
              className={'fdsNavbar-requestDemoButton'}
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
