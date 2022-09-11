import React from "react";
import { useState, useEffect } from "react";
import ModalGlobal from "../ModalGlobal";
import ModalComplete from "./ModalComplete";
import ModalDelete from "./ModalDelete";
import ModalLeave from "./ModalLeave";
import ModalListUser from "./ ModalListUser";
import ModalInformation from "./ModalInformation";
import controllerRoom from "../../api/controllerRoom";
import {
  ContainerAccount03,
  ContainerDocumentPrint,
  WrapperAll,
  Account02Container,
  Header,
  LogoWrapper,
  ListInformations,
  InformationItem,
  IconName,
  DataInformations,
  IconLimitedCard,
  IconPhone,
  IconGender,
  Table,
  InputDayAndTypeVaccine,
  MenuHandle,
  BtnDone,
  BtnDelete,
  BtnClose,
  WrapperIcon,
  IconInformation,
  IconListUser,
  IconLock,
  IconChat,
} from "./Account03Elements";

const Account03 = () => {
  const count = 0;
  const [showModal, setShowModal] = useState(false);
  const [buttonHandle, setButtonHandle] = useState("");
  const [addressVaccination, setAddressVaccination] = useState("");
  const [dataUser, setDataUser] = useState({});
  const [typeVaccination, setTypeVaccination] = useState("");

  const CloseModal = () => {
    setShowModal(false);
  };

  const RoomID03 = sessionStorage.getItem("RoomID03");
  // useEffect(() => {
  const getUsers03 = async () => {
    try {
      const response = await controllerRoom.getUser03({
        RoomId: RoomID03,
      });
      setDataUser(response);
      console.log(response);
      console.log("check data", response.data);
    } catch (error) {
      console.log("Failed to fetch data :", error);
    }
  };
  getUsers03();
  // }, [count]);

  let tagDataModal;
  if (buttonHandle === "complete") {
    tagDataModal = (
      <ModalComplete
        typeVaccination={typeVaccination}
        addressVaccination={addressVaccination}
        CloseModal={() => CloseModal()}
        Count={() => {
          count++;
        }}
        dataUser={dataUser}
      ></ModalComplete>
    );
  } else if (buttonHandle === "delete") {
    tagDataModal = (
      <ModalDelete
        CloseModal={() => CloseModal()}
        Count={() => {
          count++;
        }}
        dataUser={dataUser}
      ></ModalDelete>
    );
  } else if (buttonHandle === "leave") {
    tagDataModal = <ModalLeave></ModalLeave>;
  } else if (buttonHandle === "listUser") {
    tagDataModal = <ModalListUser></ModalListUser>;
  } else {
    tagDataModal = <ModalInformation></ModalInformation>;
  }

  const handleDone = () => {
    setButtonHandle("complete");
    setShowModal(true);
  };

  const handleDelete = () => {
    setButtonHandle("delete");
    setShowModal(true);
  };

  const handleLeave = () => {
    setButtonHandle("leave");
    setShowModal(true);
  };

  const handleInformation = () => {
    setButtonHandle("Information");
    setShowModal(true);
  };

  const handleListUser = () => {
    setButtonHandle("listUser");
    setShowModal(true);
  };

  return (
    <>
      <ContainerAccount03>
        <WrapperAll>
          <ModalGlobal showModal={showModal} CloseModal={() => CloseModal()}>
            {tagDataModal}
          </ModalGlobal>

          <Account02Container>
            <h2>XÁC THỰC TIÊM CHỦNG</h2>
            <ListInformations>
              <InformationItem>
                <IconName />
                <DataInformations>Tên:&nbsp;Lâm Xuân Thịnh</DataInformations>
              </InformationItem>

              <InformationItem>
                <IconGender />
                <DataInformations>Giới Tính:&nbsp;Nam</DataInformations>
              </InformationItem>

              <InformationItem>
                <IconLimitedCard />
                <DataInformations>CCCD:&nbsp;0989833847</DataInformations>
              </InformationItem>

              <InformationItem>
                <IconPhone />
                <DataInformations>
                  Số Điện Thoại:&nbsp;0352786331
                </DataInformations>
              </InformationItem>
            </ListInformations>
            <Table>
              <table>
                <thead>
                  <tr>
                    <th>Mũi Tiêm</th>
                    <th>Ngày Tiêm</th>
                    <th>Loại Vắc Xin</th>
                    <th>Nơi Tiêm</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="centerText">
                    <td>1</td>
                    <td>23/07/2021</td>
                    <td>AstraZeneca</td>
                    <td>Trạm Y Tế Xã Bình Dương Thăng Bình Quảng Nam</td>
                  </tr>
                  <tr className="centerText">
                    <td>2</td>
                    <td>03/012/2021</td>
                    <td>AstraZeneca</td>
                    <td>Trạm Y Tế Xã Bình Dương Thăng Bình Quảng Nam</td>
                  </tr>
                  <tr className="centerText">
                    <td>3</td>
                    <td>14/02/2022</td>
                    <td>AstraZeneca</td>
                    <td>Trạm Y Tế Xã Bình Dương Thăng Bình Quảng Nam</td>
                  </tr>
                </tbody>
              </table>
            </Table>

            <InputDayAndTypeVaccine>
              <div className="inputAdddress">
                <label>Nơi Tiêm</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setAddressVaccination(e.target.value);
                  }}
                />
              </div>

              <div className="inputTypeVaccine">
                <label>Loại Vắc Xin</label>
                <select
                  onChange={(e) => {
                    setTypeVaccination(e.target.value);
                  }}
                >
                  <option disabled defaultValue>
                    Loại Vaccine
                  </option>
                  <option>AstraZeneca</option>
                  <option>Gam-COVID-Vac</option>
                  <option>Vero Cell</option>
                  <option>Pfizer/BioNTech</option>
                  <option>Spikevax/Moderna</option>
                  <option>Janssen</option>
                  <option>Hayat-Vax</option>
                  <option>Abdala</option>
                </select>
              </div>
            </InputDayAndTypeVaccine>

            <MenuHandle>
              <BtnDone onClick={handleDone}>
                <i className="fa-regular fa-circle-check"></i>Hoàn Thành
              </BtnDone>
              <BtnDelete onClick={handleDelete}>
                <i className="fa-regular fa-trash-can-clock"></i>Xoá Bỏ
              </BtnDelete>
              <BtnClose onClick={handleLeave}>
                <i className="fa-regular fa-right-from-bracket"></i>Thoát Phòng
              </BtnClose>
              <WrapperIcon>
                <IconChat />
                <IconInformation onClick={handleInformation} />
                <IconListUser onClick={handleListUser} />
                <IconLock />
              </WrapperIcon>
            </MenuHandle>
          </Account02Container>
        </WrapperAll>
      </ContainerAccount03>
      <ContainerDocumentPrint>
        <div className="phieu">
          <div className="khung">
            <div className="QRconghoaxahoi">
              <div className="QR">QR</div>
              <div className="conghoaxahoi">
                <b className="conghoa">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</b>
                <br />
                <b className="doclap">Độc lập - Tự do - Hạnh phúc</b>
                <hr className="gachchan" />
                <b className="giayxac">
                  GIẤY XÁC NHẬN ĐÃ TIÊM VẮC XIN COVID-19
                </b>
                <br />
                <b className="giayxac">(CERTIFICATE OF COVID-19 VACCINATION)</b>
              </div>
            </div>
            <br />
            <div className="thongtin">
              Họ và tên/Name: <span id="thongtin__name">{dataUser.name}</span>
              <br />
              Giới tính/Sex: <span id="thongtin__sex">{dataUser.gender}</span>
              <br />
              Ngày sinh/Date of birth(day/month/year):{" "}
              <span id="thongtin__date">{dataUser.dateOfBirth}</span>
              <br />
              Số CCCD/CMT/hộ chiếu/định danh cá nhân(ID):{" "}
              <span id="thongtin__id">{dataUser.IdCard}</span>
              <br />
              Số điện thoại/Tel:{" "}
              <span id="thongtin__tel">{dataUser.phoneNumber}</span>
              <br />
              Địa chỉ/Address:{" "}
              <span id="thongtin__address">{dataUser.address}</span>
              <br />
              <br />
              Đã được tiêm vắc xin phòng bệnh COVID-19/Has been vaccine with
              COVID-19:
              <br />
            </div>
            <table
              className="bangdongdau"
              border="1"
              cellspacing="0"
              id="bangdongdau"
            >
              <tr>
                <td colspan="2" className="lieucoban">
                  <b>Liều cơ bản/primary dose</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Mũi 1/First dose</b>
                  <br />
                  Ngày/date: <a id="date-First-Dose"></a> <br />
                  Loại vắc xin/Vaccine: <a id="vaccine-First-Dose"></a>
                  <br />
                  <br />
                  <br />
                  <br />
                </td>
                <td className="kyten">
                  Cơ sở tiêm chủng/Immunization unit <br />
                  Ký tên, đóng dấu <br />
                  (Sign and Stamp)
                  <br />
                  <br />
                  <br />
                  <br />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </ContainerDocumentPrint>
    </>
  );
};

export default Account03;
