import React, { useEffect, useState } from 'react';
import api from '../utils/api.js';
import Cookies from 'js-cookie';

const Context = React.createContext();

export const ContextProvider = props => {

    const [courses, setCourses] = useState([]);
    const [authUser, setAuthUser] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('')
    const [error, setError] = useState();

    useEffect(() => {
        const getCourses = async () => {
            const response = await api.getAllCourses('courses')
            setCourses(response.data);
        }
        getCourses()
    }, [])

    useEffect(() => {
        if ( Cookies.get('loggedIn') === 'true' ) {
            setAuthUser(true);
            setUserName(Cookies.get('username'));
        }
    }, [])

    // const onChange = e => {
    //     e.preventDefault()
    //     return console.log(e.target.value);
    // }

    const value = {
        courses,
        authUser,
        userEmail,
        userName,
        error,
        actions: {
            setAuthUser,
            setUserEmail,
            setUserName,
            setError
        }
    }

    return (
        <Context.Provider value={{ value }}>
            {props.children}
        </Context.Provider>
    )

}

export default Context;