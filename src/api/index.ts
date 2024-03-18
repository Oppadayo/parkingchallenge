import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://parking-lot-to-pfz.herokuapp.com/parking",
});

export default axios;
