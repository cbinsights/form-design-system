import React, { useState, memo, useCallback } from 'react';
import cc from 'classcat';
import ActionsArrowDownIcon from 'icons/react/ActionsArrowDownIcon';
import ActionsArrowUpIcon from 'icons/react/ActionsArrowUpIcon';
import { IconButton } from 'components';
import HamburgerBarsIcon from 'icons/react/HamburgerBarsIcon';
import DenyIcon from 'icons/react/DenyIcon';
import CBILogo from 'assets/images/CBI_Logo_White.svg';
import {
  whoWeServeDropdown,
  howWeHelpDropdown,
  whatWeOfferDropdown,
  aboutUsDropdown,
} from './constants';
import NavBarDropdown from './NavbarDropdown';

const NAV_LIST = 'navList';
const WHO_WE_SERVE = 'whoWeServe';
const HOW_WE_HELP = 'howWeHelp';
const WHAT_WE_OFFER = 'whatWeOffer';
const ABOUT_US = 'aboutUs';

type Section = 'navList' | 'whoWeServe' | 'howWeHelp' | 'whatWeOffer' | 'aboutUs';

const DEFAULT_STATE: Record<Section, boolean> = {
  [NAV_LIST]: false,
  [WHO_WE_SERVE]: false,
  [HOW_WE_HELP]: false,
  [WHAT_WE_OFFER]: false,
  [ABOUT_US]: false,
};

export type NavBarProps = {
  site: string;
  utmContext: string;
  SearchComponent?: JSX.Element;
  LogoComponent?: JSX.Element;
};

const NavBar = ({
  site,
  utmContext,
  SearchComponent,
  LogoComponent = (
    <a href={`${site}`}>
      <img
        className={'fdsNavbar-navLogo'}
        width="168"
        height="20"
        alt="CB Insights"
        src={CBILogo}
      />
    </a>
  ),
}: NavBarProps): JSX.Element => {
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
        <div className={'fdsNavbar-siteBranding'}>{LogoComponent}</div>
        {SearchComponent}
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
                <div className={'fdsNavbar-dropdownItemLink'}>Who We Serve</div>
                <span className={'fdsNavbar-dropdownButton'}>
                  {getArrowUpOrDown(showClass.whoWeServe, WHO_WE_SERVE)}
                </span>
                <NavBarDropdown
                  content={whoWeServeDropdown(site)}
                  showDropdown={showClass.whoWeServe}
                />
              </li>
              <li className={'fdsNavbar-navBarListItem'}>
                <div className={'fdsNavbar-dropdownItemLink'}>How We Help</div>
                <span className={'fdsNavbar-dropdownButton'}>
                  {getArrowUpOrDown(showClass.howWeHelp, HOW_WE_HELP)}
                </span>
                <NavBarDropdown
                  content={howWeHelpDropdown(site)}
                  showDropdown={showClass.howWeHelp}
                />
              </li>
              <li className={'fdsNavbar-navBarListItem'}>
                <div className={'fdsNavbar-dropdownItemLink'}>What We Offer</div>
                <span className={'fdsNavbar-dropdownButton'}>
                  {getArrowUpOrDown(showClass.whatWeOffer, WHAT_WE_OFFER)}
                </span>
                <NavBarDropdown
                  content={whatWeOfferDropdown(site)}
                  showDropdown={showClass.whatWeOffer}
                />
              </li>
              <li className={'fdsNavbar-navBarListItem'}>
                <div className={'fdsNavbar-dropdownItemLink'}>About Us</div>
                <span className={'fdsNavbar-dropdownButton'}>
                  {getArrowUpOrDown(showClass.aboutUs, ABOUT_US)}
                </span>
                <NavBarDropdown
                  content={aboutUsDropdown(site)}
                  showDropdown={showClass.aboutUs}
                />
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
