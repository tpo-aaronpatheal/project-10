import axios from 'axios';

const url = 'http://localhost:5000/api/'


export default {
     
    getAllCourses: async (path) => {
        const response = await axios.get(`${url}${path}`);
        return response;
     },
     
    getUser: async (path, email, password) => {
        const decodedPassword = atob(password);
        const response = await axios.get(`${url}${path}`, {
            auth: {
                username: email,
                password: decodedPassword
            }
        });
        return await response;
    }
}