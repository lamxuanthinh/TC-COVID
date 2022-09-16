import styled from "styled-components";

export const ContainerVaccinationRegister = styled.div`
  background-color: #19bc9c;
  display: flex;
  justify-content: center;
  align-items: center;

  .containerRegister {
    position: relative;
    max-width: 1200px;
    width: 100%;
    border-radius: 6px;
    padding: 35px;
    margin: 0 15px;
    background-color: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
  .containerRegister header {
    position: relative;
    font-size: 20px;
    font-weight: 600;
    color: #333;
  }
  .containerRegister header::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 3px;
    width: 27px;
    border-radius: 8px;
    background-color: #19bc9c;
  }
  .containerRegister form {
    position: relative;
    margin-top: 16px;
    min-height: 490px;
    background-color: #fff;
    overflow: hidden;
  }

  .containerRegister form .title {
    display: block;
    margin-bottom: 8px;
    font-size: 20px;
    font-weight: 500;
    margin: 6px 0;
    color: #333;
  }
  .containerRegister form .fields {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  form .fields .input-field {
    display: flex;
    width: calc(100% / 2 - 15px);
    flex-flow: column;
    height: 108px;
  }
  .input-field label {
    font-size: 16px;
    font-weight: 500;
    color: #2e2e2e;
    margin: 0 0;
  }

  .input-field input,
  select {
    outline: none;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    border-radius: 5px;
    border: 1px solid #aaa;
    padding: 0px 9px;
    width: 100%;
    height: 42px;
    margin: 8px 0 !important;
  }

  .input-field input :focus,
  .input-field select:focus {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.13);
  }
  .input-field select,
  .input-field input[type="date"] {
    color: #707070;
  }
  .input-field input[type="date"]:valid {
    color: #333;
  }
  .containerRegister form button,
  .nextBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 200px;
    border: none;
    outline: none;
    color: #000;
    border-radius: 5px;
    margin: 15px 0;
    background-color: #19bc9c;
    transition: all 0.3s linear;
    cursor: pointer;
  }
  .containerRegister form .btnText {
    font-size: 14px;
    font-weight: 400;
  }
  form button:hover {
    background-color: #000;
    color: #fff;
  }

  .nextBtn:hover {
    background-color: #000;
    color: #fff;
  }

  form .buttons {
    display: flex;
    align-items: center;
  }
  form .buttons button,
  .nextBtn {
    margin-right: 14px;
  }

  /* tablet */
  @media (max-width: 1023px) and (min-width: 740px) {
    .containerRegister form {
      overflow-y: scroll;
    }
    .containerRegister form::-webkit-scrollbar {
      display: none;
    }
    form .fields .input-field {
      width: calc(100% / 2 - 15px);
    }
    .containerRegister form button,
    .nextBtn {
      width: 100%;
      margin-top: 15px;
      margin-bottom: 0px;
    }
    .inputCode {
      width: 50%;
    }
  }

  /* mobile */
  @media (max-width: 740px) {
    form .fields .input-field {
      width: 100%;
    }
    .inputCode {
      margin: 0 12px;
    }
    .containerRegister form button,
    .nextBtn {
      width: 100%;
      margin-top: 15px;
      margin-bottom: 0px;
    }
    .containerRegister {
      margin: 10px 0;
    }
  }
  @media screen and (min-width: 740px) {
    height: 100vh;
  }
`;
