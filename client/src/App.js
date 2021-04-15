import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Nav from './components/Nav';
import AllCourses from './components/AllCourses';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SignOut from './components/SignOut';
import Notfound from './components/NotFound'
import ErrorPage from './components/ErrorPage'

function App() {

  return (
    <>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <AllCourses />
        </Route>
        <Route exact path='/signin'>
          <SignIn />
        </Route>
<<<<<<< HEAD
        <Route exact path='/error'>
          <ErrorPage />
        </Route>
        <Route>        
=======
        <Route exact path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/signout'>
          <SignOut />
        </Route>
        <Route>
>>>>>>> e9626e36eecbaed78bf8dc39b3533e02bf362ac3
          <Notfound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
