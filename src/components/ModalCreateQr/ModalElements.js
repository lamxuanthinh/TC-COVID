import styled from "styled-components";
import { CgClose } from "react-icons/cg";

export const ModalContainer = styled.div`
  display: ${({ openModal }) => (openModal ? "felx" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  background-color: #19bc9c;
  z-index: 100;
`;

export const ModalWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-flow: column;
  border-radius: 10px;
  background-color: #fff;
  padding: 20px 20px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media screen and (max-width: 739px) {
    width: 95%;
  }
`;

export const ModalTitle = styled.h1`
  padding: 15px 15px;
  margin: auto auto;
  @media screen and (max-width: 739px) {
    font-size: 1.5rem;
  }
`;
export const ModalContent = styled.p`
  padding: 10px 15px;
`;

export const Close = styled(CgClose)`
  font-size: 30px;
  position: absolute;
  font-weight: 500;
  top: 10px;
  right: 10px;
`;

export const ModalInputWrapper = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: 739px) {
    padding: 10px 10px;
  }
  @media screen and (max-width: 320px) {
    padding: 5px 5px;
  }
`;

export const ModalInput = styled.input`
  width: 35px;
  margin: 0 20px;
  font-size: 1.2rem;
  outline: none;
  border: none;
  border-bottom: 4px solid;
  text-align: center;
  @media screen and (max-width: 739px) {
    margin: 0 10px;
  }
  @media screen and (max-width: 320px) {
    margin: 0 7px;
  }
`;

export const BtnWrapper = styled.div`
  padding: 0 15px;
  padding-top: 30px;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 739px) {
    justify-content: center;
  }
`;

export const BtnNext = styled.button`
  border-radius: 6px;
  background-color: #19bc9c;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2 ease-in-out;

  &:hover {
    transition: all 0.2 ease-in-out;
    background-color: #000;
    color: #fff;
  }
`;

export const BtnClose = styled.button`
  border-radius: 6px;
  background-color: #19bc9c;
  margin-right: 20px;
  white-space: nowrap;
  padding: 10px 37px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2 ease-in-out;

  &:hover {
    transition: all 0.2 ease-in-out;
    background-color: #000;
    color: #fff;
  }
`;
