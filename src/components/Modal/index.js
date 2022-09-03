import React from "react";
import { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
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

const Modal = ({ setShowModal, showModal }) => {
  const handleClose = () => {
    setShowModal(!showModal);
  };

  const modalRef = useRef();
  // const animation = useSpring({
  //   config: {
  //     duration: 500,
  //   },
  //   opacity: showModal ? 1 : 0,
  //   transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  // });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  
  return (
    <>
      { showModal ? (
        <ModalContainer ref={modalRef} onClick={closeModal} >
          {/* <animated.div style={animation}> */}
          <ModalWrapper>
            <Close onClick={handleClose}></Close>
            <ModalTitle>Xác thực số điện thoại</ModalTitle>
            {/* <ModalContent>
              Bạn đăng kí thành công sau khi xác thực số điện thoại
            </ModalContent> */}
            <ModalContent>
              Mã xác thực được gửi đến số điện thoại 0352786331
            </ModalContent>
            <ModalContent>
              Mã xác thực hết hiệu lực sau thời gian 100s
            </ModalContent>
            <ModalInputWrapper>
              <ModalInput></ModalInput>
              <ModalInput></ModalInput>
              <ModalInput></ModalInput>
              <ModalInput></ModalInput>
              <ModalInput></ModalInput>
              <ModalInput></ModalInput>
            </ModalInputWrapper>
            <BtnWrapper>
              <BtnClose onClick={handleClose}>Thoát</BtnClose>
              <BtnNext>Xác Nhận</BtnNext>
            </BtnWrapper>
          </ModalWrapper>
          {/* </animated.div> */}
        </ModalContainer>
      ) : null}
    </>
  );
};

export default Modal;
