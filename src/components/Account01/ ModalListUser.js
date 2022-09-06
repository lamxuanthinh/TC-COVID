import React from "react";
import styled from "styled-components";

const ModalListUser = () => {
  return (
    <ContainerModalListUser>
      <h1>Mọi Người</h1>
      <SearchBar>
        <input type="text" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </SearchBar>
      <WrapperList>
        <ItemList>
          <div>
            <img src={require("../../images/avata01.png")} />
            <p>Lâm Xuân Thịnh</p>
          </div>
          <i className="fa-solid fa-ellipsis"></i>
        </ItemList>
        <ItemList>
          <div>
            <img src={require("../../images/avata01.png")} />
            <p>Hoàng Thế Luân</p>
          </div>
          <i className="fa-solid fa-ellipsis"></i>
        </ItemList>
        <ItemList>
          <div>
            <img src={require("../../images/avata01.png")} />
            <p>Nguyễn Hoàng Việt</p>
          </div>
          <i className="fa-solid fa-ellipsis"></i>
        </ItemList>
        <ItemList>
          <div>
            <img src={require("../../images/avata01.png")} />
            <p>Ngô Hùng Sở</p>
          </div>
          <i className="fa-solid fa-ellipsis"></i>
        </ItemList>
        <ItemList>
          <div>
            <img src={require("../../images/avata01.png")} />
            <p>Nguyễn Hoàng Việt</p>
          </div>
          <i className="fa-solid fa-ellipsis"></i>
        </ItemList>
        <ItemList>
          <div>
            <img src={require("../../images/avata01.png")} />
            <p>Nguyễn Hoàng Việt</p>
          </div>
          <i className="fa-solid fa-ellipsis"></i>
        </ItemList>
      </WrapperList>
    </ContainerModalListUser>
  );
};

export default ModalListUser;

const ContainerModalListUser = styled.div`
  margin: 0 30px;

  h1 {
    margin-top: 30px;
    padding: 10px;
  }
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  text-align: center;

  input {
    padding: 7px 15px;
    border-radius: 3px;
    width: 84%;
    outline: none;
    font-size: 1.2rem;
    border: 1px solid #ced4da;
    &:focus {
      box-shadow: 0 3px 6px #19bc9c;
    }
  }

  i {
    padding-left: 10px;
    font-size: 1.7rem;
    transition: all 0.3s ease-in-out;
    &:hover {
      transition: all 0.3s ease-in-out;
      opacity: 0.6;
    }
  }
`;

const WrapperList = styled.div`
  margin: 20px 0px 30px 0px;
  width: 350px;
  height: 250px;
  overflow: auto;

  // display none scrollbar
  ::-webkit-scrollbar {
    -webkit-appearance: none;
  }
`;

const ItemList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    padding: 10px;

    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 50%;
      border: solid 2px #000;
    }

    p {
      padding-left: 10px;
    }
  }

  i {
    padding-right: 17px;
    font-size: 1.5rem;
    transition: all 0.3s ease-in-out;
    &:hover {
      transition: all 0.3s ease-in-out;
      opacity: 0.6;
    }
  }
`;
