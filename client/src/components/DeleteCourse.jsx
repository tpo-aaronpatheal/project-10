import React, { useContext, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import api from '../utils/api';
import Context from '../context';

const DeleteCourse = () => {

    const { value } = useContext(Context);

    const history = useHistory();

    useEffect(() => {
        if(value.courseValues.userId !== value.user.id){
            history.push('/forbidden')
        } else {
        api.deleteCourse(`courses/${value.courseValues.courseId}`, value.user.email, value.user.password)
        history.go(0);
        }
        // eslint-disable-next-line
    }, [])

    return ( 
        <Redirect to="/" />
    );
}
 
export default DeleteCourse;