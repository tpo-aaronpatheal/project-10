import React, { useEffect, useState } from 'react';
import api from '../utils/api.js';

const Context = React.createContext();

export const ContextProvider = props => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const getCourses = async () => {
            const response = await api.getAllCourses('courses')
            setCourses(response.data);
        }
        getCourses()
    }, [])

    const value = {
        courses
    }

    return (
        <Context.Provider value={{ value }}>
            {props.children}
        </Context.Provider>
    )

}

export default Context;