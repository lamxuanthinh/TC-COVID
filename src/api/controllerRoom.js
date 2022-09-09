import axiosClient from "./axiosClient";
import axios from "axios";

const controllerRoom = {
  postDataAccount01: (params) => {
    return axios.post("http://localhost:5000/room2/add-user", params);
  },
  leaveRoom: (params) => {
    return axios.post("http://localhost:5000/rooms/exit", params);
  },
  getUser02: (params) => {
    return axios.get(`http://localhost:5000/room2/firstUser/${params.RoomID}`);
  },
  postAccount02: (params) => {
    return axios.post("http://localhost:5000/room2/submit", params);
  },
  getUser03: (params) => {
    return axios.get(`http://localhost:5000/room3/firstUser/${params.RoomID}`);
  },
  deleteAccount02: (params) => {
    return axios.post("http://localhost:5000/room2/delete", params);
  },
  deleteAccount03: (params) => {
    return axios.post("http://localhost:5000/room3/endList", params);
  },
  completedAccount03: (params) => {
    return axios.post("http://localhost:5000/room3/delete", params);
  },
};
export default controllerRoom;
