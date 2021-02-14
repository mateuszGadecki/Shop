import axios from "axios";

const instance = axios.create({
  baseURL: "https://flume-shop-default-rtdb.firebaseio.com/",
});

export default instance;
