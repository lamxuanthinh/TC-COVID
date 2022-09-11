import axiosClient from "./axiosClient";
import axios from "axios";

const controllerRoom = {
  postDataAccount01: (params) => {
    return axios.post(
      "https://tc-covid-json-server.herokuapp.com/room2/add-user",
      params
    );
  },
  leaveRoom: (params) => {
    return axios.post(
      "https://tc-covid-json-server.herokuapp.com/rooms/exit",
      params
    );
  },
  getUser02: (params) => {
    return axios.get(
      `https://tc-covid-json-server.herokuapp.com/room2/firstUser/${params.RoomId}`
    );
  },
  postAccount02: (params) => {
    return axios.post(
      "https://tc-covid-json-server.herokuapp.com/room2/submit",
      params
    );
  },
  getUser03: (params) => {
    return axios.get(
      `https://tc-covid-json-server.herokuapp.com/room3/firstUser/${params.RoomId}`
    );
  },
  deleteAccount02: (params) => {
    return axios.post(
      "https://tc-covid-json-server.herokuapp.com/room2/delete",
      params
    );
  },
  deleteAccount03: (params) => {
    return axios.post(
      "https://tc-covid-json-server.herokuapp.com/room3/endList",
      params
    );
  },
  completedAccount03: (params) => {
    return axios.post(
      "https://tc-covid-json-server.herokuapp.com/room3/delete",
      params
    );
  },
};
export default controllerRoom;
