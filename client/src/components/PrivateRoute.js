import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Context from '../context';

const PrivateRoute = ({ component: Component }) => {
    const { value: { authUser } } = useContext(Context);

    return (
        <Route>
            {authUser ? <Component /> : <Redirect to={'/forbidden'} />}
        </Route>
  );
};

export default PrivateRoute;