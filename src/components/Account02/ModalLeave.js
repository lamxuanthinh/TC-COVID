import React from "react";
import controllerRoom from "../../api/controllerRoom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ModalLeave = () => {
  const navigate = useNavigate();
  const cccd = sessionStorage.getItem("cccd");
  const RoomID02 = sessionStorage.getItem("RoomID01");

  const handleLeaveRoom = () => {
    const leaveRoom = async () => {
      try {
        const response = await controllerRoom.leaveRoom({
          RoomID: RoomID02,
          IdCard: cccd,
        });
        console.log("check data", response.data);
        if (response.data === true) {
          navigate("/homeAccount=001122");
        }
      } catch (error) {
        console.log("Failed to fetch data :", error);
      }
    };
    leaveRoom();
  };
  return (
    <>
      <ContainerModalDelete>
        <img src={require("../../images/Leave.png")} />
        <h2>Bạn có chắc chắn thoát</h2>
        <BtnLeave onClick={handleLeaveRoom}>
          <i className="fa-regular fa-triangle-exclamation"></i>
          Thoát
        </BtnLeave>
      </ContainerModalDelete>
    </>
  );
};

export default ModalLeave;

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
    padding: 15px 0;
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

const BtnLeave = styled.button`
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
