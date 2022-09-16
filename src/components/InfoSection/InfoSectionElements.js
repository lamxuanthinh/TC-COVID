import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const InfoContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9f" : "#010606")};
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-flow: minmax(auto, 1fr);
  // tỉ lệ bằng nhau
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'clo2 clo1'` : `'clo1 clo2'`};
  // chia layout thành nhiều kiểu
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'clo1' 'clo2'` : `'clo1 clo1' 'clo2 clo2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: clo1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: clo2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #19bc9c;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600px;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const SubTitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#f7f8fa" : "#010606")};
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 80%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const BtnLink = styled(LinkR)`
  border-radius: 50px;
  background-color: #19bc9c;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: ${({ btnbg }) => (btnbg ? "#fff" : "#010606")};
    color: ${({ btncolor }) => (btncolor ? "#010606" : "#fff")};
  }
`;
