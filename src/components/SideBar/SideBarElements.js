import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #0d0d0d;
  display: grid;
  align-items: center;
  /* top: 0; */
  left: 0;
  transition: 0.3s ease-in-out;
  /* opacity: ${({ isOpen }) => (isOpen ? "100%" : 0)}; */
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-flow: column;
`;

export const SidebarLink = styled(LinkS)`
  text-decoration: none;
  color: #fff;
  margin: 20px auto;
  font-size: 1.5rem;
  list-style: none;
  transition: 0.2s  ease-in-out;
  cursor: pointer;
  &:hover {
      transition: 0.2s  ease-in-out;
      color: #01bf71;
  }
`;
export const SidebarBtn = styled.div`
   margin: 40px auto;
`;
export const SidebarBtnLink = styled(LinkR)`
  border-radius: 50px;
  background-color: #01bf71;
  white-space: nowrap;
  padding: 12px 50px;
  color: #010606;
  font-size: 1.5rem;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2 ease-in-out;

  &:hover {
    transition: all 0.2 ease-in-out;
    background-color: #fff;
    color: #010606;
  }
`;
