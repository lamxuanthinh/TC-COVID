import styled from "styled-components";
import { CgUserList } from "react-icons/cg";
import { RiInformationLine } from "react-icons/ri";
import { SiUblockorigin } from "react-icons/si";
import { BiChat } from "react-icons/bi";

export const ContainerAccount01 = styled.div`
  background-color: #000;
  width: 100%;
  height: 100vh;
  .qrScanner {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const WrapperModal = styled.div`
  background-color: #000;
  height: 100vh;
  width: 100%;
`;

export const IconScanner = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  top: calc(50% - 150px);
  left: calc(50% - 150px);
  background: linear-gradient(#fff, #fff) left top,
    linear-gradient(#fff, #fff) left top, linear-gradient(#fff, #fff) right top,
    linear-gradient(#fff, #fff) right top,
    linear-gradient(#fff, #fff) left bottom,
    linear-gradient(#fff, #fff) left bottom,
    linear-gradient(#fff, #fff) right bottom,
    linear-gradient(#fff, #fff) right bottom;
  background-repeat: no-repeat;
  background-size: 2px 24px, 24px 2px;

  &::before {
    content: "";
    position: absolute;
    width: 95%;
    background: #19bc9c;
    top: 2.5%;
    left: 2.5%;
    height: 10px;
    /* border-radius: 100%; */
    box-shadow: 0 0 4px 0 #19bc9c;
    animation: scan ease-in-out 2s infinite;
  }
  @keyframes scan {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(300px);
      opacity: 0.1;
    }
  }

  @media screen and (max-width: 575.98px) {
    width: 250px;
    height: 250px;
    position: absolute;
    top: calc(50% - 125px);
    left: calc(50% - 125px);

    @keyframes scan {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(250px);
        opacity: 0;
      }
    }
  }
`;

// handle icons

export const WrapperIcon = styled.div`
  position: absolute;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px 0px;
  right: 30px;
  bottom: 30px;
  width: 500px;
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 991.98px) {
    width: 100%;
    right: 0px;
    bottom: 5px;
    padding: 15px 0px;
  }
`;

export const BtnClose = styled.button`
  outline: none;
  border: none;
  color: #000;
  border-radius: 5px;
  background-color: #19bc9c;
  padding: 12px 20px;
  font-size: 1rem;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #d0243f;
    color: #fff;
  }

  i {
    margin-right: 5px;
  }
`;

export const IconInformation = styled(RiInformationLine)`
  font-size: 2.3rem;
  margin: auto 0;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    opacity: 0.7;
  }
`;

export const IconListUser = styled(CgUserList)`
  margin: auto 0;
  font-size: 2.3rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    opacity: 0.7;
  }
`;

export const IconLock = styled(SiUblockorigin)`
  margin: auto 0;
  font-size: 2.3rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    opacity: 0.7;
  }
`;

export const IconChat = styled(BiChat)`
  margin: auto 0;
  font-size: 2.3rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    opacity: 0.7;
  }
`;
