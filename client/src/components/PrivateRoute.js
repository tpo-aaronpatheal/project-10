import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Context from '../context';

const PrivateRoute = ({ component: Component, location }) => {
    const { value } = useContext(Context);

    return (
        <Route>
            {value.user.authenticated  ?  <Component /> 
            : 
            <Redirect to={{ 
                pathname: '/signin',
                state: { from: location } 
                }}
            />}
        </Route>
  );


};

export default PrivateRoute;