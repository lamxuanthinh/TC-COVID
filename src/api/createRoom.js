import axiosClient from "./axiosClient";

const createRoom = {
  postAll: (params) => {
    return axiosClient.post(
      "https://tc-covid-json-server.herokuapp.com/rooms/create",
      params
    );
  },
  postCheckRoom: (params) => {
    return axiosClient.post(
      "https://tc-covid-json-server.herokuapp.com/rooms/add-user",
      params
    );
  },
};
export default createRoom;
