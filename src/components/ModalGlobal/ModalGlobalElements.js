import styled from "styled-components";

export const OverLay = styled.div`
  display: ${({ openModal }) => (openModal ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  backdrop-filter: blur(3px);
  animation: fadeIn 0.7s;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.4);

  z-index: 1;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalGlobalContainer = styled.div`
  position: relative;
  max-width: 500px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #fff;
  border-radius: 5px;

  h1 {
    text-align: center;
  }

  @media (max-width: 575.98px) {
    margin: 0 10px;
  }

  @keyframes ChangeWidth {
    from {
      width: 25%;
      height: 150px;
    }
    to {
      height: 200px;
      width: 30%;
    }
  }
`;

export const ModalClose = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;

  i {
    padding: 10px 15px;
    font-size: 2rem;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ModalContents = styled.div``;
