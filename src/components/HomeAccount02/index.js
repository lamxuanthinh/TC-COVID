import React from "react";
import ModalGlobal from "../ModalGlobal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import createRoom from "../../api/createRoom";

const HomeAccount01 = () => {
  const name = sessionStorage.getItem("name");
  const age = sessionStorage.getItem("age");
  const role = sessionStorage.getItem("role");
  const cccd = sessionStorage.getItem("cccd");
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [idRoom, setIdRoom] = useState("");

  const handleProfile = () => {
    setShowModal(true);
  };

  const CloseModal = () => {
    setShowModal(false);
  };

  const handleCheckIDRoom = () => {
    setShowLoading(true);
    const postRoomID = async () => {
      try {
        const response = await createRoom.postCheckRoom({
          RoomID: idRoom,
          IdCard: cccd,
        });
        console.log("check data", response);

        if (role === "Y Tá Kiểm Tra Sức Khoẻ") {
          sessionStorage.setItem("RoomID01", idRoom);
          navigate("/01");
          setShowLoading(false);
        } else {
          sessionStorage.setItem("RoomID02", idRoom);
          navigate("/02");
          setShowLoading(false);
        }
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
              <RomBtn onClick={handleCheckIDRoom}>
                <i class="fa-regular fa-circle-plus"></i>
                Vào Phòng
              </RomBtn>
              <InputWrapper>
                <input
                  onChange={(e) => {
                    setIdRoom(e.target.value);
                  }}
                  placeholder="Nhập vào id phòng"
                />
              </InputWrapper>
            </RoomWrapper>
          </HomeAccountContentWrapper>
        </HomeAccountBody>
      </HomeAccountContainer>
    </>
  );
};

export default HomeAccount01;
