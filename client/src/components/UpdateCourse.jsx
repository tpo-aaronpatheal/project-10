import React, { useContext } from 'react';
import {NavLink, useHistory } from 'react-router-dom';


import api from '../utils/api';
import Context from '../context';
import ValidationError from './ValidationError';

const UpdateCourse = () => {
    const { value } = useContext(Context);
    const history = useHistory();
    
    

    const changeHandler = (e) => {
      value.actions.setCourseValues({...value.courseValues, [e.target.name]: e.target.value})  
    } 

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
        await api.updateCourse(`courses/${value.courseValues.courseId}`, value.user.email, value.user.password, value.courseValues.title, value.courseValues.description, value.courseValues.estimatedTime, value.courseValues.materialsNeeded);
        history.goBack();
        } catch(error) {
            const { response: { status, data, data: { errors } } } = error;
            if (error.response.status === 400) {
                value.actions.setValidationError(errors)          
            } else {
                history.push("/error")
            }
            console.log(error)
        }
        
      }
    
        
     
    //LOWER UPDATE
    return (
         <div className="wrap">
                <h2>Update Course</h2>
                {value.validationError ? <ValidationError /> : null}
                <form onSubmit={onSubmit}>
                    <div className="main--flex">
                        <div>
                            <label htmlFor="courseTitle">Course Title</label>
                            <input id="courseTitle" name="title" type="text" onChange={changeHandler} value={value.courseValues.title}/>

                            <label htmlFor="courseDescription">Course Description</label>
                            <textarea id="courseDescription" name="description" onChange={changeHandler} value={value.courseValues.description}></textarea>
                        </div>
                        <div>
                            <label htmlFor="estimatedTime">Estimated Time</label>
                            <input id="estimatedTime" name="estimatedTime" type="text" onChange={changeHandler} value={value.courseValues.estimatedTime}/>

                            <label htmlFor="materialsNeeded">Materials Needed</label>
                            <textarea id="materialsNeeded" name="materialsNeeded" type="text" onChange={changeHandler} value={value.courseValues.materialsNeeded}></textarea>
                        </div>
                    </div>
                    <button className="button" type="submit" >Update Course</button>
                    <NavLink to={`/courses/${value.courseValues.courseId}`}><button className="button button-secondary">Cancel</button></NavLink>
                </form>
            </div>
    );
}

export default UpdateCourse;
