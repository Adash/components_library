import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'styled-components/macro';
import { CSSTransiton } from 'react-transition-group';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';

const MainWrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* height: 100vh; */

  --bg: #242526;
  --bg-accent: #484a4d;
  --text-color: #dadce1;
  --nav-size: 60px;
  --border: 1px solid #474a4d;
  --border-radius: 8px;
  --speed: 500ms;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
  }
`;

const StyledNav = styled.nav`
  height: var(--nav-size);
  background-color: var(--bg);
  padding: 0 1rem;
  border-bottom: var(--border);
  z-index: 10;
`;

const StyledUl = styled.ul`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
`;

const StyledNavItem = styled.li`
  width: calc(var(--nav-size) * 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconButton = styled.a`
  --button-size: calc(var(--nav-size) * 0.5);
  width: var(--button-size);
  height: var(--button-size);
  background-color: #484a4d;
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;
  cursor: pointer;

  & svg {
    width: 20px;
    height: 20px;
    fill: var(--text-color);
  }
  &:hover {
    filter: brightness(1.2);
  }
`;

const StyledDropdownMenu = styled.div`
  position: absolute;
  top: 58px;
  width: 300px;
  transform: translateX(-45%);
  background-color: var(--bg);
  border: var(--border);
  border-radius: var(--border-radius);
  padding: 1rem;
  overflow: hidden;
  /* opacity: ${(props) => (props.opacity ? props.opacity : 0)}; */
  /* transition: height var(--speed) ease; */
  z-index: -5;
  top: ${(props) => (props.top ? props.top : '-200px')};
  transition: top 300ms ease-out;
`;

const StyledMenuItem = styled.a`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  transition: background var(--speed);
  padding: 0.5rem;

  & .icon-button {
    margin-right: 0.5rem;
  }

  & .icon-button:hover {
    filter: none;
  }

  &:hover {
    background-color: #525357;
  }
`;

const IconRight = styled.a`
  fill: var(--text-color);
  margin-left: auto;
  --button-size: calc(var(--nav-size) * 0.2);
  width: var(--button-size);
  height: var(--button-size);
  border-radius: 50%;
  transition: filter 300ms;
`;

const DropdownItem = (props) => (
  <StyledMenuItem
    href="#"
    onClick={() => props.goToMenu && props.setActiveMenu(props.goToMenu)}
  >
    {props.leftIcon && <IconButton>{props.leftIcon}</IconButton>}
    {props.children}
    {props.rightIcon && <IconRight>{props.rightIcon}</IconRight>}
  </StyledMenuItem>
);

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [top, setTop] = useState(0);
  useEffect(() => {
    setTop('59px');
    return () => {
      setTop('-200px');
    };
  }, []);

  return (
    <StyledDropdownMenu top={top}>
      <div
        css={`
          width: 100%;
        `}
      >
        <DropdownItem>My Profile</DropdownItem>
        <DropdownItem
          leftIcon={<CogIcon />}
          rightIcon={<ChevronIcon />}
          goToMenu="settings"
        >
          Settings
        </DropdownItem>
        <DropdownItem
          leftIcon="🦧"
          rightIcon={<ChevronIcon />}
          goToMenu="animals"
        >
          Animals
        </DropdownItem>
      </div>
    </StyledDropdownMenu>
  );
};

const NavItem = ({ icon, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledNavItem>
      <IconButton href="#" onClick={() => setOpen(!open)}>
        {icon}
      </IconButton>
      {open && children}
    </StyledNavItem>
  );
};

const Navbar = () => {
  return (
    <StyledNav>
      <StyledUl>
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<CogIcon />} />
        <NavItem icon={<MessengerIcon />} />

        <NavItem icon={<CaretIcon />}>
          <DropdownMenu />
        </NavItem>
      </StyledUl>
    </StyledNav>
  );
};

const AdvancedDropdownMenu = () => {
  return (
    <MainWrapper>
      <Navbar />
    </MainWrapper>
  );
};

export default AdvancedDropdownMenu;