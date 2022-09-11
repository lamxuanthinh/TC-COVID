import React, { useEffect } from "react";
import { useState, useRef } from "react";
import isEmpty from "validator/lib/isEmpty";
import signUpApi from "../../api/signUpApi";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

import {
  ModalContainer,
  ModalWrapper,
  Close,
  ModalInput,
  BtnNext,
  BtnClose,
  ModalInputWrapper,
  BtnWrapper,
  ModalTitle,
  ModalContent,
} from "./ModalElements";

const Modal = ({ dataSubmit, openModal, CloseModal, responsePhoneCode }) => {
  const navigate = useNavigate();
  const [phoneCode01, setPhoneCode01] = useState("");
  const [phoneCode02, setPhoneCode02] = useState("");
  const [phoneCode03, setPhoneCode03] = useState("");
  const [phoneCode04, setPhoneCode04] = useState("");
  const [phoneCode05, setPhoneCode05] = useState("");
  const [phoneCode06, setPhoneCode06] = useState("");
  const numberPhoneCode = [
    phoneCode01,
    phoneCode02,
    phoneCode03,
    phoneCode04,
    phoneCode05,
    phoneCode06,
  ].join("");
  const ref01 = useRef("");
  const ref02 = useRef("");
  const ref03 = useRef("");
  const ref04 = useRef("");
  const ref05 = useRef("");
  const ref06 = useRef("");

  // count down
  const [count, setCount] = useState(60);
  useEffect(() => {
    if (count == 0) {
      return;
    }
    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  // next focus pointer
  useEffect(() => {
    ref01.current.focus();
  }, []);

  const handlePhoneCode01 = (e) => {
    if (!isEmpty(e.target.value)) {
      setPhoneCode01(e.target.value);
      ref02.current.focus();
    }
  };

  const handlePhoneCode02 = (e) => {
    if (!isEmpty(e.target.value)) {
      setPhoneCode02(e.target.value);
      ref03.current.focus();
    }
  };

  const handlePhoneCode03 = (e) => {
    if (!isEmpty(e.target.value)) {
      setPhoneCode03(e.target.value);
      ref04.current.focus();
    }
  };

  const handlePhoneCode04 = (e) => {
    if (!isEmpty(e.target.value)) {
      setPhoneCode04(e.target.value);
      ref05.current.focus();
    }
  };

  const handlePhoneCode05 = (e) => {
    if (!isEmpty(e.target.value)) {
      setPhoneCode05(e.target.value);
      ref06.current.focus();
    }
  };

  const handlePhoneCode06 = (e) => {
    setPhoneCode06(e.target.value);
  };

  // send qr code
  const handleSendSigUpData = () => {
    if (responsePhoneCode == numberPhoneCode) {
      const postSignupData = async () => {
        try {
          const responseData = await signUpApi.postSignupData(dataSubmit);
          console.log(responseData);
        } catch (error) {
          console.log("Failed to post data signup : ", error);
        }
      };
      postSignupData();
    }
    navigate("/signin");
  };

  return (
    <>
      <ModalContainer openModal={openModal}>
        <ModalWrapper onClick={(e) => e.stopPropagation()}>
          <Close onClick={CloseModal}></Close>
          <ModalTitle>Xác thực số điện thoại</ModalTitle>
          <ModalContent>
            Mã xác thực được gửi đến số điện thoại 0352786331
          </ModalContent>
          <ModalContent>
            {count === 0 ? (
              <>Mã xác thực hết hiệu lực </>
            ) : (
              <>Thời gian nhập mảng xác thực là : {count} s</>
            )}
          </ModalContent>
          <ModalInputWrapper>
            <ModalInput ref={ref01} onChange={handlePhoneCode01}></ModalInput>
            <ModalInput ref={ref02} onChange={handlePhoneCode02}></ModalInput>
            <ModalInput ref={ref03} onChange={handlePhoneCode03}></ModalInput>
            <ModalInput ref={ref04} onChange={handlePhoneCode04}></ModalInput>
            <ModalInput ref={ref05} onChange={handlePhoneCode05}></ModalInput>
            <ModalInput ref={ref06} onChange={handlePhoneCode06}></ModalInput>
          </ModalInputWrapper>
          <BtnWrapper>
            <BtnClose onClick={CloseModal}>Thoát</BtnClose>
            <BtnNext onClick={handleSendSigUpData}>Xác Nhận</BtnNext>
          </BtnWrapper>
        </ModalWrapper>
      </ModalContainer>
    </>
  );
};

export default Modal;
