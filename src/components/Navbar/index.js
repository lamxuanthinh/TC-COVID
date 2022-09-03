import React from "react";
import { animateScroll as scroll } from "react-scroll/modules";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements.js";

const NavBar = ({ toggle }) => {

  const backHome = () => {
    scroll.scrollToTop();
  };
  
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="" onClick={backHome}>
            TC-Covid
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={true}
                spy={true}
                offset={-80}
              >
                Đăng ký tiêm chủng
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="discover"
                smooth={true}
                duration={true}
                spy={true}
                offset={-80}
              >
                Hướng dẫn
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={true}
                spy={true}
                offset={-80}
              >
                Giới thiệu
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="signup"
                smooth={true}
                duration={true}
                spy={true}
                offset={-80}
              >
                Đăng Ký
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Đăng Nhập</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
