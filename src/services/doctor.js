import axios from "axios";
const host = process.env.REACT_APP_BACKEND_URL;

/////////////////////////////////// GET METHOD //////////////////////////////////////
// export const getDoctorInfo = async (token, id) => {
//     try {
//         const { data } = await axios.get(`${host}/doctor/get_doctor_info/${id}` , {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return data;
//     } catch (error) {
//         return error.response.data.message;
//     }
// };

/////////////////////////////////// POST METHOD //////////////////////////////////////
export const getDoctorInfo = async (token, id) => {
    try {
        const { data } = await axios.post(`${host}/doctor/get_doctor_info`,{id} , {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return data;
    } catch (error) {
        return error.response.data.message;
    }
};

export const updateDoctorProfile = async (token, datas) => {
    try {
        const { data } = await axios.post(`${host}/doctor/update_doctor_profile`,{datas} , {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return data;
    } catch (error) {
        return error.response.data.message;
    }
};