import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom'

import Context from './context';

import Header from './components/Header';
import Courses from './components/Courses';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';
import CourseDetail from './components/CourseDetail'
import Notfound from './components/NotFound'
import CreateCourse from './components/CreateCourse';
import DeleteCourse from './components/DeleteCourse';
import UpdateCourse from './components/UpdateCourse';
import PrivateRoute from './components/PrivateRoute';
import UnhandledError from './components/UnhandledError';
import Forbidden from './components/Forbidden';

function App() {
  
  const { value } = useContext(Context);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Courses} />
        <Route exact path='/signin' component={UserSignIn} />
        <Route exact path='/signup' component={UserSignUp} />
        <Route exact path='/signout' component={UserSignOut} />
        <PrivateRoute path={'/courses/create'} component={CreateCourse}/>
        <Route exact path={`/courses/:id`} component={CourseDetail}/>
        <PrivateRoute exact path={'/courses/:id/update'} component={value.courseValues.userId === value.userId ? UpdateCourse : Forbidden}/>
        <PrivateRoute exact path={'/courses/:id/delete'} component={value.courseValues.userId === value.userId ? DeleteCourse : Forbidden}/>
        <Route exact path='/error' component={UnhandledError} />
        <Route component={Notfound} />
      </Switch>
    </>
  );
}

export default App;
