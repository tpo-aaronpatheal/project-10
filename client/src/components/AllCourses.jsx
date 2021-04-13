import React, { useContext } from 'react';
//import { NavLink } from 'react-router-dom';
import Context from '../context';

import CourseCard from './CourseCard';

//Navigates to page and updates path based upon click. 
const AllCourses = () => {
    const { value } = useContext(Context);

    return ( 
        <>
        <main>
            <div className="wrap main--grid">
                {value.courses.map(course => { 
                    return <CourseCard key={course.id} title={course.title} href={course.id}/>  
                })}
            </div>
        </main>
        </>
    );
}
 
export default AllCourses;