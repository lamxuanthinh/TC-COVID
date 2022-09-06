import React from "react";
import styled from "styled-components";

const ModalDelete = () => {
  return (
    <ContainerModalDelete>
      <img src={require("../../images/warning.png")} />
      <h2>Xoá Lâm Xuân Thịnh Tạm Thời</h2>
      <p>Hệ thống sẽ người này xuống cuối danh sách</p>
      <BtnDelete>
        <i className="fa-regular fa-circle-exclamation"></i>
        Đồng ý
      </BtnDelete>
    </ContainerModalDelete>
  );
};

export default ModalDelete;

const ContainerModalDelete = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  img {
    width: 60%;
    height: 60%;
    object-fit: cover;
    margin: 10px auto 0 auto;
  }
  h2 {
    text-align: center;
  }

  p {
    text-align: center;
    padding: 10px 0;
  }

  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    p {
      font-size: 0.8rem;
    }
    h2 {
      font-size: 1.1rem;
    }
  }
`;

const BtnDelete = styled.button`
  width: 60%;
  margin: 10px auto 25px;
  cursor: pointer;
  outline: none;
  white-space: normal;
  border: none;
  border-radius: 5px;
  padding: 12px;
  background-color: #d0243f;
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
