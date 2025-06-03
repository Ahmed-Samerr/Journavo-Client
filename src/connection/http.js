import axios from "axios";

const client = axios.create({
  baseURL: "https://journavo-server.onrender.com",
});

const actions = {
  post: axios.post,
  get: axios.get,
  client,
};

export default actions;
