import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#013648" : "transparent")};
  height: 9vh;
  display: flex;
  margin-top: -9vh;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.8s all ease;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 9vh;
  z-index: 1;
  width: 100%;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

export const NavLogoImg = styled.img`
  height: 40px;
  @media screen and (min-width: 768px) {
    height: 50px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    line-height: 1.15;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 0;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff !important;
  display: flex;
  align-items: center;
  text-decoration: none !important;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  &::before {
    content: "-";
    margin-right: 5px;
    color: transparent;
    transform: scaleX(2);
  }
  &.active {
    &::before {
      content: "-";
      margin-right: 5px;
      color: #fff;
      animation: animateActiveLink 0.3s;
    }
  }
  &:hover {
    &::before {
      color: #fff;
      animation: animateActiveLink 0.3s;
    }
  }
  @keyframes animateActiveLink {
    0% {
      transform: scaleX(0);
    }
    50% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(2);
    }
  }
`;
