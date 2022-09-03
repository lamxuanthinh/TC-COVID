import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Loader from "../Loader";
import isEmpty from "validator/lib/isEmpty";
import Modal from "../Modal";
import {
  SignUpContainer,
  ProcessWrapper,
  SignUpTitle,
  SignUpPage,
  SignUpH3,
  SignUpWrapper,
  SignUpLable,
  SignUpInput,
  SignUpP,
  SignUpBtnWrapper,
  BtnLink,
  SignUpFieldWrapper,
  ProcessStep,
  ProcessItem1,
  ProcessItem2,
  ProcessItem3,
  ProcessItem4,
  ProcessItem5,
  ProcessTitle,
  ProcessNumber,
  ProcessLine,
  SignUpPageWrapper,
  WrapperHidden,
} from "./SignUpElements";

const SignUp = () => {
  const colorStep = true;
  const messeage = {};
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [check, setCheck] = useState(0);
  // slider 1
  const [cccd, setCccd] = useState("");
  const [fullName, setFullName] = useState("");
  // slider 2
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  // slider 3
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  // slider 4
  const [certified, setCertified] = useState("");
  const [role, setRole] = useState("");
  // slider 5
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfrimPassword] = useState("");

  const [validationMsg, setValidationMsg] = useState({});

  // Modal
  const [showModal, setShowModal] = useState(false);

  //  start Slider 01
  const handleCccd = (e) => {
    setCccd(e.target.value);
    if (isEmpty(e.target.value)) {
      const cccdMsg = "Mã căng cước không hợp lệ";
      setValidationMsg({ ...validationMsg, cccd: cccdMsg });
    } else {
      delete validationMsg.cccd;
      setValidationMsg(validationMsg);
    }
  };
  const handleFullName = (e) => {
    setFullName(e.target.value);
    if (isEmpty(e.target.value)) {
      const fullNameMsg = "Họ và tên không được bỏ trống";
      setValidationMsg({ ...validationMsg, fullName: fullNameMsg });
    } else {
      delete validationMsg.fullName;
      setValidationMsg(validationMsg);
    }
  };
  const validateAll01 = () => {
    if (isEmpty(cccd)) {
      messeage.cccd = "Mã căng cước không hợp lệ";
    }
    if (isEmpty(fullName)) {
      messeage.fullName = "Họ và tên không được bỏ trống";
    }

    setValidationMsg(messeage);
    if (Object.keys(messeage).length > 0) return false;
    return true;
  };
  // end Slider 10

  //  start Slider 02
  const handelPhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    if (isEmpty(e.target.value)) {
      const phoneNumberMsg = "Số điện thoại không hợp lệ";
      setValidationMsg({ ...validationMsg, phoneNumber: phoneNumberMsg });
    } else {
      delete validationMsg.phoneNumber;
      setValidationMsg(validationMsg);
    }
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
    if (isEmpty(e.target.value)) {
      const adddressMsg = "Địa chỉ không được bỏ trống";
      setValidationMsg({ ...validationMsg, address: adddressMsg });
    } else {
      delete validationMsg.address;
      setValidationMsg(validationMsg);
    }
  };
  const validateAll02 = () => {
    if (isEmpty(phoneNumber)) {
      messeage.phoneNumber = "Số điện thoại không hợp lệ";
    }
    if (isEmpty(address)) {
      messeage.address = "Địa chỉ không được bỏ trống";
    }

    setValidationMsg(messeage);
    if (Object.keys(messeage).length > 0) return false;
    return true;
  };
  // end Slider 02

  //  start Slider 03
  const handleAge = (e) => {
    setAge(e.target.value);
    if (isEmpty(e.target.value)) {
      const ageMsg = "Ngày sinh không được bỏ trống";
      setValidationMsg({ ...validationMsg, age: ageMsg });
    } else {
      delete validationMsg.age;
      setValidationMsg(validationMsg);
    }
  };
  const handleGender = (e) => {
    setGender(e.target.value);
    if (isEmpty(e.target.value)) {
      const genderMsg = "Địa chỉ không được bỏ trống";
      setValidationMsg({ ...validationMsg, gender: genderMsg });
    } else {
      delete validationMsg.gender;
      setValidationMsg(validationMsg);
    }
  };
  const validateAll03 = () => {
    if (isEmpty(age)) {
      messeage.age = "Số điện thoại không hợp lệ";
    }
    if (isEmpty(gender)) {
      messeage.gender = "Địa chỉ không được bỏ trống";
    }

    setValidationMsg(messeage);
    if (Object.keys(messeage).length > 0) return false;
    return true;
  };
  // end Slider 03

  //  start Slider 04
  const handleCertified = (e) => {
    setCertified(e.target.value);
    if (isEmpty(e.target.value)) {
      const certifiedMsg = "Vui lòng nhập ảnh hợp lệ";
      setValidationMsg({ ...validationMsg, certified: certifiedMsg });
    } else {
      delete validationMsg.certified;
      setValidationMsg(validationMsg);
    }
  };
  const handleRole = (e) => {
    setRole(e.target.value);
    if (isEmpty(e.target.value)) {
      const roleMsg = "Vai trò không được bỏ trống";
      setValidationMsg({ ...validationMsg, role: roleMsg });
    } else {
      delete validationMsg.role;
      setValidationMsg(validationMsg);
    }
  };
  const validateAll04 = () => {
    if (isEmpty(certified)) {
      messeage.certified = "Vui lòng nhập ảnh hợp lệ";
    }
    if (isEmpty(role)) {
      messeage.role = "Vai trò không được bỏ trống";
    }

    setValidationMsg(messeage);
    if (Object.keys(messeage).length > 0) return false;
    return true;
  };
  // end Slider 04

  //  start Slider 05
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (isEmpty(e.target.value)) {
      const passwordMsg = "Mật khẩu phải đủ tám kí tự";
      setValidationMsg({ ...validationMsg, password: passwordMsg });
    } else {
      delete validationMsg.password;
      setValidationMsg(validationMsg);
    }
  };
  const handleConfirmPassword = (e) => {
    setConfrimPassword(e.target.value);
    if (isEmpty(e.target.value) || e.target.value !== password) {
      const confrimPasswordMsg = "Mật khẩu xác thực không hợp lệ";
      setValidationMsg({
        ...validationMsg,
        confrimPassword: confrimPasswordMsg,
      });
    } else {
      delete validationMsg.confrimPassword;
      setValidationMsg(validationMsg);
    }
  };
  const validateAll05 = () => {
    if (isEmpty(password)) {
      messeage.password = "Mật khẩu phải đủ tám kí tự";
    }
    if (isEmpty(confrimPassword) || confrimPassword !== password) {
      messeage.confrimPassword = "Mật khẩu xác thực không hợp lệ";
    }
    setValidationMsg(messeage);
    if (Object.keys(messeage).length > 0) return false;
    return true;
  };
  // end Slider 05

  // next sider and check completed
  const nextSlider = () => {
    switch (step) {
      case 0: {
        let isValid01 = validateAll01();
        if (isValid01 && step === 0) {
          setStep(step + 1);
          setCheck(check - 100);
        }
        break;
      }
      case 1: {
        let isValid02 = validateAll02();
        if (isValid02) {
          setStep(step + 1);
          setCheck(check - 100);
        }
        break;
      }
      case 2: {
        let isValid03 = validateAll03();
        if (isValid03) {
          setStep(step + 1);
          setCheck(check - 100);
        }
        break;
      }
      case 3: {
        let isValid04 = validateAll04();
        if (isValid04) {
          setStep(step + 1);
          setCheck(check - 100);
          console.log(step);
        }
        break;
      }
    }
  };
  const backSlider = () => {
    setStep(step - 1);
    setCheck(check + 100);
  };

  // useEffect(()=> {
     
  // },[])

  // form completed and call api
  const formComplete = () => {
    let isValid05 = validateAll05();
    if (isValid05) {
      setStep(5);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setShowModal(!showModal);
      }, 2000);
    }
  };

  return (
    <>
      {loading ? <Loader /> : null}
      <Modal setShowModal={setShowModal} showModal={showModal} />
      <SignUpContainer loading={loading} showModal={showModal} >
        <WrapperHidden>
          <SignUpWrapper>
            <SignUpTitle>Đăng Kí</SignUpTitle>
            <ProcessWrapper>
              <ProcessItem1
                colorStep={
                  step == 1 || step == 2 || step == 3 || step == 4 || step == 5
                    ? colorStep === true
                    : colorStep === false
                }
              >
                <ProcessTitle>TTBC</ProcessTitle>
                <ProcessStep>
                  <ProcessNumber>
                    {step == 1 ||
                    step == 2 ||
                    step == 3 ||
                    step == 4 ||
                    step == 5 ? (
                      <i className="fa-regular fa-circle-check"></i>
                    ) : (
                      <i className="fa-regular fa-circle-1"></i>
                    )}
                  </ProcessNumber>

                  <ProcessLine></ProcessLine>
                </ProcessStep>
              </ProcessItem1>
              <ProcessItem2
                colorStep={
                  step == 2 || step == 3 || step == 4 || step == 5
                    ? colorStep === true
                    : colorStep === false
                }
              >
                <ProcessTitle>TTLL</ProcessTitle>
                <ProcessStep>
                  <ProcessNumber>
                    {step == 2 || step == 3 || step == 4 || step == 5 ? (
                      <i className="fa-regular fa-circle-check"></i>
                    ) : (
                      <i className="fa-regular fa-circle-2"></i>
                    )}
                  </ProcessNumber>
                  <ProcessLine></ProcessLine>
                </ProcessStep>
              </ProcessItem2>
              <ProcessItem3
                colorStep={
                  step == 3 || step == 4 || step == 5
                    ? colorStep === true
                    : colorStep === false
                }
              >
                <ProcessTitle>TTCN</ProcessTitle>
                <ProcessStep>
                  <ProcessNumber>
                    {step == 3 || step == 4 || step == 5 ? (
                      <i className="fa-regular fa-circle-check"></i>
                    ) : (
                      <i className="fa-regular fa-circle-3"></i>
                    )}
                  </ProcessNumber>
                  <ProcessLine></ProcessLine>
                </ProcessStep>
              </ProcessItem3>
              <ProcessItem4
                colorStep={
                  step == 4 || step == 5
                    ? colorStep === true
                    : colorStep === false
                }
              >
                <ProcessTitle>XNDT</ProcessTitle>
                <ProcessStep>
                  <ProcessNumber>
                    {step == 4 || step == 5 ? (
                      <i className="fa-regular fa-circle-check"></i>
                    ) : (
                      <i className="fa-regular fa-circle-4"></i>
                    )}
                  </ProcessNumber>
                  <ProcessLine></ProcessLine>
                </ProcessStep>
              </ProcessItem4>
              <ProcessItem5
                colorStep={step == 5 ? colorStep === true : colorStep === false}
              >
                <ProcessTitle>TTĐN</ProcessTitle>
                <ProcessStep>
                  <ProcessNumber>
                    {step == 5 ? (
                      <i className="fa-regular fa-circle-check"></i>
                    ) : (
                      <i className="fa-regular fa-circle-5"></i>
                    )}
                  </ProcessNumber>
                </ProcessStep>
              </ProcessItem5>
            </ProcessWrapper>

            <SignUpPageWrapper check={check}>
              {/* item 1 */}
              <SignUpPage>
                <SignUpH3>Thông Tin Cơ Bản</SignUpH3>
                <SignUpFieldWrapper>
                  <SignUpLable>
                    <SignUpP>Mã cccd</SignUpP>
                    <SignUpInput onBlur={handleCccd} type="text" />
                    <span>&nbsp;{validationMsg.cccd}</span>
                  </SignUpLable>
                  <SignUpLable>
                    <SignUpP>Họ Và Tên</SignUpP>
                    <SignUpInput onBlur={handleFullName} type="text" />
                    <span>&nbsp;{validationMsg.fullName}</span>
                  </SignUpLable>
                  <SignUpBtnWrapper>
                    <BtnLink widthBtn={true} onClick={nextSlider}>
                      Tiếp Theo
                    </BtnLink>
                  </SignUpBtnWrapper>
                </SignUpFieldWrapper>
              </SignUpPage>
              {/* item 1 */}
              {/* item 2 */}
              <SignUpPage>
                <SignUpH3>Thông Tin Liên Lạc</SignUpH3>
                <SignUpFieldWrapper>
                  <SignUpLable>
                    <SignUpP>Số Điện Thoại</SignUpP>
                    <SignUpInput onBlur={handelPhoneNumber} type="tel" />
                    <span>&nbsp;{validationMsg.phoneNumber}</span>
                  </SignUpLable>
                  <SignUpLable>
                    <SignUpP>Địa chỉ</SignUpP>
                    <SignUpInput onBlur={handleAddress} type="text" />
                    <span>&nbsp;{validationMsg.address}</span>
                  </SignUpLable>
                  <SignUpBtnWrapper>
                    <BtnLink onClick={backSlider}>Trở Lại</BtnLink>
                    <BtnLink onClick={nextSlider}>Tiếp Theo</BtnLink>
                  </SignUpBtnWrapper>
                </SignUpFieldWrapper>
              </SignUpPage>
              {/* item 2 */}
              {/* item 3 */}
              <SignUpPage>
                <SignUpH3>Thông Tin Cá Nhân</SignUpH3>
                <SignUpFieldWrapper>
                  <SignUpLable>
                    <SignUpP>Ngày Sinh</SignUpP>
                    <SignUpInput onBlur={handleAge} type="text" />
                    <span>&nbsp;{validationMsg.age}</span>
                  </SignUpLable>
                  <SignUpLable>
                    <SignUpP>Giới Tính</SignUpP>
                    <SignUpInput onBlur={handleGender} type="text" />
                    <span>&nbsp;{validationMsg.gender}</span>
                  </SignUpLable>
                  <SignUpBtnWrapper>
                    <BtnLink onClick={backSlider}>Trở Lại</BtnLink>
                    <BtnLink onClick={nextSlider}>Tiếp Theo</BtnLink>
                  </SignUpBtnWrapper>
                </SignUpFieldWrapper>
              </SignUpPage>
              {/* item 3 */}
              {/* item 4 */}
              <SignUpPage>
                <SignUpH3>Xác Nhận Danh Tính</SignUpH3>
                <SignUpFieldWrapper>
                  <SignUpLable>
                    <SignUpP>Ảnh Xác Thực Chứng Chỉ Hành Nghề</SignUpP>
                    <SignUpInput onBlur={handleCertified} type="text" />
                    <span>&nbsp;{validationMsg.certified}</span>
                  </SignUpLable>
                  <SignUpLable>
                    <SignUpP>Vai Trò</SignUpP>
                    <SignUpInput type="text" onBlur={handleRole} />
                    <span>&nbsp;{validationMsg.role}</span>
                  </SignUpLable>
                  <SignUpBtnWrapper>
                    <BtnLink onClick={backSlider}>Trở Lại</BtnLink>
                    <BtnLink onClick={nextSlider}>Tiếp Theo</BtnLink>
                  </SignUpBtnWrapper>
                </SignUpFieldWrapper>
              </SignUpPage>
              {/* item 4 */}
              {/* item 5 */}
              <SignUpPage>
                <SignUpH3>Thông Tin Đăng Nhập</SignUpH3>
                <SignUpFieldWrapper>
                  <SignUpLable>
                    <SignUpP>Mật Khẩu</SignUpP>
                    <SignUpInput onBlur={handlePassword} type="password" />
                    <span>&nbsp;{validationMsg.password}</span>
                  </SignUpLable>
                  <SignUpLable>
                    <SignUpP>Xác Thực Mật Khẩu</SignUpP>
                    <SignUpInput
                      onBlur={handleConfirmPassword}
                      type="password"
                    />
                    <span>&nbsp;{validationMsg.confrimPassword}</span>
                  </SignUpLable>
                  <SignUpBtnWrapper>
                    <BtnLink onClick={backSlider}>Trở Lại</BtnLink>
                    <BtnLink onClick={formComplete}>Hoàn Thành</BtnLink>
                  </SignUpBtnWrapper>
                </SignUpFieldWrapper>
              </SignUpPage>
              {/* item 5 */}
            </SignUpPageWrapper>
          </SignUpWrapper>
        </WrapperHidden>
      </SignUpContainer>
    </>
  );
};

export default SignUp;
