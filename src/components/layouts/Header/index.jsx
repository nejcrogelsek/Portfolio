import React, { useState } from "react";
import { useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Favicon from "../../../assets/images/favicon.png";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLogoImg,
} from "./HeaderElements";

const Header = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer className='container'>
          <NavLogo to='/' onClick={toggleHome}>
            <NavLogoImg src={Favicon} alt='NR' />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to='hero'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={0}>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={0}>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='projects'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={0}>
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='skills'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={0}>
                Skills
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='tools'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={0}>
                Tools
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='contact'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-100}
                activeClass='active'>
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Header;
