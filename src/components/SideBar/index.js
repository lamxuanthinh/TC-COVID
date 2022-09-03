import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtn,
  SidebarBtnLink,
} from "./SideBarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink
              to="about"
              smooth={true}
              duration={true}
              spy={true}
              offset={-80}
              onClick={toggle}
            >
              Đăng ký tiêm chủng
            </SidebarLink>
            <SidebarLink
              to="discover"
              smooth={true}
              duration={true}
              spy={true}
              offset={-80}
              onClick={toggle}
            >
              Hướng dẫn
            </SidebarLink>
            <SidebarLink
              to="services"
              smooth={true}
              duration={true}
              spy={true}
              offset={-80}
              onClick={toggle}
            >
              Giới thiệu
            </SidebarLink>
            <SidebarLink
              to="signup"
              smooth={true}
              duration={true}
              spy={true}
              offset={-80}
              onClick={toggle}
            >
              Đăng Ký
            </SidebarLink>
          </SidebarMenu>
          <SidebarBtn>
            <SidebarBtnLink to="/signin">Đăng nhập</SidebarBtnLink>
          </SidebarBtn>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default SideBar;
