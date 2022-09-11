import React from "react";
import styled from "styled-components";
import controllerRoom from "../../api/controllerRoom";

const ScannerData = ({ dataScanner }) => {
  const formatData = dataScanner.split("|");
  const RoomID01 = sessionStorage.getItem("RoomID01");

  const handlePostDataAccount01 = () => {
    const postDataAccount01 = async () => {
      try {
        const response = await controllerRoom.postDataAccount01({
          RoomId: RoomID01,
          IdCard: formatData[0],
          name: formatData[1],
          dateOfBirth: formatData[2],
          gender: formatData[3],
          phoneNumber: formatData[4],
          address: formatData[5],
        });

        console.log("check data send to form tow", response);
      } catch (error) {
        console.log("Failed to fetch data :", error);
      }
    };
    postDataAccount01();
  };

  return (
    <>
      <ContainerScannerData>
        <h2>Xác Thực Thông Tin</h2>
        <WrapperContent>
          <p>Mã Căng Cước: {formatData[0]}</p>
          <p>Tên: {formatData[1]}</p>
          <p>Ngày Sinh: {formatData[2]}</p>
          <p>Giới Tính: {formatData[3]}</p>
          <p>Số Điện Thoại: {formatData[4]}</p>
          <p>Địa Chỉ: {formatData[5]}</p>
        </WrapperContent>
        <BtnDone onClick={handlePostDataAccount01}>
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
