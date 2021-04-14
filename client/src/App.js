import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Nav from './components/Nav';
import AllCourses from './components/AllCourses';
import SignIn from './components/SignIn';
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
        <Route exact path='/error'>
          <ErrorPage />
        </Route>
        <Route>        
          <Notfound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
