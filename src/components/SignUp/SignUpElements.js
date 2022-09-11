import styled from "styled-components";

export const SignUpContainer = styled.div`
  /* display: ${(props) => (props.loading || props.showModal ? "none" : "flex")}; */
  display: ${(props) => (props.showModal ? "none" : "flex")};
  /* display: flex; */
  justify-content: center;
  height: 100vh;
  background-color: #19bc9c;
`;

export const WrapperHidden = styled.div`
  margin: auto auto;
  padding: 50px 25px 10px 25px;
  width: 450px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  @media screen and (max-width: 739px) {
    width: 100%;
  }
`;

export const SignUpWrapper = styled.div`
  overflow: hidden;
`;

export const SignUpTitle = styled.h1`
  text-align: center;
`;

export const ProcessWrapper = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: space-evenly;
`;
export const ProcessItem1 = styled.div`
  color: ${(props) => (props.colorStep ? "#19bc9c" : "#000")};
  transition: all 0.3s ease;
`;
export const ProcessItem2 = styled.div`
  transition: all 0.3s ease;
  color: ${(props) => (props.colorStep ? "#19bc9c" : "#000")};
`;
export const ProcessItem3 = styled.div`
  transition: all 0.3s ease;
  color: ${(props) => (props.colorStep ? "#19bc9c" : "#000")};
`;
export const ProcessItem4 = styled.div`
  transition: all 0.3s ease;
  color: ${(props) => (props.colorStep ? "#19bc9c" : "#000")};
`;
export const ProcessItem5 = styled.div`
  transition: all 0.3s ease;
  color: ${(props) => (props.colorStep ? "#19bc9c" : "#000")};
`;
export const ProcessTitle = styled.div`
  padding: 15px 0;
  font-weight: 500;
`;
export const ProcessStep = styled.div`
  display: flex;
`;

export const ProcessNumber = styled.div`
  font-size: 25px;
`;

export const ProcessLine = styled.div`
  border: 2px solid;
  font-weight: 500;
  width: 30px;
  margin: auto;
  margin-left: 10px;
  @media screen and (max-width: 320px) {
    margin-left: 5px;
    width: 10px;
  }
  @media screen and (max-width: 739px) {
    margin: auto 7px;
  }
`;

export const SignUpPageWrapper = styled.div`
  display: flex;
  width: 500%;
  margin-left: ${(props) => `${props.check}%`};
  transition: all 0.3s ease-in-out;
`;

export const SignUpPage = styled.div`
  padding: 10px 0px;
  width: 20%;
`;

export const SignUpH3 = styled.h3`
  margin-bottom: 20px;
`;

export const SignUpFieldWrapper = styled.div``;

export const SignUpLable = styled.div`
  .selectInput {
    width: 100%;
    height: 50px;
    outline: none;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 5px;
    border: 1px solid lightgrey;
    border-radius: 3px;
    &:focus {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.13);
    }
  }

  .fileInput {
    display: inline-block;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 50px;
    outline: none;
    text-align: center;
    margin: 0 auto;
    border: 1px solid lightgrey;
    border-radius: 3px;
    &:focus {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.13);
    }

    .file {
      position: absolute;
      top: -999px;
    }

    p {
      padding-left: 20px;
    }
  }

  span {
    font-size: 14px;
    color: red;
  }
`;

export const SignUpP = styled.p`
  padding: 5px 0;
  font-size: 16px;
  font-weight: 500;
`;

export const SignUpInput = styled.input`
  width: 100%;
  height: 50px;
  outline: none;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 5px;
  border: 1px solid lightgrey;
  border-radius: 3px;
  &:focus {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.13);
  }
`;

export const SignUpBtnWrapper = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
`;

export const BtnLink = styled.button`
  width: ${(props) => (props.widthBtn ? "100%" : "48%")};
  height: 50px;
  color: #fff;
  border: none;
  outline: none;
  font-size: 18px;
  cursor: pointer;
  border-radius: 3px;
  background-color: #19bc9c;
  text-transform: uppercase;
  font-weight: 500;
  transition: 0.5s ease;
  margin-bottom: 15px;
  &:hover {
    transition: 0.5s ease;
    background-color: #000;
  }
`;
