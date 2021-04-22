import React, { useContext, useEffect } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'

import api from '../utils/api';
import Context from '../context';

const CourseDetail = () => {
    const { value } = useContext(Context);
    let history = useHistory();

    const index = useLocation().pathname.substring(9);

    useEffect(() => {
        const getCourse = async () => {
                let response = await api.getCourse(`courses/${index}`)
                let course = {
                    courseId: response.data.id,
                    title: response.data.title,
                    description: response.data.description,
                    estimatedTime: response.data.estimatedTime,
                    materialsNeeded: response.data.materialsNeeded,
                    userId: response.data.User.id
                }
                value.actions.setCourseValues(course);
        }
        value.actions.asyncHandler(getCourse);
        // eslint-disable-next-line
    }, [])

    //TOP UPDATE
    return (
        <>
            <div className="actions--bar">
                <div className="wrap">
                    {value.courseValues.userId === value.user.id ?
                        <>
                            <NavLink className="button" to={`/courses/${index}/update`}>Update Course</NavLink>
                            <NavLink className="button" to={`/courses/${index}/delete`}>Delete Course</NavLink>
                        </>
                        :
                        null}
                    <NavLink className="button button-secondary" to="/">Return to List</NavLink>
                </div>
            </div>
            <div className="wrap">
                <h2>Course Detail</h2>
                <form>
                    <div className="main--flex">
                        <div>
                            <h3 className="course--detail--title">Course</h3>
                            <h4 className="course--name">{value.courseValues.title}</h4>
                            <p>By {value.user.userName}</p>
                            <ReactMarkdown children={value.courseValues.description} />
                        </div>
                        <div>
                            <h3 className="course--detail--title">Estimated Time</h3>
                            {value.courseValues.estimatedTime ? <p>{value.courseValues.estimatedTime}</p> : <p>N/A</p>}

                            <h3 className="course--detail--title">Materials Needed</h3>
                            <ul className="course--detail--list">
                                {value.courseValues.materialsNeeded ? <ReactMarkdown children={value.courseValues.materialsNeeded} /> : <p>N/A</p>}
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CourseDetail;