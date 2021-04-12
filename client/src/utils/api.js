 import axios from 'axios';

 const url = 'http://localhost:5000/api/'

export default {
     
    getAllCourses: async (path) => {
        const response = await axios.get(`${url}${path}`);
        return response;
     } 
}