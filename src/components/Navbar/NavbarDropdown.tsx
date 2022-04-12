import React, { useState, memo } from 'react';
import ActionsArrowRightIcon from 'icons/react/ActionsArrowRightIcon';
import ActionsArrowDownIcon from 'icons/react/ActionsArrowDownIcon';
import { IconButton } from 'components';
import ActionsArrowUpIcon from 'icons/react/ActionsArrowUpIcon';

type MenuItem = {
  itemName: string;
  url: string;
};

type SubMenuFeature = {
  url: string;
  imageSrc: string;
  itemName: string;
};

type DropdownMenu = {
  itemName: string;
  url: string;
  subMenu: MenuItem[];
  subMenuFeaturedItem?: SubMenuFeature;
};

type Props = {
  content: DropdownMenu[];
  showDropdown: boolean;
};

const checkForSubMenu = (menu: DropdownMenu[]): boolean =>
  !!menu.find((menuItem) => menuItem.subMenu.length);
const getInitialState = (content: DropdownMenu[]) => {
  const subMenuState = {};
  content.forEach((menuItem) => {
    if (menuItem.subMenu.length > 0) subMenuState[menuItem.itemName] = false;
  });
  return subMenuState;
};

const NavBarDropdown: React.FC<Props> = ({ content, showDropdown }) => {
  const [subMenuState, setSubMenu] = useState(getInitialState(content));
  const hasSubMenu = checkForSubMenu(content);
  const getArrowIcon = (itemName) => {
    return (
      <>
        <div className={'FDSnaviconButton'}>
          <ActionsArrowRightIcon size="xs" />
        </div>
        <div className={'FDSnavmobileIconButton'}>
          <IconButton
            label="submenu"
            Icon={subMenuState[itemName] ? ActionsArrowUpIcon : ActionsArrowDownIcon}
            onClick={() =>
              setSubMenu({ ...subMenuState, [itemName]: !subMenuState[itemName] })
            }
          />
        </div>
      </>
    );
  };

  return (
    <div
      className={`FDSnavdropdownContainer ${hasSubMenu ? 'FDSnavhasSubMenu' : ''} ${
        showDropdown ? 'FDSnavshow' : ''
      }`}
    >
      <ul className={'FDSnavmenuContainer'}>
        {content.map((menuItem) => (
          <li
            className={`FDSnavdropdownItem ${showDropdown ? 'FDSnavopenedSubMenu' : ''}`}
            key={menuItem.itemName}
          >
            <a className={'FDSnavdropdownItemLink'} href={menuItem.url}>
              {menuItem.itemName}
            </a>
            {menuItem?.subMenu?.length > 0 && (
              <>
                <span className={'FDSnavdropdownButton'}>
                  {getArrowIcon(menuItem.itemName)}
                </span>
                <div
                  className={`FDSnavsubMenuContainer ${
                    subMenuState[menuItem.itemName] ? 'FDSnavshow' : ''
                  }`}
                >
                  <ul className={'FDSnavmenuContainer FDSnavsubMenuList'}>
                    {menuItem.subMenu.map((subMenuItem) => (
                      <li className={'FDSnavsubMenuItem'} key={subMenuItem.itemName}>
                        <a
                          className={'FDSnavdropdownItemLink FDSnavsubMenuItemLink'}
                          href={subMenuItem.url}
                        >
                          {subMenuItem.itemName}
                        </a>
                      </li>
                    ))}
                    {menuItem?.subMenuFeaturedItem && (
                      <li className={'FDSnavfeaturedItem'}>
                        <div className={'FDSnavfeaturedItemImageContainer'}>
                          <img
                            className={'FDSnavfeaturedItemImage'}
                            width="300"
                            height="181"
                            alt="Featured Item"
                            src={menuItem.subMenuFeaturedItem.imageSrc}
                          />
                        </div>
                        <h3 className={'FDSnavfeaturedItemText'}>
                          {menuItem?.subMenuFeaturedItem?.itemName}
                        </h3>
                        <p>
                          <a
                            className={'FDSnavfeaturedItemLearnMore'}
                            href={menuItem?.subMenuFeaturedItem?.url}
                          >
                            Learn More &#x2192;
                          </a>
                        </p>
                      </li>
                    )}
                  </ul>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(NavBarDropdown);
