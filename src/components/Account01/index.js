import React, { useState } from "react";
import QrReader from "react-qr-scanner";
import ModalListUser from "./ ModalListUser";
import ModalInformation from "./ModalInformation";
import ModalLeave from "./ModalLeave";
import ModalGlobal from "../ModalGlobal";
import ScannerData from "./ScannerData";
import {
  WrapperModal,
  ContainerAccount01,
  IconScanner,
  WrapperIcon,
  IconInformation,
  IconListUser,
  IconLock,
  IconChat,
  BtnClose,
} from "./Account01Elements";

const Account01 = () => {
  const [showModal, setShowModal] = useState(false);
  const [tagDataModal, setTagDataModal] = useState("");

  // scanner qr
  const handleError = (error) => {
    console.log(error);
  };

  const handleScan = (data) => {
    if (data !== null) {
      const dataScanner = data.text;
      setTagDataModal(<ScannerData dataScanner={dataScanner}></ScannerData>);
      setShowModal(true);
    }
  };

  // handle menu icon
  const CloseModal = () => {
    setShowModal(false);
  };

  const handleInformation = () => {
    setTagDataModal(<ModalInformation></ModalInformation>);
    setShowModal(true);
  };

  const handleListUser = () => {
    setTagDataModal(<ModalListUser></ModalListUser>);
    setShowModal(true);
  };

  const handleLeave = () => {
    setTagDataModal(<ModalLeave></ModalLeave>);
    setShowModal(true);
  };

  return (
    <>
      {showModal ? (
        <WrapperModal>
          <ModalGlobal showModal={showModal} CloseModal={() => CloseModal()}>
            {tagDataModal}
          </ModalGlobal>
        </WrapperModal>
      ) : (
        <ContainerAccount01>
          <QrReader
            className="qrScanner"
            onError={handleError}
            onScan={handleScan}
          ></QrReader>
          <IconScanner></IconScanner>
          <WrapperIcon>
            <BtnClose onClick={handleLeave}>
              <i className="fa-regular fa-right-from-bracket"></i>Thoát Phòng
            </BtnClose>
            <IconChat />
            <IconInformation onClick={handleInformation} />
            <IconListUser onClick={handleListUser} />
            <IconLock />
          </WrapperIcon>
        </ContainerAccount01>
      )}
    </>
  );
};

export default Account01;
