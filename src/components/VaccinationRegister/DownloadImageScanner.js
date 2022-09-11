import React from "react";
import styled from "styled-components";

const DownloadImageScanner = () => {
  const image = sessionStorage.getItem("imageScanner");

  return (
    <>
      <Container>
        <Wrapper>
          <img src="https://media.qrtiger.com/uploads/staticQR/hfjhj-1662777904229.png" />
          <BtnWrapper>
            <a
              href="https://media.qrtiger.com/uploads/staticQR/hfjhj-1662777904229.png"
              download
            >
              Tải Xuống
            </a>
            {/* <button>Hoành Thành</button> */}
          </BtnWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default DownloadImageScanner;

const Container = styled.div`
  background-color: #19bc9c;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 500px;
  height: 568px;
  background-color: #fff;
  /* border-radius: 10px; */
  display: flex;
  flex-flow: column;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  a {
    height: 50px;
    color: #fff;
    border: none;
    outline: none;
    font-size: 16px;
    cursor: pointer;
    border-radius: 3px;
    background-color: #19bc9c;
    text-decoration: none;
    padding: 15px;
    font-weight: 500;
    transition: 0.5s ease;
    &:hover {
      transition: 0.5s ease;
      background-color: #000;
    }
  }
`;
