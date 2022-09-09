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
  max-width: 1400px;
  display: flex;
  margin: 0 auto;
  height: calc(100vh - 64px);

  // Medium devices (tablets, less than 992px)
  @media (min-width: 768px) and (max-width: 991.98px) {
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
  @media screen and (max-width: 575.98px) {
    display: none;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
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
      font-size: 1.4rem;
    }
    p {
      width: 80%;
    }
  }

  @media screen and (min-width: 1025px) {
    width: 50%;
  }
`;

export const RoomWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  input {
    outline: none;
    border: 1px solid lightgrey;
    position: relative;
    width: 300px;
    height: 100%;
    padding-left: 40px;
    font-size: 1.2rem;
    border-radius: 3px;
    &:focus {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.13);
    }
  }
  @media screen and (max-width: 991.89px) {
    flex-flow: column;

    input {
      width: 288px;
      height: 47px;
    }
  }
`;

export const InputWrapper = styled.div``;

export const IconInput = styled(FaKeyboard)`
  position: absolute;
  font-size: 1.5rem;
  z-index: 10;
`;

export const IconBtn = styled(TbCirclePlus)`
  position: absolute;
  font-size: 1.5rem;
  left: 5px;
  top: 10px;
`;

export const RomBtn = styled.div`
  outline: none;
  /* position: relative; */
  background-color: #19bc9c;
  border: none;
  cursor: pointer;
  padding: 15px;
  font-size: 16px;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transition: all 0.5s ease-in-out;
    background-color: #000;
    color: #fff;
  }
  i {
    margin-right: 5px;
    font-size: 1.2rem;
    text-align: center;
  }
  @media screen and (max-width: 991.98px) {
    margin-bottom: 40px;
  }
`;

// end body

// start Modal profile

export const ModalContentProfile = styled.div`
  display: flex;
  flex-flow: column;
  h1 {
    margin: 40px 60px 0px;
  }
  .iconEditor {
    font-size: 2rem;
    position: relative;
    text-align: center;
    color: #fff;
    top: 90px;
    &:hover {
      opacity: 0.8;
    }
  }

  .information {
    display: flex;
    flex-flow: column;
    .imgWrapper {
      display: flex;
      flex-flow: column;
      margin-bottom: 20px;
      img {
        display: inline-block;
        margin: 0 auto;
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }
    }

    .Content {
      margin: 0 auto;
      p {
        padding: 10px;
      }
    }
  }
`;

export const BtnLogoutAccount = styled.button`
  width: 250px;
  margin: 15px auto 35px;
  cursor: pointer;
  outline: none;
  white-space: normal;
  border: none;
  border-radius: 5px;
  padding: 12px;
  background-color: #19bc9c;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
  i {
    margin: auto 6px auto 0;
    font-size: 1.2rem;
    align-items: center;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    opacity: 0.8;
  }
`;
// end Modal profile
