import React, { useEffect, useState } from 'react';
import api from '../utils/api.js';

const Context = React.createContext();

export const ContextProvider = props => {

    const [courses, setCourses] = useState([]);
    const [authUser, setAuthUser] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        const getCourses = async () => {
            const response = await api.getAllCourses('courses')
            setCourses(response.data);
        }
        getCourses()
    }, [])

    // const onChange = e => {
    //     e.preventDefault()
    //     return console.log(e.target.value);
    // }

    const value = {
        courses,
        authUser,
        userEmail,
        
        actions: {
            setAuthUser,
            setUserEmail,
            //onChange
        }
    }

    return (
        <Context.Provider value={{ value }}>
            {props.children}
        </Context.Provider>
    )

}

export default Context;