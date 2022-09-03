import styled from "styled-components";
import { CgUserList } from "react-icons/cg";
import { RiInformationLine } from "react-icons/ri";
import { SiUblockorigin } from "react-icons/si";
import { BiChat, BiUserCircle, BiIdCard } from "react-icons/bi";
import { FiSmartphone } from "react-icons/fi";
import { FaTransgender } from "react-icons/fa";

export const WrapperAll = styled.div`
  background-color: #19bc9c;
  height: 100vh;
  width: 100%;
  overflow: auto;

  @media screen and (min-width: 911.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Account02Container = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 1200px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgb(0 0 0 / 10%);

  h2 {
    margin: 0 auto;
    margin-top: 20px;
  }

  @media screen and (max-width:991.98px) {
    border-radius: 0;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

// start header
export const Header = styled.div`
  height: 54px;
  display: flex;
  padding: 0 15px;
  background-color: #19bc9c;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  h4 {
    text-align: center;
    padding-left: 10px;
    color: #fff;
  }
`;
// end header

export const ListInformations = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  width: 95%;

  @media screen and (max-width: 991.98px) {
    flex-flow: column;
  }
`;

export const InformationItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 991.98px) {
    justify-content: flex-start;
    margin-bottom: 20px;
  }
`;

export const IconName = styled(BiUserCircle)`
  font-size: 2rem;
  margin-right: 5px;
`;

export const IconLimitedCard = styled(BiIdCard)`
  font-size: 2rem;
  margin-right: 5px;
`;

export const IconPhone = styled(FiSmartphone)`
  font-size: 1.7rem;
  margin-right: 5px;
`;

export const IconGender = styled(FaTransgender)`
  font-size: 2rem;
  margin-right: 5px;
`;

export const DataInformations = styled.div`
  font-size: 1.1rem;
  margin-right: 5px;
`;

export const Table = styled.div`
  table {
    width: 95%;
    margin: 0 auto;
    border-collapse: collapse;
  }

  tr:nth-of-type(odd) {
    background: #eee;
  }

  th {
    background: #333;
    color: white;
    font-weight: bold;
  }

  td,
  th {
    padding: 6px;
    border: 1px solid #ccc;
    text-align: left;
  }

  th:nth-of-type(2) {
    width: 380px;
  }

  th:nth-of-type(3) {
    width: 90px;
    text-align: center;
  }

  th:nth-of-type(4) {
    width: 90px;
    text-align: center;
  }
  th:nth-of-type(5) {
    width: 90px;
    text-align: center;
  }

  .centerRadio {
    text-align: center;
  }

  .centerRadio:checked {
    border: 5px solid #0dff92;
  }

  .inputData {
    min-width: 100%;
    font-size: 1rem;
    border: 0;
    outline: 0;
    white-space: normal;
    background: transparent;
  }

  // convert table responsive in mobile and tablet
  @media only screen and (max-width: 991.98px) {
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    .centerRadio {
      text-align: left;
    }

    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      border: 1px solid #ccc;
    }

    td {
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 35%;
    }

    td:before {
      position: absolute;
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }

    td:nth-of-type(1):before {
      content: "Tiền sử";
      font-weight: 500;
    }

    td:nth-of-type(2):before {
      content: "Triệu chứng";
      font-weight: 500;
    }

    td:nth-of-type(3):before {
      content: "có";
      font-weight: 500;
    }

    td:nth-of-type(4):before {
      content: "Không";
      font-weight: 500;
    }

    td:nth-of-type(5):before {
      content: "Không rõ";
      font-weight: 500;
    }
  }
`;

export const MenuHandle = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 991.98px) {
    flex-flow: column;
  }
`;

export const BtnDone = styled.button`
  outline: none;
  border: none;
  color: #000;
  border-radius: 5px;
  background-color: #19bc9c;
  padding: 12px 32px;
  font-size: 1rem;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #000;
    color: #fff;
  }

  i {
    margin-right: 5px;
  }

  @media screen and (max-width: 991.98px) {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 25px;
  }
`;

export const BtnDelete = styled.button`
  outline: none;
  border: none;
  color: #000;
  border-radius: 5px;
  background-color: #19bc9c;
  padding: 12px 53px;
  font-size: 1rem;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #d0243f;
    color: #fff;
  }

  i {
    margin-right: 5px;
  }

  @media screen and (max-width: 991.98px) {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 25px;
  }
`;
export const BtnClose = styled.button`
  outline: none;
  border: none;
  color: #000;
  border-radius: 5px;
  background-color: #19bc9c;
  padding: 12px 30px;
  font-size: 1rem;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #d0243f;
    color: #fff;
  }

  i {
    margin-right: 5px;
  }

  @media screen and (max-width: 991.98px) {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 25px;
  }
`;

export const WrapperIcon = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 991.98px) {
    width: 100%;
  }
`;

export const IconInformation = styled(RiInformationLine)`
  font-size: 2.3rem;
  margin: auto 0;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    opacity: 0.7;
  }
`;

export const IconListUser = styled(CgUserList)`
  margin: auto 0;
  font-size: 2.3rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    opacity: 0.7;
  }
`;

export const IconLock = styled(SiUblockorigin)`
  margin: auto 0;
  font-size: 2.3rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    opacity: 0.7;
  }
`;

export const IconChat = styled(BiChat)`
  margin: auto 0;
  font-size: 2.3rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    opacity: 0.7;
  }
`;
