import React, { useEffect, useState } from 'react';
import api from '../utils/api.js';

const Context = React.createContext();

export const ContextProvider = props => {

    const [courses, setCourses] = useState([]);


    useEffect(() => {
        const getCourses = () => {
            api.getAllCourses('courses')
                .then(res => setCourses(res.data));
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