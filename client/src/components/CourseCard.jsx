import React from 'react';
import { NavLink } from 'react-router-dom';

//Navigates to page and updates path based upon click. 
const CourseCard = (props) => {

    return (
        <NavLink className="course--module course--link" to={props.href}>
        <h2 className="course--label">Course</h2>
        <h3 className="course--title">{props.title}</h3>
        </NavLink>
    )

}
 
export default CourseCard;