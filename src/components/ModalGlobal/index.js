import React from "react";

import {
  OverLay,
  ModalGlobalContainer,
  ModalClose,
  ModalContents,
} from "./ModalGlobalElements";

const ModalGlobal = ({ children, showModal, CloseModal }) => {
  return (
    <OverLay openModal={showModal} onClick={CloseModal}>
      <ModalGlobalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ModalClose onClick={CloseModal}>
          <i className="fa-duotone fa-xmark"></i>
        </ModalClose>
        <ModalContents>{children}</ModalContents>
      </ModalGlobalContainer>
    </OverLay>
  );
};

export default ModalGlobal;
