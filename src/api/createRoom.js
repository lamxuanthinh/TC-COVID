import axiosClient from "./axiosClient";

const createRoom = {
  postAll: (params) => {
    return axiosClient.post("http://localhost:5000/rooms/create", params);
  },
  postCheckRoom: (params) => {
    return axiosClient.post("http://localhost:5000/rooms/add-user", params);
  },
};
export default createRoom;
