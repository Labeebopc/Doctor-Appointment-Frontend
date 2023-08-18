import axios from "axios";
const host = process.env.REACT_APP_BACKEND_URL;

export const userRegistration = async (datas) => {
  try {

    const { data } = await axios.post(`${host}/user_registration`, datas);
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const userLogin = async (datas) => {
  // console.log(datas)
  try {
    const { data } = await axios.post(`${host}/user_login`, datas);
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};


export const getAllNotification = async (token, id) => {
  try {
    const { data } = await axios.get(`${host}/admin/get_all_notification/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const getAllUsers = async (token) => {
  try {
    const { data } = await axios.get(`${host}/admin/get_all_users`, {
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
    const { data } = await axios.get(`${host}/admin/get_all_doctors`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const deleteDoctor = async (token, id) => {
  try {
    const { data } = await axios.delete(`${host}/admin/delete_doctor/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};


export const changeConfirmationStatus = async (token, id, confirmationStats, userId) => {
  try {
    const { data } = await axios.patch(`${host}/admin/change_confirmation_status/${id}`, { confirmationStats, userId }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};