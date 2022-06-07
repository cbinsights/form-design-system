import React, { useState, memo } from 'react';
import cc from 'classcat';
import ActionsArrowRightIcon from 'icons/react/ActionsArrowRightIcon';
import ActionsArrowDownIcon from 'icons/react/ActionsArrowDownIcon';
import { IconButton } from 'components';
import ActionsArrowUpIcon from 'icons/react/ActionsArrowUpIcon';
import { DropdownMenu } from './constants';

type Props = {
  content: DropdownMenu[];
  showDropdown: boolean;
};

const checkForSubMenu = (menu: DropdownMenu[]): boolean =>
  !!menu.find((menuItem) => menuItem.subMenu.length);
const getInitialState = (content: DropdownMenu[]) => {
  const subMenuState: { [key: string]: boolean } = {};
  content.forEach((menuItem) => {
    if (menuItem.subMenu.length > 0) subMenuState[menuItem.itemName] = false;
  });
  return subMenuState;
};

const NavBarDropdown = ({ content, showDropdown }: Props): JSX.Element => {
  const [subMenuState, setSubMenu] = useState(getInitialState(content));
  const hasSubMenu = checkForSubMenu(content);
  const getArrowIcon = (itemName: string): JSX.Element => (
    <>
      <div className={'fdsNavbar-iconButton'}>
        <ActionsArrowRightIcon size="xs" />
      </div>
      <div className={'fdsNavbar-mobileIconButton'}>
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

  return (
    <div
      className={cc([
        { 'fdsNavbar-hasSubMenu': hasSubMenu, 'fdsNavbar-navShow': showDropdown },
        'fdsNavbar-dropdownContainer',
      ])}
    >
      <ul className={'fdsNavbar-menuContainer'}>
        {content.map((menuItem) => (
          <li
            className={cc([
              { 'fdsNavbar-openedSubMenu': showDropdown },
              'fdsNavbar-dropdownItem',
            ])}
            key={menuItem.itemName}
          >
            {menuItem.url ? (
              <a className={'fdsNavbar-dropdownItemLink'} href={menuItem.url}>
                {menuItem.itemName}
              </a>
            ) : (
              <div className={'fdsNavbar-dropdownItemLink'}>{menuItem.itemName}</div>
            )}
            {menuItem.subMenu?.length > 0 && (
              <>
                <span className={'fdsNavbar-dropdownButton'}>
                  {getArrowIcon(menuItem.itemName)}
                </span>
                <div
                  className={`fdsNavbar-subMenuContainer ${
                    subMenuState[menuItem.itemName] ? 'fdsNavbar-navShow' : ''
                  }`}
                >
                  <ul className={'fdsNavbar-menuContainer fdsNavbar-subMenuList'}>
                    {menuItem.subMenu.map((subMenuItem) => (
                      <li className={'fdsNavbar-subMenuItem'} key={subMenuItem.itemName}>
                        <a
                          className={
                            'fdsNavbar-dropdownItemLink fdsNavbar-subMenuItemLink'
                          }
                          href={subMenuItem.url}
                        >
                          {subMenuItem.itemName}
                        </a>
                      </li>
                    ))}
                    {menuItem?.subMenuFeaturedItem && (
                      <li className={'fdsNavbar-featuredItem'}>
                        <div className={'fdsNavbar-featuredItemImageContainer'}>
                          <img
                            className={'fdsNavbar-featuredItemImage'}
                            width="300"
                            height="181"
                            alt="Featured Item"
                            src={menuItem.subMenuFeaturedItem.imageSrc}
                          />
                        </div>
                        <h3 className={'fdsNavbar-featuredItemText'}>
                          {menuItem?.subMenuFeaturedItem?.itemName}
                        </h3>
                        <p>
                          <a
                            className={'fdsNavbar-featuredItemLearnMore'}
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
