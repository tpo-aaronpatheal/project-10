import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Nav from './components/Nav';
import AllCourses from './components/AllCourses';
import SignIn from './components/SignIn';

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
      </Switch>
    </>
  );
}

export default App;
