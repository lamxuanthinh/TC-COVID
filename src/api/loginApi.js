import axiosClient from "./axiosClient";

const LoginApi = {
  postAll: (params) => {
    const url = "/login";
    return axiosClient.post(url, params);
  },
};
export default LoginApi;
