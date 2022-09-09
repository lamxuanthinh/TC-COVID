import axios from "axios";
// import axiosClient from "./axiosClient";

const createQrCodeApi = {
  postDataQrCode: (params) => {
    const url = "https://qrtiger.com/api/qr/static";
    return axios.post(url, params, {
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer 9071dfe0-2f29-11ed-a3fa-4f295d5a8b40",
      },
    });
  },
};

export default createQrCodeApi;
