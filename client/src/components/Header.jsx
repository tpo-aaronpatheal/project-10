import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Context from '../context';

const Header = () => {
    const { value: { user: { authenticated, userName } } } = useContext(Context);

    return ( 
        <header>
            <div className="wrap header--flex">
                <h1 className="header--logo"><NavLink to="/">Courses</NavLink></h1>
                {authenticated ? 
                    <nav>
                        <ul className="header--signedin">
                            <li>Welcome, {userName}!</li>
                            <li><NavLink to="/signout">Sign Out</NavLink></li>
                        </ul>
                    </nav>
                :
                    <nav className="header--signedout">
                        <ul >
                            <li><NavLink to="/signup">Sign Up</NavLink></li>
                            <li><NavLink to="/signin">Sign In</NavLink></li>
                        </ul>
                    </nav>
                }
            </div>
        </header>
    );
}
 
export default Header;
