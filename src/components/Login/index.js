import React from "react";
import { useNavigate } from "react-router-dom";
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
import LoginApi from "../../api/loginApi";

const Login = () => {
  const messeage = {};
  const [cccd, setCccd] = useState("");
  const [password, setPassword] = useState("");
  const [validationMsg, setValidationMsg] = useState({});
  let navigate = useNavigate();

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
    if (isValid) {
      const fetchLogin = async () => {
        try {
          const response = await LoginApi.postAll({
            IdCard: cccd,
            password: password,
          });

          console.log(response);
          console.log(response.data);
          let responseData = response.data;
          console.log("check variables:", responseData);
          if (responseData === false) {
            console.log(123);
            messeage.cccd = "Mã căng cước không hợp lệ";
            messeage.password = "Mật khẩu không hợp lệ";
            console.log(messeage);
            setValidationMsg(messeage);
          } else {
            navigate("/HomeAccount");
          }
        } catch (error) {
          console.log("Failed to feecht data :", error);
        }
      };
      fetchLogin();
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
