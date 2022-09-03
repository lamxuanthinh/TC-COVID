import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import isEmpty from "validator/lib/isEmpty";
import {
  LoginContainer,
  LoginBtnWrapper,
  LoginWraperImg,
  LoginImg,
  LoginWrapper,
  LoginFormWrapper,
  LoginH1,
  LoginLable,
  LoginP,
  LoginInput,
  BtnLink,
  LoginInfo,
  RememerPassword,
  LoginCheckBox,
  RememerContent,
  NoRememberPassword,
  NoRememberContent,
  LogintoSignUp,
  LogintoSignUpP,
  LogintoSignUpLink,
} from "./LoginElements";

const Login = () => {
  const messeage = {};
  const [cccd, setCccd] = useState("");
  const [password, setPassword] = useState("");
  const [validationMsg, setValidationMsg] = useState({});

  const handleCCCD = (e) => {
    setCccd(e.target.value);
    if (isEmpty(e.target.value)) {
      const cccdMsg = "Mã căn cước không hợp lệ";
      setValidationMsg({ ...validationMsg, cccd: cccdMsg });
    } else {
      delete validationMsg.cccd;
      setValidationMsg(validationMsg);
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (isEmpty(e.target.value)) {
      const passwordMsg = "Mật khẩu không hợp lệ";
      setValidationMsg({ ...validationMsg, password: passwordMsg });
    } else {
      delete validationMsg.password;
      setValidationMsg(validationMsg);
    }
  };

  const validateAll = () => {
    if (isEmpty(cccd)) {
      messeage.cccd = "Mã căng cước không hợp lệ";
    }
    if (isEmpty(password)) {
      messeage.password = "Mật khẩu không hợp lệ";
    }

    setValidationMsg(messeage);
    if (Object.keys(messeage).length > 0) return false;
    return true;
  };
  const OnClickSubmitLogin = () => {
    const isValid = validateAll();
    if (!isValid) return;
    //call api
    // axios
    //   .get(
    //     "https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z"
    //   )
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    else {
      
      axios
        .post("https://tc-covid-json-server.herokuapp.com/doctors/login", {
          IdCard: cccd,
          password: password,
        })
        .then(function (response) {
          console.log(response);
          if (response.data == false) {
            messeage.cccd = "Mã căng cước không hợp lệ";
            messeage.password = "Mật khẩu không hợp lệ";
            setValidationMsg(messeage);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <>
      <LoginContainer>
        <LoginWrapper>
          <LoginWraperImg>
            <LoginImg src={require("../../images/login01.png")} />
          </LoginWraperImg>

          <LoginFormWrapper>
            <LoginH1>Đăng Nhập</LoginH1>
            <LoginLable>
              <LoginP>Mã căn cước công dân</LoginP>
              <LoginInput type="text" onBlur={handleCCCD} />
              <span>&nbsp;{validationMsg.cccd}</span>
            </LoginLable>
            <LoginLable>
              <LoginP>Mật Khẩu</LoginP>
              <LoginInput type="password" onBlur={handlePassword} />
              <span>&nbsp;{validationMsg.password}</span>
            </LoginLable>
            <LoginBtnWrapper>
              <BtnLink onClick={OnClickSubmitLogin}>Đăng Nhập</BtnLink>
            </LoginBtnWrapper>
            <LoginInfo>
              <RememerPassword>
                <LoginCheckBox type="checkbox" />
                <RememerContent>Lưu mật khẩu</RememerContent>
              </RememerPassword>
              <NoRememberPassword>
                <NoRememberContent>Quên mật khẩu</NoRememberContent>
              </NoRememberPassword>
            </LoginInfo>
            <LogintoSignUp>
              <LogintoSignUpP>Bạn chưa có tài khoản?</LogintoSignUpP>
              <LogintoSignUpLink to="/signup">Tạo tài khoản</LogintoSignUpLink>
            </LogintoSignUp>
          </LoginFormWrapper>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default Login;
