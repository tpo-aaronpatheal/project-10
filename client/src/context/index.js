import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import api from '../utils/api.js';
import Cookies from 'js-cookie';

const Context = React.createContext();

export const ContextProvider = props => {
    let history = useHistory()
    let path = useLocation().pathname

    // catch server/sql validation  errors
    const asyncHandler = async cb => {
        try {
            await cb()
        } catch (error) {
            const { response: { status, data, data: { errors } } } = error;

            switch (status) {
                case 400:
                    setValidationError(errors);
                    break;
                case 401:
                    setError(data);
                    break;
                default:
                    history.push('/error');
                    break;
            }
        }
    }

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const getCourses = async () => {
            const response = await api.getAllCourses('courses')
            setCourses(response.data)
        }
        asyncHandler(getCourses);
        // eslint-disable-next-line
    }, [path]);

    const [authUser, setAuthUser] = useState(false);
    const [userId, setUserId] = useState()
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState([]);
    const [validationError, setValidationError] = useState(null);
    const [courseValues, setCourseValues] = useState({
        courseId: null,
        title: "",
        description: "",
        estimatedTime: "",
        materialsNeeded: "",
        userId: null
    });
    
    //any time "create course" info is updated, try to add it and display error if there is one

    const [newCourse, setNewCourse] = useState({});
    useEffect(() => {
        let id;
        const addCourse = async () => {
            const response = await api.postNewCourse(newCourse, userEmail, password);
            id = response.data.id;
            history.push(`/courses/${id}`);
            setValidationError(null);
        }
        if (authUser) {
            asyncHandler(addCourse);
        }
        // eslint-disable-next-line
    }, [newCourse]);


    useEffect(() => {
        if (Cookies.get('loggedIn') === 'true') {
            setAuthUser(true);
            setUserId(parseInt(Cookies.get('userId')));
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
        courseValues,
        actions: {
            setAuthUser,
            setUserId,
            setUserEmail,
            setUserName,
            setPassword,
            setError,
            setNewCourse,
            setCourseValues,
            setValidationError,
            asyncHandler
        }
    }

    return (
        <Context.Provider value={{ value }}>
            {props.children}
        </Context.Provider>
    )

}

export default Context;