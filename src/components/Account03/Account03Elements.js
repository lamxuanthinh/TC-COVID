import styled from "styled-components";
import { CgUserList } from "react-icons/cg";
import { RiInformationLine } from "react-icons/ri";
import { SiUblockorigin } from "react-icons/si";
import { BiChat, BiUserCircle, BiIdCard } from "react-icons/bi";
import { FiSmartphone } from "react-icons/fi";
import { FaTransgender } from "react-icons/fa";

export const ContainerAccount03 = styled.div`
  @media print {
    display: none;
  }
`;

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
    margin-top: 25px;
  }

  @media screen and (max-width: 991.98px) {
    border-radius: 0;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const ListInformations = styled.div`
  width: 95%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;

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

// start content data in table
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
    text-align: center;
  }

  .centerText {
    td {
      text-align: center;
    }
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

    .centerText {
      td {
        text-align: left;
      }
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
      content: "Mũi Tiêm";
      text-align: left;
      font-weight: 500;
    }

    td:nth-of-type(2):before {
      content: "Ngày Tiêm";
      text-align: left;
      font-weight: 500;
    }

    td:nth-of-type(3):before {
      content: "Loại Vắc Xin";
      text-align: left;
      font-weight: 500;
    }

    td:nth-of-type(4):before {
      content: "Loại Vắc Xin";
      text-align: left;
      font-weight: 500;
    }
  }
`;
// end content data in table

// start input day and type vaccine
// i will fix bug responsive in devices ipa pro
export const InputDayAndTypeVaccine = styled.div`
  width: 95%;
  margin: 30px auto 0px auto;
  display: flex;
  justify-content: space-between;

  .inputAdddress {
    width: 60%;
  }
  .inputTypeVaccine {
    width: 40%;
  }

  label {
    margin-right: 10px;
    font-size: 1.2rem;
  }
  input {
    width: 82%;
    outline: none;
    padding: 7px;
    font-size: 1rem;
    border: 1px solid lightgrey;
    border-radius: 3px;
    &:focus {
      box-shadow: 0.5px 0.5px 10px 2px #19bc9c;
    }
  }

  select {
    outline: none;
    width: 70%;
    padding: 7px;
    font-size: 1rem;
    border: 1px solid lightgrey;
    border-radius: 3px;
    &:focus {
      box-shadow: 0.5px 0.5px 10px 2px #19bc9c;
    }
  }

  @media only screen and (max-width: 991.98px) {
    display: block;

    .inputAdddress {
      width: 100%;
      margin: 10px 0;
    }

    .inputTypeVaccine {
      width: 100%;
      margin: 30px 0;
    }

    label {
      padding-top: 20px;
    }

    input {
      width: 100%;
    }

    select {
      width: 100%;
    }
  }
`;
// end input day and type vaccine

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

export const ContainerDocumentPrint = styled.div`
  display: none;
  .phieu {
    margin: 0 auto;
    width: 595px;
    height: 420px;
    background-color: white;
  }

  /// document print
  .khung {
    position: relative;
    top: 10px;
    width: 554px;
    margin-left: 20px;
  }
  .QRconghoaxahoi {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .QR {
    position: relative;
    top: 5px;
    left: 10px;
    width: 80px;
    height: 80px;
    background-color: blue;
    color: white;
    text-align: center;
    line-height: 80px;
  }
  .conghoaxahoi {
    margin-left: 60px;
    font-size: 15px;
    text-align: center;
  }
  .giayxac {
    font-size: 16px;
  }
  .gachchan {
    width: 40%;
    background-color: black;
    align-items: center;
  }
  .thongtin {
    width: 100%;
  }
  .bangdongdau {
    border: 1px solid black;
    width: 100%;
  }
  .lieucoban {
    text-align: center;
  }
  .kyten {
    text-align: center;
  }

  .chucnang {
    position: fixed;
    top: 9px;
    right: 18%;
    width: 50px;
    height: 50px;
    background: #ffffff;
    border-radius: 10px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    color: black;
  }

  .chucnang ion-icon {
    position: absolute;
    color: #19bc9c;
    font-size: 45px;
    align-items: center;
    margin-left: 2.5px;
    margin-top: 3.5px;
  }
  .hoanthanh {
    position: fixed;
    top: 70px;
    right: 18%;
    width: 50px;
    height: 50px;
    background: #ffffff;
    border-radius: 10px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    color: black;
  }
  .hoanthanh ion-icon {
    position: absolute;
    color: #19bc9c;
    font-size: 45px;
    align-items: center;
    margin-left: 2.5px;
    margin-top: 3.5px;
  }
  @media print {
    display: block;
  }
`;
