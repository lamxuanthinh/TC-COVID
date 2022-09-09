import React from "react";
import { ContainerVaccinationRegister } from "./VaccinationRegisterElements";
import { useState } from "react";
import ModalCreateQr from "../ModalCreateQr";
import signUpApi from "../../api/signUpApi";

const VaccinationRegister = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [phoneCode, setPhoneCode] = useState(1);

  let FakeCard = Math.floor(Math.random() * 9999999999) + 1000000000;
  const dataSubmit = `${FakeCard}|${fullName}|${age}|${gender}|${phoneNumber}|${address}`;

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleDone = () => {
    setOpenModal(true);
    const postSignUpPhoneCode = async () => {
      try {
        console.log(phoneNumber);
        const responsePhone = await signUpApi.postPhoneCode({
          phoneNumber: phoneNumber,
        });
        console.log(responsePhone);
        setPhoneCode(responsePhone);
      } catch (error) {
        console.log("Failed to post phone code", error);
      }
    };
    // postSignUpPhoneCode();
  };

  return (
    <>
      <ModalCreateQr
        openModal={openModal}
        closeModal={closeModal}
        dataSubmit={dataSubmit}
        responsePhoneCode={phoneCode}
      ></ModalCreateQr>
      <ContainerVaccinationRegister>
        <div className="containerRegister">
          <header>ĐĂNG KÍ MÃ TIÊM CHỦNG</header>
          <form action="#">
            <div className="form first">
              <div className="details personal">
                <span className="title">Thông Tin Cá Nhân</span>

                <div className="fields name">
                  <div className="input-field">
                    <label>Họ Và Tên</label>
                    <input
                      className="name1"
                      type="text"
                      placeholder="Họ và tên"
                      onChange={(e) => {
                        setFullName(e.target.value);
                      }}
                    />
                    <span className="warning"></span>
                  </div>

                  <div className="input-field">
                    <label>Ngày sinh</label>
                    <input
                      className="dob"
                      type="date"
                      placeholder="Enter birth date"
                      onChange={(e) => {
                        setAge(e.target.value);
                      }}
                    />
                    <span className="warning"></span>
                  </div>

                  <div className="input-field">
                    <label>Số điện thoại</label>
                    <input
                      className="phone1"
                      type="tel"
                      placeholder="Số Điện Thoại"
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                    />
                    <span className="warning"></span>
                  </div>

                  <div className="input-field">
                    <label>Giới tính</label>
                    <select
                      className="gender"
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                    >
                      <option disabled defaultValue>
                        Giới tính
                      </option>
                      <option value="Nam">Nam</option>
                      <option value="Nữ">Nữ</option>
                      <option>Khác</option>
                    </select>
                    <span className="warning"></span>
                  </div>
                </div>
              </div>

              <div className="details ID">
                <span className="title">Địa Chỉ Liên Lạc</span>

                <div className="fields">
                  <div className="input-field">
                    <label>Tỉnh/Thành phố</label>
                    <select>
                      <option disabled defaultValue>
                        Tỉnh/Thành phố
                      </option>
                      <option>Quảng Nam</option>
                      <option>Quảng Trị</option>
                      <option>Phú Yên</option>
                      <option>Nghệ An</option>
                      <option>Đà Nẵng</option>
                    </select>
                    <span className="warning"></span>
                  </div>
                  <div className="input-field">
                    <label>Quận/Huyện</label>
                    <select>
                      <option disabled defaultValue>
                        Quận/Huyện
                      </option>
                      <option>Thăng Bình</option>
                      <option>Hội An</option>
                      <option>Quế Sơn</option>
                      <option>Hà Lam</option>
                      <option>Tam Kỳ</option>
                    </select>
                    <span className="warning"></span>
                  </div>

                  <div className="input-field">
                    <label>Xã/Phường</label>
                    <select>
                      <option disabled defaultValue>
                        Xã/Phường
                      </option>
                      <option>Tân An</option>
                      <option>Cẩm Châu</option>
                      <option>Thanh Hà</option>
                      <option>Cẩm Nam</option>
                      <option>Sơn Phong</option>
                    </select>
                    <span className="warning"></span>
                  </div>

                  <div className="input-field">
                    <label>Địa chỉ hiện tại</label>
                    <input
                      className="address"
                      type="text"
                      placeholder="Địa chỉ hiện tại"
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                    <span className="warning"></span>
                  </div>
                </div>

                <button className="nextBtn" type="button" onClick={handleDone}>
                  <span className="btnText">
                    Hoàn Thành <i className="fa-solid fa-check"></i>
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </ContainerVaccinationRegister>
    </>
  );
};

export default VaccinationRegister;
