import styled from "styled-components";
import { FcSettings } from "react-icons/fc";
import { FaKeyboard } from "react-icons/fa";
import { TbCirclePlus } from "react-icons/tb";
export const HomeAccountContainer = styled.div`
  background-color: #fff;
  height: 100vh;
`;

// start navbar

export const NavbarWrapper = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
`;
export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  h4 {
    text-align: center;
    padding-left: 10px;
  }
`;

export const FunctionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
  }
`;
export const SettingIcon = styled(FcSettings)`
  font-size: 28px;
  margin-right: 15px;
`;

// end navbar

// start body

export const HomeAccountBody = styled.div`
  display: flex;
  height: calc(100vh - 64px);
  
  @media screen and (min-width: 740px) and (max-width: 1024px) {
    flex-flow: column;
  }
`;
export const HomeAccountImgWrapper = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 739px) {
    display: none;
  }
`;

export const HomeAccountContentWrapper = styled.div`
  h1 {
    width: 70%;
  }
  p {
    padding: 22px 0 54px 0;
    font-size: 18px;
    width: 70%;
  }
  display: flex;
  flex: 1;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    h1 {
      width: 80%;
    }
    p {
      width: 80%;
    }
  }

  @media screen and (min-width:1025px) {
    width: 50%;
  }
`;

export const RoomWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  input {
    outline:none;
    border: 1px solid lightgrey;
    border-radius: 3px;
    position: relative;
    width: 300px;
    height: 100%;
    padding-left: 40px;
    font-size: 1.2rem;
    &:focus {
    box-shadow: 0 3px 6px rgba(0,0,0,0.13);
  }
  }
  @media screen and (max-width: 768px) {
    flex-flow: column;
  }
`;

export const InputWrapper = styled.div``;

export const IconInput = styled(FaKeyboard)`
  position: absolute;
  font-size:1.5rem;
  z-index: 10;
`;

export const IconBtn = styled(TbCirclePlus)`
  position: absolute;
  font-size: 1.5rem;
  left: 5px;
  top: 13px;
`;

export const RomBtn = styled.div`
  outline: none;
  position: relative;
  background-color: #01bf71;
  border: none;
  cursor: pointer;
  padding: 9px 15px 9px 31px;
  font-size: 16px;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transition: all 0.5s ease-in-out;
    background-color: #000;
    color: #fff;
  }
`;

// end body
