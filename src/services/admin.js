import axios from "axios";
const host = process.env.REACT_APP_BACKEND_URL;

export const userRegistration = async (datas) => {
  try {

    const { data } = await axios.post(`${host}/userRegistration`, datas);
    return data;
  } catch (error) {
    console.log(error,"kk")
    return error.response.data.message;
  }
};

export const userLogin = async (datas) => {
    try {
      const { data } = await axios.post(`${host}/userLogin`, datas);
      return data;
    } catch (error) {
      return error.response.data.message;
    }
  };