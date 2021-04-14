import React, { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

const SignOut = () => {

    const history = useHistory();

    useEffect(() => {
        Cookies.remove('email');
        Cookies.remove('pass');
        Cookies.remove('username');
        Cookies.remove('loggedIn');
        history.go(0);
    }, [])

    return ( 
        <Redirect to="/" />
    );
}
 
export default SignOut;