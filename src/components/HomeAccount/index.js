import React from "react";
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
  IconInput,
  IconBtn,
  InputWrapper,
} from "./HomeAccountElements";

const HomeAccount = () => {
  return (
    <>
      <HomeAccountContainer>
        <NavbarWrapper>
          <LogoWrapper>
            <img src={require("../../images/logo.png")} />
            <h4>TC-COVID</h4>
          </LogoWrapper>
          <FunctionWrapper>
            <SettingIcon />
            <img src={require("../../images/images.jpeg")} />
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
                <IconBtn />
                Tạo Phòng
              </RomBtn>
              <InputWrapper>
                <IconInput />
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
