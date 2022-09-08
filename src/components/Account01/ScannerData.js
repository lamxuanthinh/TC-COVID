import React from "react";
import styled from "styled-components";

const ScannerData = ({ dataScanner }) => {
  const formatData = dataScanner.split("!");
  return (
    <>
      <ContainerScannerData>
        <h2>Xác Thực Thông Tin</h2>
        <WrapperContent>
          <p>Tên: {formatData[0]}</p>
          <p>Ngày Sinh: {formatData[1]}</p>
          <p>Giới Tính: {formatData[2]}</p>
          <p>Số Điện Thoại: {formatData[0]}</p>
          <p>Địa Chỉ: {formatData[3]}</p>
        </WrapperContent>
        <BtnDone>
          <i className="fa-regular fa-circle-check"></i>
          Xác Thực
        </BtnDone>
      </ContainerScannerData>
    </>
  );
};

export default ScannerData;

const ContainerScannerData = styled.p`
  display: flex;
  flex-flow: column;

  h2 {
    padding: 45px 50px 10px 50px;
  }
`;

const WrapperContent = styled.p`
  margin: 0 auto;
  p {
    padding: 10px 20px;
  }
`;

const BtnDone = styled.button`
  width: 60%;
  margin: 10px auto 25px;
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
