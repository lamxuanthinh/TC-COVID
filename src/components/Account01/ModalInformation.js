import React from "react";
import styled from "styled-components";

const ModalInformation = () => {
  return (
    <ContainerModalInformation>
      <h1>Thông Tin Phòng</h1>
      <div>
        <i className="fa-solid fa-display-code"></i>
        Mã phòng : 738934
      </div>
      <div>
        <i className="fa-regular fa-user-nurse"></i>
        Người tạo phòng : Lâm Xuân Thịnh
      </div>
      <div>
        <i className="fa-regular fa-triangle-exclamation"></i>
        Lưu ý : Không cũng cấp mã phòng cho người khác
      </div>
    </ContainerModalInformation>
  );
};

export default ModalInformation;

const ContainerModalInformation = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  h1 {
    margin-top: 20px;
    padding: 5px;
  }

  div {
    padding: 15px 35px 15px 35px;
    i {
      margin: auto 6px auto 0;
      font-size: 1.2rem;
      align-items: center;
    }
  }
`;
