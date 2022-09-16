import React, { useEffect } from "react";
import { useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import Modal from "../Modal";
import signUpApi from "../../api/signUpApi";

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
  const message = {};

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
  const [confirmPassword, setConfirmPassword] = useState("");

  const [validationMsg, setValidationMsg] = useState({});

  // Modal
  const [openModal, setOpenModal] = useState(false);
  // phone code
  const [phoneCode, setPhoneCode] = useState(1);

  const dataSubmit = {
    IdCard: cccd,
    phoneNumber: phoneNumber,
    name: fullName,
    gender: gender,
    address: address,
    dateOfBirth: age,
    role: role,
    password: password,
    image: certified,
  };
  // regex
  const regexCodePeople = /^0[0-9]{11}$/g;
  const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  //  start Slider 01
  const handleCccd = (e) => {
    setCccd(e.target.value.trim());
    if (
      isEmpty(e.target.value.trim()) ||
      !regexCodePeople.test(e.target.value.trim())
    ) {
      const cccdMsg = "Định dạng 08/09 hoặc 12 số";
      setValidationMsg({ ...validationMsg, cccd: cccdMsg });
    } else {
      delete validationMsg.cccd;
      setValidationMsg(validationMsg);
    }
  };
  const handleFullName = (e) => {
    setFullName(e.target.value.trim());
    if (isEmpty(e.target.value.trim())) {
      const fullNameMsg = "Họ và tên không được bỏ trống";
      setValidationMsg({ ...validationMsg, fullName: fullNameMsg });
    } else {
      delete validationMsg.fullName;
      setValidationMsg(validationMsg);
    }
  };
  const validateAll01 = () => {
    if (isEmpty(cccd) || !regexCodePeople.test(cccd)) {
      message.cccd = "Định dạng 08/09 hoặc 12 số";
    }
    if (isEmpty(fullName)) {
      message.fullName = "Họ và tên không được bỏ trống";
    }

    setValidationMsg(message);
    if (Object.keys(message).length > 0) return false;
    return true;
  };
  // end Slider 10

  //  start Slider 02
  const handelPhoneNumber = (e) => {
    setPhoneNumber(e.target.value.trim());
    if (
      isEmpty(e.target.value) ||
      !regexPhoneNumber.test(e.target.value.trim())
    ) {
      const phoneNumberMsg = "Số điện thoại không hợp lệ";
      setValidationMsg({ ...validationMsg, phoneNumber: phoneNumberMsg });
    } else {
      delete validationMsg.phoneNumber;
      setValidationMsg(validationMsg);
    }
  };
  const handleAddress = (e) => {
    setAddress(e.target.value.trim());
    if (isEmpty(e.target.value.trim())) {
      const addressMsg = "Địa chỉ không được bỏ trống";
      setValidationMsg({ ...validationMsg, address: addressMsg });
    } else {
      delete validationMsg.address;
      setValidationMsg(validationMsg);
    }
  };
  const validateAll02 = () => {
    if (isEmpty(phoneNumber) || !regexPhoneNumber.test(phoneNumber)) {
      message.phoneNumber = "Số điện thoại không hợp lệ";
    }
    if (isEmpty(address)) {
      message.address = "Địa chỉ không được bỏ trống";
    }

    setValidationMsg(message);
    if (Object.keys(message).length > 0) return false;
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
      message.age = "Số điện thoại không hợp lệ";
    }
    if (isEmpty(gender)) {
      message.gender = "Địa chỉ không được bỏ trống";
    }

    setValidationMsg(message);
    if (Object.keys(message).length > 0) return false;
    return true;
  };
  // end Slider 03

  //  start Slider 04
  const handleCertified = (e) => {
    setCertified(e.target.files[0].name);
    if (isEmpty(e.target.files[0].name)) {
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
      message.certified = "Vui lòng nhập ảnh hợp lệ";
    }
    if (isEmpty(role)) {
      message.role = "Vai trò không được bỏ trống";
    }

    setValidationMsg(message);
    if (Object.keys(message).length > 0) return false;
    return true;
  };
  // end Slider 04

  //  start Slider 05
  const handlePassword = (e) => {
    setPassword(e.target.value.trim());
    let regexPs = regexPassword.test(e.target.value.trim());
    if (isEmpty(e.target.value.trim()) || !regexPs) {
      const passwordMsg =
        "Mật khẩu trên 8 kí tự , phải có một số và một chữ hoa";
      setValidationMsg({ ...validationMsg, password: passwordMsg });
    } else {
      delete validationMsg.password;
      setValidationMsg(validationMsg);
    }
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);

    if (isEmpty(e.target.value) || e.target.value !== password) {
      const confirmPasswordMsg =
        "Mật khẩu trên 8 kí tự , phải có một số và một chữ hoa";
      setValidationMsg({
        ...validationMsg,
        confirmPassword: confirmPasswordMsg,
      });
    } else {
      delete validationMsg.confirmPassword;
      setValidationMsg(validationMsg);
    }
  };
  const validateAll05 = () => {
    if (isEmpty(password) || !regexPassword.test(password)) {
      message.password =
        "Mật khẩu trên 8 kí tự , phải có một số và một chữ hoa";
    }
    if (isEmpty(confirmPassword) || confirmPassword !== password) {
      message.confirmPassword = "Mật khẩu xác thực không hợp lệ";
    }
    setValidationMsg(message);
    if (Object.keys(message).length > 0) return false;
    return true;
  };
  // end Slider 05

  // controller modal

  const CloseModal = () => {
    setOpenModal(false);
  };

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
        }
        break;
      }
    }
  };
  const backSlider = () => {
    setStep(step - 1);
    setCheck(check + 100);
  };
  // form completed and call api
  const formComplete = () => {
    const isValid05 = validateAll05();
    if (isValid05) {
      setStep(5);
      setOpenModal(true);
      const postSignUpPhoneCode = async () => {
        try {
          const responsePhone = await signUpApi.postPhoneCode({
            phoneNumber: dataSubmit.phoneNumber,
          });
          setPhoneCode(responsePhone);
        } catch (error) {
          console.log("Failed to post phone code", error);
        }
      };
      postSignUpPhoneCode();
    }
  };

  return (
    <>
      <Modal
        openModal={openModal}
        CloseModal={() => {
          CloseModal();
        }}
        dataSubmit={dataSubmit}
        responsePhoneCode={phoneCode}
      ></Modal>
      <SignUpContainer>
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
                    <SignUpInput type="tel" onBlur={handelPhoneNumber} />
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
                    <SignUpInput type="date" onBlur={handleAge} />
                    <span>&nbsp;{validationMsg.age}</span>
                  </SignUpLable>
                  <SignUpLable>
                    <SignUpP>Giới Tính</SignUpP>
                    <select className="selectInput" onBlur={handleGender}>
                      <option defaultValue>Giới Tính</option>
                      <option value="Nam">Nam</option>
                      <option value="Nữ">Nữ</option>
                    </select>
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
                    <label htmlFor="file-upload" className="fileInput">
                      <p>{certified}</p>
                      <input
                        id="file-upload"
                        className="file"
                        type="file"
                        onBlur={handleCertified}
                      />
                    </label>
                    <span>&nbsp;{validationMsg.certified}</span>
                  </SignUpLable>
                  <SignUpLable>
                    <SignUpP>Vai Trò</SignUpP>
                    <select className="selectInput" onBlur={handleRole}>
                      <option defaultValue>
                        Vai Trò Trong Hệ Thống Tiêm Chủng
                      </option>
                      <option value="Y Tá Kiểm Tra Sức Khoẻ">
                        Y Tá Kiểm Tra Sức Khoẻ
                      </option>
                      <option value="Bác Sĩ Kiểm Tra Sức Khoẻ">
                        Bác Sĩ Kiểm Tra Sức Khoẻ
                      </option>
                      <option value="Bác sĩ tiêm chủng">
                        Bác sĩ tiêm chủng
                      </option>
                    </select>
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
                    <span>&nbsp;{validationMsg.confirmPassword}</span>
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
