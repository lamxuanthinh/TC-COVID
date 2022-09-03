import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const LoginContainer = styled.div`
  display: flex;
  background-color: #01bf71;
  height: 100vh;
`;

export const LoginWrapper = styled.div`
  width: 860px;
  display: flex;
  margin: auto auto;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const LoginWraperImg = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media screen and (max-width: 739px) {
    display: none;
  }
`;

export const LoginImg = styled.img`
  width: 100%;
  padding: 10px 10px;
`;
export const LoginFormWrapper = styled.div`
  flex: 1;
  padding: 10px;
  padding-right: 40px;
  display: flex;
  flex-flow: column;
  @media screen and (max-width: 739px) {
    padding: 20px 20px;
    flex: 2;
  }
`;
export const LoginH1 = styled.h1`
  margin-top: 30px;
  padding: 35px 0;
  @media screen and (max-width: 739px) {
    text-align: center;
  }
`;

export const LoginLable = styled.div`
  span {
    font-size: 14px;
    color: red;
    height: 19.5px;
  }
`;
export const LoginP = styled.div`
  font-size: 1rem;
  padding: 7px 0;
  font-weight: bold;
  text-transform: uppercase;
`;

export const LoginInput = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: 12px 30px;
  padding-left: 10px;
  border-radius: 3px;
  margin-bottom: 5px;
  outline: none;
  border: 1px solid #ced4da;
  &:focus {
    box-shadow: 0 3px 6px rgba(0,0,0,0.13);
  }
`;
export const LoginBtnWrapper = styled.div`
  padding-top: 15px;
  padding-bottom: 50px;
  width: 100%;
`;
export const BtnLink = styled.button`
  text-decoration: none;
  display: inline-block;
  outline: none;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  padding: 11px 0;
  width: 100%;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
  background-color: #01bf71;

  &:hover {
    transition: all 0.5s ease-in-out;
    background-color: #000;
  }
`;
export const LoginInfo = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 570px) {
    font-size: 14px;
  }
`;
export const RememerPassword = styled.div`
  display: flex;
`;

export const LoginCheckBox = styled.input`
  padding: 15px 5px;

  accent-color: #01bf71;
`;
export const RememerContent = styled.div`
  padding: 0 5px;
`;
export const NoRememberPassword = styled.div`
  padding: 0 20px;
`;
export const NoRememberContent = styled.div``;
export const LogintoSignUp = styled.div`
  display: flex;
  padding: 25px 0;
  justify-content: center;
  @media screen and (max-width: 570px) {
    font-size: 14px;
  }
`;
export const LogintoSignUpP = styled.div``;
export const LogintoSignUpLink = styled(LinkR)`
  text-decoration: none;
  cursor: pointer;
  color: #01bf71;
`;
