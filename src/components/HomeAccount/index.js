import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import createRoom from "../../api/createRoom";
import ModalGlobal from "../ModalGlobal";
import Loader from "../Loader";

import {
  HomeAccountContainer,
  NavbarWrapper,
  LogoWrapper,
  FunctionWrapper,
  HomeAccountBody,
  HomeAccountImgWrapper,
  HomeAccountContentWrapper,
  SettingIcon,
  RoomWrapper,
  RomBtn,
  ModalContentProfile,
  BtnLogoutAccount,
  IconInput,
  IconBtn,
  InputWrapper,
} from "./HomeAccountElements";

const HomeAccount = () => {
  const [showLoading, setShowLoading] = useState(false);
  const name = sessionStorage.getItem("name");
  const age = sessionStorage.getItem("age");
  const role = sessionStorage.getItem("role");
  const cccd = sessionStorage.getItem("cccd");
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleProfile = () => {
    setShowModal(true);
  };

  const CloseModal = () => {
    setShowModal(false);
  };

  const handleCreateRoom = () => {
    setShowLoading(true);
    let RoomID03 = Math.floor(Math.random() * 999999) + 100000;
    sessionStorage.setItem("RoomID03", RoomID03);
    const postRoomID = async () => {
      try {
        const response = await createRoom.postAll({
          IdCard: cccd,
          RoomID: RoomID03,
        });
        console.log("create room 3", response);
        setShowLoading(false);
        navigate("/033445323");
      } catch (error) {
        console.log("Failed to fetch data :", error);
      }
    };
    postRoomID();
  };

  return (
    <>
      {showLoading ? <Loader></Loader> : null}
      <ModalGlobal showModal={showModal} CloseModal={() => CloseModal()}>
        <ModalContentProfile>
          <h1>Thông Tin Cá Nhân</h1>

          <div className="information">
            <div className="imgWrapper">
              <i className="fa-regular fa-pen-to-square iconEditor"></i>
              <img src={require("../../images/images.jpeg")} />
            </div>
            <div className="Content">
              <p>Tên : {name}</p>
              <p>Ngày Sinh : {age}</p>
              <p>Vai Trò : {role}</p>
            </div>
          </div>
          <BtnLogoutAccount>
            <i className="fa-regular fa-right-from-bracket"></i>
            Đăng Xuất
          </BtnLogoutAccount>
        </ModalContentProfile>
      </ModalGlobal>
      <HomeAccountContainer>
        <NavbarWrapper>
          <LogoWrapper>
            <img src={require("../../images/logo.png")} />
            <h4>TC-COVID</h4>
          </LogoWrapper>
          <FunctionWrapper>
            <SettingIcon />
            <img
              src={require("../../images/images.jpeg")}
              onClick={handleProfile}
            />
          </FunctionWrapper>
        </NavbarWrapper>

        <HomeAccountBody>
          <HomeAccountImgWrapper>
            <img src={require("../../images/room.png")} />
          </HomeAccountImgWrapper>
          <HomeAccountContentWrapper>
            <h1>Tài Khoản Bác Sĩ Tiêm Chủng</h1>
            <p>
              Tạo phòng để thực hiện tiêm chủng. Mọi hành vi sai lệch phải chịu
              trách nhiệm trước pháp luật.
            </p>
            <RoomWrapper>
              <RomBtn onClick={handleCreateRoom}>
                <i class="fa-regular fa-circle-plus"></i>
                Tạo Phòng
              </RomBtn>
              <InputWrapper>
                <input placeholder="Nhập vào id phòng" />
              </InputWrapper>
            </RoomWrapper>
          </HomeAccountContentWrapper>
        </HomeAccountBody>
      </HomeAccountContainer>
    </>
  );
};

export default HomeAccount;
