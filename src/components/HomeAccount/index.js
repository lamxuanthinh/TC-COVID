import React from "react";
import ModalGlobal from "../ModalGlobal";
import { useState } from "react";

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
  const [showModal, setShowModal] = useState(false);

  const handleProfile = () => {
    setShowModal(true);
  };

  const CloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <ModalGlobal showModal={showModal} CloseModal={() => CloseModal()}>
        <ModalContentProfile>
          <h1>Thông Tin Cá Nhân</h1>

          <div className="information">
            <div className="imgWrapper">
              <i className="fa-regular fa-pen-to-square iconEditor"></i>
              <img src={require("../../images/images.jpeg")} />
            </div>
            <div className="Content">
              <p>Tên : Lâm Xuân Thịnh</p>
              <p>Ngày Sinh : 29/08/2003</p>
              <p>Vai Trò : Bác Sĩ Tiêm Chủng</p>
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
            <img src={require("../../images/test2.png")} />
          </HomeAccountImgWrapper>
          <HomeAccountContentWrapper>
            <h1>Tài Khoản Bác Sĩ Tiêm Chủng</h1>
            <p>
              Tạo phòng để thực hiện tiêm chủng , chỉ gửi mã phòng cho những
              người trong hệ thống tiêm chủng . Mọi hành vi sai lệch phải chịu
              trách nhiệm trước pháp luật.
            </p>
            <RoomWrapper>
              <RomBtn>
                <i class="fa-regular fa-circle-plus"></i>
                {/* <IconBtn /> */}
                Tạo Phòng
              </RomBtn>
              <InputWrapper>
                {/* <IconInput /> */}
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
