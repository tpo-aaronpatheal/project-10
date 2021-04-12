import React, { useState } from 'react';

import api from '../utils/api';

const Context = React.createContext();

export const ContextProvider = (props) => {

    const [courseData, setCourseData] = useState([]);

    setCourseData(api.getAllCourses('courses'));

    return(
        <Context.Provider value={courseData}>
            {props.children}
        </Context.Provider>
    )

}

export default Context;