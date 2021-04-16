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
<<<<<<< HEAD
import Forbidden from './components/Forbidden'
import UnhandledError from './components/UnhandledError'
=======
import PrivateRoute from './components/PrivateRoute';
>>>>>>> 978b397f47a87f8d447ad509a95ff409f6331842

function App() {

  return (
    <>
      <Nav />
      <Switch>
<<<<<<< HEAD
        <Route exact path='/'>
          <AllCourses />
        </Route>
        <Route exact path='/signin'>
          <SignIn />
        </Route>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/signout'>
          <SignOut />
        </Route>
        <Route exact path='/courses/create'>
          <CreateCourse />
        </Route>
        <Route exact path={`/courses/:id`}>
          <CourseDetail />
        </Route>
        <Route exact path={'/courses/:id/delete'}>
          <DeleteCourse />
        </Route>
        <Route exact path={'/error'}>
          <UnhandledError />
        </Route>
        <Route exact path={'/forbidden'}>
          <UnhandledError />
        </Route>
        <Route>
          <Notfound />
        </Route>
=======
        <Route exact path='/' component={AllCourses} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/signout' component={SignOut} />
        <PrivateRoute path={'/courses/create'} component={CreateCourse}/>
        <Route exact path={`/courses/:id`} component={CourseDetail}/>
        <Route exact path={'/courses/:id/delete'} component={DeleteCourse}/>
        <Route component={Notfound} />
>>>>>>> 978b397f47a87f8d447ad509a95ff409f6331842
      </Switch>
    </>
  );
}

export default App;
