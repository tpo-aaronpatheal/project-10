import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Nav from './components/Nav';
import AllCourses from './components/AllCourses';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SignOut from './components/SignOut';
import CourseDetail from './components/CourseDetail'
import Notfound from './components/NotFound'
import CreateCourse from './components/CreateCourse';
import DeleteCourse from './components/DeleteCourse';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <>
      <Nav />
      <Switch>
        <Route exact path='/' component={AllCourses} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/signout' component={SignOut} />
        <PrivateRoute path={'/courses/create'} component={CreateCourse}/>
        <Route exact path={`/courses/:id`} component={CourseDetail}/>
        <Route exact path={'/courses/:id/delete'} component={DeleteCourse}/>
        <Route component={Notfound} />
      </Switch>
    </>
  );
}

export default App;
