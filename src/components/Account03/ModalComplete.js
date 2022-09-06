import React from "react";
import styled from "styled-components";
import isEmpty from "validator/lib/isEmpty";

const ModalComplete = ({ typeVaccination, addressVaccination }) => {
  let checkData = true;
  let messageWarning;

  const handleDocumentPrint = () => {
    window.print();
  };

  if (isEmpty(typeVaccination) || isEmpty(addressVaccination)) {
    checkData = false;
    if (isEmpty(typeVaccination) && isEmpty(addressVaccination)) {
      messageWarning = "Vui lòng điền thông tin nơi tiêm và loại vắc xin";
    } else if (isEmpty(typeVaccination)) {
      messageWarning = "Vui lòng điền thông tin loại vắc xin";
    } else if (isEmpty(addressVaccination)) {
      messageWarning = "Vui lòng điền thông tin nơi tiêm";
    }
  }

  return (
    <>
      <ContainerModalComplete checkData={checkData}>
        {checkData ? (
          <>
            <img src={require("../../images/complete.png")} alt="" />
            <div>
              <p>
                <i className="fa-regular fa-location-dot"></i>
                Nơi Tiêm: {addressVaccination}
              </p>
              <p>
                <i className="fa-regular fa-syringe"></i>
                Loại Vắc Xin: {typeVaccination}
              </p>
            </div>
            <BtnWraper>
              <BtnComplete checkData={checkData} onClick={handleDocumentPrint}>
                <i className="fa-light fa-clipboard-list-check"></i>
                In Phiếu
              </BtnComplete>
              <BtnComplete checkData={checkData}>
                <i className="fa-light fa-clipboard-list-check"></i>
                Xác Thực
              </BtnComplete>
            </BtnWraper>
          </>
        ) : (
          <>
            <img src={require("../../images/completeWarning.png")} alt="" />
            <div>
              <i className="fa-regular fa-triangle-exclamation"></i>
              {messageWarning}
            </div>
          </>
        )}
      </ContainerModalComplete>
    </>
  );
};

export default ModalComplete;

const ContainerModalComplete = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;

  img {
    width: 60%;
    height: 60%;
    object-fit: cover;
    margin: 30px auto 0 auto;
  }

  div {
    font-size: 1.1rem;
    text-align: center;
    color: ${({ checkData }) => (checkData ? "#19bc9c" : "#d0243f")};
    padding: 15px;
    margin-bottom: 10px;
    i {
      margin-right: 5px;
    }
    p {
      padding: 10px 20px;
      color: #000;
      text-align: left;
      i {
        margin-right: 10px;
      }
    }
  }

  ul {
    margin: 0 auto;
    li {
      padding: 3px;
      list-style-type: none;
    }
    li:before {
      content: counter(item, disc) " ";
      color: pink;
    }
  }
`;

const BtnWraper = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 575.98px) {
    flex-flow: column;
  }
`;

const BtnComplete = styled.button`
  width: 35%;
  margin: 10px 10px 25px 10px;
  cursor: pointer;
  outline: none;
  white-space: normal;
  border: none;
  border-radius: 5px;
  padding: 12px;
  background-color: ${({ checkData }) => (checkData ? "#19bc9c" : "#d0243f")};
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
  i {
    margin: auto 6px auto 0;
    font-size: 1.2rem;
    align-items: center;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    opacity: 0.8;
  }
  @media screen and (max-width: 575.98px) {
    width: 90%;
    margin: 10px auto 25px;
  }
`;
