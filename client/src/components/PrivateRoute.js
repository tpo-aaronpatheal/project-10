import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import Context from '../context';

import Forbidden from '../components/Forbidden';

const PrivateRoute = ({ component: Component }) => {
    const { value: { user: { authenticated } } } = useContext(Context);

    return (
        <Route>
            {authenticated ? <Component /> : <Forbidden />}
        </Route>
  );
};

export default PrivateRoute;