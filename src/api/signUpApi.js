import axiosClient from "./axiosClient";

const signUpApi = {
  postPhoneCode: (params) => {
    const url = "/sendSMS";
    return axiosClient.post(url, params);
  },
  postSignupData: (params) => {
    const url = "/signup";
    return axiosClient.post(url, params);
  },
};

export default signUpApi;
