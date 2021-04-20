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

    const [user, setUser] = useState({
        authenticated: false,
        id: '',
        email: '',
        userName: '',
        password: '',
    });

    const [error, setError] = useState([]);
    const [validationError, setValidationError] = useState(null);

    const [courseValues, setCourseValues] = useState({
        courseId: null,
        title: "",
        description: "",
        estimatedTime: "",
        materialsNeeded: "",
        userId: null,
        author: ""
    });

    //any time "create course" info is updated, try to add it and display error if there is one

    const [newCourse, setNewCourse] = useState({});
    useEffect(() => {
        let id;
        const addCourse = async () => {
            const response = await api.postNewCourse(newCourse, user.email, user.password);
            id = response.data.id;
            history.push(`/courses/${id}`);
            setValidationError(null);
        }
        if (user.authenticated) {
            asyncHandler(addCourse);
        }
        // eslint-disable-next-line
    }, [newCourse]);


    useEffect(() => {
        const { authenticated, id, email, userName, password } = user;

        Cookies.set('loggedIn', authenticated, {expires: 1})
        Cookies.set('userId', id, {expires: 1})
        Cookies.set('username', userName, {expires: 1})
        Cookies.set('email', email, {expires: 1});
        Cookies.set('pass', password, {expires: 1});
       
    }, [user])

    const value = {
        courses,
        user,
        error,
        validationError,
        courseValues,
        actions: {
            setUser,
            setError,
            setNewCourse,
            setCourseValues,
            setValidationError,
            asyncHandler,
            setUser
        }
    }

    return (
        <Context.Provider value={{ value }}>
            {props.children}
        </Context.Provider>
    )

}

export default Context;