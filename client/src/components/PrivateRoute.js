import React, { useContext } from 'react';
import { Route, useLocation } from 'react-router-dom';
import Context from '../context';

import Forbidden from '../components/Forbidden';
import NotFound from './NotFound';

const PrivateRoute = ({ component: Component }) => {
    const { value } = useContext(Context);

    let path = useLocation().pathname.split('/');
    let index = parseInt(path[2]);
    let courseIds = value.courses.map(course => course.id)


    return (
        <Route>
            {path[3] === 'update' && !courseIds.includes(index)  ? <NotFound /> : (!value.user.authenticated ?  <Forbidden /> : <Component />)}
        </Route>
  );


};

export default PrivateRoute;