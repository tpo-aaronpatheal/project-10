import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
//import Context from './context';

//Navigates to page and updates path based upon click. 
const Nav = () => {
  //const {  } = useContext(context);

    return ( 
        <header>
            <div className="wrap header--flex">
                <h1 className="header--logo"><NavLink to="/">Courses</NavLink></h1>
                <nav className="header--signedout">
                    <ul >
                        <li><NavLink to="/signup">Sign Up</NavLink></li>
                        <li><NavLink to="/signin">Sign In</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
 
export default Nav;