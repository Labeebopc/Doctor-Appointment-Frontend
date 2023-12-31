import axios from "axios";
const host = process.env.REACT_APP_BACKEND_URL;



export const getUserData = async (token) => {
  try {
    const { data } = await axios.post(`${host}/user/get_user_data`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const applyDoctor = async (token, datas) => {
  try {
    const { data } = await axios.post(`${host}/user/apply_doctor`, datas, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const getAllDoctors = async (token) => {
  try {
    const { data } = await axios.get(`${host}/user/get_all_doctors`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const bookNewAppointment = async (token, datas) => {
  try {
    const { data } = await axios.post(`${host}/user/book_new_appointment`, datas, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};