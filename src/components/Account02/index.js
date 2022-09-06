import React from "react";
import { useState } from "react";
import ModalGlobal from "../ModalGlobal";
import ModalComplete from "./ModalComplete";
import ModalDelete from "./ModalDelete";
import ModalLeave from "./ModalLeave";
import ModalListUser from "./ ModalListUser";
import ModalInformation from "./ModalInformation";

import {
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
  MenuHandle,
  BtnDone,
  BtnDelete,
  BtnClose,
  WrapperIcon,
  IconInformation,
  IconListUser,
  IconLock,
  IconChat,
} from "./Account02Elements";

const Account02 = () => {
  const [showModal, setShowModal] = useState(false);
  const [buttonHandle, setButtonHandle] = useState("");
  const [dataRadio, setDataRadio] = useState([]);

  const handleRadio = (e) => {
    setDataRadio([...dataRadio, e.target.value]);
  };

  const CloseModal = () => {
    setShowModal(false);
  };

  let tagDataModal;
  if (buttonHandle === "complete") {
    tagDataModal = <ModalComplete dataRadio={dataRadio.length}></ModalComplete>;
  } else if (buttonHandle === "delete") {
    tagDataModal = <ModalDelete></ModalDelete>;
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
      {/* <Header>
        <LogoWrapper>
          <img src={require("../../images/logo.png")} />
          <h4>TC-COVID</h4>
        </LogoWrapper>
      </Header> */}
      <WrapperAll>
        <ModalGlobal showModal={showModal} CloseModal={() => CloseModal()}>
          {tagDataModal}
        </ModalGlobal>

        <Account02Container>
          <h2>XÁC THỰC BỆNH TẬT</h2>
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
              <DataInformations>CCCD:&nbsp;092083928390</DataInformations>
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
                  <th>Tiền sử</th>
                  <th>Triệu chứng</th>
                  <th>Có</th>
                  <th>Không</th>
                  <th>Không rõ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. Tiền sử phản vệ từ độ 2 trở lên</td>
                  <td>
                    <input
                      type="text"
                      className="inputData"
                      placeholder="Ghi rõ loại tác nhân dị ứng"
                    />
                  </td>
                  <td className="centerRadio">
                    <input
                      type="radio"
                      value="co"
                      name="1"
                      onChange={handleRadio}
                    />
                  </td>
                  <td className="centerRadio">
                    <input
                      type="radio"
                      value="khong"
                      name="1"
                      onChange={handleRadio}
                      defaultChecked
                    />
                  </td>
                  <td className="centerRadio">
                    <input
                      type="radio"
                      value="khongro"
                      onChange={handleRadio}
                      name="1"
                    />
                  </td>
                </tr>

                <tr>
                  <td>2. Tiền sử bị COVID-19 trong vòng 6 tháng</td>
                  <td>&nbsp;</td>
                  <td className="centerRadio">
                    <input type="radio" name="2" onChange={handleRadio} />
                  </td>
                  <td className="centerRadio">
                    <input
                      type="radio"
                      name="2"
                      onChange={handleRadio}
                      defaultChecked
                    />
                  </td>
                  <td className="centerRadio">
                    <input type="radio" name="2" onChange={handleRadio} />
                  </td>
                </tr>

                <tr>
                  <td>3. Tiền sử tiêm vắc xin khác trong 14 ngày qua</td>
                  <td>
                    <input
                      type="text"
                      className="inputData"
                      placeholder="Nếu có, ghi rõ loại vắc xin"
                    />
                  </td>
                  <td className="centerRadio">
                    <input type="radio" name="3" onChange={handleRadio} />
                  </td>
                  <td className="centerRadio">
                    <input
                      type="radio"
                      name="3"
                      onChange={handleRadio}
                      defaultChecked
                    />
                  </td>
                  <td className="centerRadio">
                    <input type="radio" name="3" onChange={handleRadio} />
                  </td>
                </tr>

                <tr>
                  <td>4. Tiền sử suy giảm miễn dịch</td>
                  <td>
                    <input
                      type="text"
                      className="inputData"
                      placeholder="Nếu có, ghi rõ loại vắc xin"
                    />
                  </td>
                  <td className="centerRadio">
                    <input type="radio" name="4" onChange={handleRadio} />
                  </td>
                  <td className="centerRadio">
                    <input
                      type="radio"
                      name="4"
                      onChange={handleRadio}
                      defaultChecked
                    />
                  </td>
                  <td className="centerRadio">
                    <input type="radio" name="4" onChange={handleRadio} />
                  </td>
                </tr>

                <tr>
                  <td>5. Đang dùng thuốc ức chế miễn dịch</td>
                  <td>
                    <input
                      type="text"
                      className="inputData"
                      placeholder="Nếu có, ghi rõ loại vắc xin"
                    />
                  </td>
                  <td className="centerRadio">
                    <input type="radio" name="5" onChange={handleRadio} />
                  </td>
                  <td className="centerRadio">
                    <input
                      type="radio"
                      name="5"
                      onChange={handleRadio}
                      defaultChecked
                    />
                  </td>
                  <td className="centerRadio">
                    <input type="radio" name="5" onChange={handleRadio} />
                  </td>
                </tr>

                <tr>
                  <td>6. Bệnh cấp tính</td>
                  <td>
                    <input
                      type="text"
                      className="inputData"
                      placeholder="Nếu có, ghi rõ loại vắc xin"
                    />
                  </td>
                  <td className="centerRadio">
                    <input type="radio" name="6" onChange={handleRadio} />
                  </td>
                  <td className="centerRadio">
                    <input
                      type="radio"
                      name="6"
                      onChange={handleRadio}
                      defaultChecked
                    />
                  </td>
                  <td className="centerRadio">
                    <input type="radio" name="6" onChange={handleRadio} />
                  </td>
                </tr>

                <tr>
                  <td>7. Tiền sử bệnh mạn tính, đang tiến triển</td>
                  <td>
                    <input
                      type="text"
                      className="inputData"
                      placeholder="Nếu có, ghi rõ loại vắc xin"
                    />
                  </td>
                  <td className="centerRadio">
                    <input type="radio" name="7" onChange={handleRadio} />
                  </td>
                  <td className="centerRadio">
                    <input
                      type="radio"
                      name="7"
                      onChange={handleRadio}
                      defaultChecked
                    />
                  </td>
                  <td className="centerRadio">
                    <input type="radio" name="7" onChange={handleRadio} />
                  </td>
                </tr>

                <tr>
                  <td>8. Tiền sử bệnh mạn tính đã điều trị ổn</td>
                  <td>&nbsp;</td>
                  <td className="centerRadio">
                    <input type="radio" name="8" onChange={handleRadio} />
                  </td>
                  <td className="centerRadio">
                    <input
                      type="radio"
                      name="8"
                      onChange={handleRadio}
                      defaultChecked
                    />
                  </td>
                  <td className="centerRadio">
                    <input type="radio" name="8" onChange={handleRadio} />
                  </td>
                </tr>

                <tr>
                  <td>9. Đang mang thai</td>
                  <td>&nbsp;</td>
                  <td className="centerRadio">
                    <input type="radio" name="9" onChange={handleRadio} />
                  </td>
                  <td className="centerRadio">
                    <input
                      type="radio"
                      name="9"
                      onChange={handleRadio}
                      defaultChecked
                    />
                  </td>
                  <td className="centerRadio">
                    <input type="radio" name="9" onChange={handleRadio} />
                  </td>
                </tr>

                <tr>
                  <td>10. Độ tuổi: ≥65 tuổi</td>
                  <td>&nbsp;</td>
                  <td className="centerRadio">
                    <input type="radio" name="10" onChange={handleRadio} />
                  </td>
                  <td className="centerRadio">
                    <input
                      type="radio"
                      name="10"
                      onChange={handleRadio}
                      defaultChecked
                    />
                  </td>
                  <td className="centerRadio">
                    <input type="radio" name="10" onChange={handleRadio} />
                  </td>
                </tr>

                <tr>
                  <td>11. Tiền sử rối loạn đông máu</td>
                  <td>&nbsp;</td>
                  <td className="centerRadio">
                    <input type="radio" name="11" onChange={handleRadio} />
                  </td>
                  <td className="centerRadio">
                    <input
                      type="radio"
                      name="11"
                      onChange={handleRadio}
                      defaultChecked
                    />
                  </td>
                  <td className="centerRadio">
                    <input type="radio" name="11" onChange={handleRadio} />
                  </td>
                </tr>

                <tr>
                  <td>12. Tiền sử dị ứng với các dị nguyên khác</td>
                  <td>&nbsp;</td>
                  <td className="centerRadio">
                    <input type="radio" name="12" onChange={handleRadio} />
                  </td>
                  <td className="centerRadio">
                    <input
                      type="radio"
                      name="12"
                      onChange={handleRadio}
                      defaultChecked
                    />
                  </td>
                  <td className="centerRadio">
                    <input type="radio" name="12" onChange={handleRadio} />
                  </td>
                </tr>
              </tbody>
            </table>
          </Table>
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
    </>
  );
};

export default Account02;
