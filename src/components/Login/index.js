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
import Loader from "../Loader";

const Login = () => {
  const messeage = {};
  const messeageToApi = {};
  const [cccd, setCccd] = useState("");
  const [password, setPassword] = useState("");
  const [validationMsg, setValidationMsg] = useState({});
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      console.log("check", loading);
      const postLogin = async () => {
        try {
          const response = await LoginApi.postAll({
            IdCard: cccd,
            password: password,
          });

          const responseData = response.data;

          if (responseData === false) {
            messeageToApi.cccd = "Mã căng cước không hợp lệ";
            messeageToApi.password = "Mật khẩu không hợp lệ";
            setValidationMsg(messeageToApi);
          } else {
            navigate("/HomeAccount");
          }
        } catch (error) {
          console.log("Failed to feecht data :", error);
        }
        setLoading(false);
      };
      postLogin();
    }
  };

  return (
    <>
      {loading ? <Loader></Loader> : null}
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
