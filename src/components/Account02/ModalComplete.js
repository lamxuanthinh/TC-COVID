import React from "react";
import styled from "styled-components";
import controllerRoom from "../../api/controllerRoom";

const ModalComplete = ({ dataRadio, CloseModal, Count, dataUser }) => {
  let checkData = true;
  if (dataRadio >= 5) {
    checkData = false;
  }
  const RoomID02 = sessionStorage.getItem("RoomID02");
  const handleCompleteDataAccount02 = () => {
    console.log(1213);
    CloseModal();
    Count();
    console.log(dataUser.IdCard);
    const postDataAccount02 = async () => {
      try {
        const response = await controllerRoom.postAccount02({
          RoomId: RoomID02,
          IdCard: dataUser.IdCard,
        });
        console.log("check data", response);
      } catch (error) {
        console.log("Failed to fetch data :", error);
      }
    };
    postDataAccount02();
  };

  return (
    <>
      <ContainerModalComplete checkData={checkData}>
        {checkData ? (
          <>
            <img src={require("../../images/complete.png")} />
            <div>
              <i className="fa-light fa-memo-circle-check"></i>
              Tình trạng bệnh tật ổn định
            </div>
          </>
        ) : (
          <>
            <img src={require("../../images/completeWarning.png")} />
            <div>
              <i className="fa-regular fa-triangle-exclamation"></i>
              Tình trạng bệnh tật không ổn định
            </div>
          </>
        )}

        {/* <ul>
          <li>cam cung cam cung cam</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul> */}

        <BtnComplete
          checkData={checkData}
          onClick={handleCompleteDataAccount02}
        >
          <i className="fa-light fa-clipboard-list-check"></i>
          Xác Thực
        </BtnComplete>
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
    font-size: 1.2rem;
    text-align: center;
    color: ${({ checkData }) => (checkData ? "#19bc9c" : "#d0243f")};
    padding: 15px;

    i {
      margin-right: 5px;
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

const BtnComplete = styled.button`
  width: 60%;
  margin: 10px auto 25px;
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
`;
