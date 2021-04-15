import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../utils/api.js';
import Cookies from 'js-cookie';

const Context = React.createContext();

export const ContextProvider = props => {
    let history = useHistory()

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const getCourses = async () => {
            const response = await api.getAllCourses('courses')
            setCourses(response.data);
        }
        getCourses()
    }, []);

    const [authUser, setAuthUser] = useState(false);
    const [userId, setUserId] = useState()
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState([]);
    const [validationError, setValidationError] = useState([]);

    const [newCourse, setNewCourse] = useState({});
    //any time "create course" info is updated, try to add it and display error if there is one
    useEffect(() => {
        let id;
        const addCourse = async () => {
            try {
                const response = await api.postNewCourse(newCourse, userEmail, password);
                id = response.data.id;
                history.push(`/courses/${id}`);
            } catch (error) {
                setValidationError(error.response.data.errors);
            }
        }
        addCourse();
        // eslint-disable-next-line
    }, [newCourse]);


    useEffect(() => {
        if ( Cookies.get('loggedIn') === 'true' ) {
            setAuthUser(true);
            setUserId(Cookies.get('userId'));
            setUserName(Cookies.get('username'));
            setUserEmail(Cookies.get('email'))
            setPassword(Cookies.get('pass'));
        }
    }, [])

    const value = {
        courses,
        authUser,
        userId,
        userEmail,
        userName,
        password,
        error,
        validationError,
        actions: {
            setAuthUser,
            setUserId,
            setUserEmail,
            setUserName,
            setPassword,
            setError,
            setNewCourse
        }
    }

    return (
        <Context.Provider value={{ value }}>
            {props.children}
        </Context.Provider>
    )

}

export default Context;