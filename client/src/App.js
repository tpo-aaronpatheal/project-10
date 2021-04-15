import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom'

import Context from './context';

import Nav from './components/Nav';
import AllCourses from './components/AllCourses';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SignOut from './components/SignOut';
import CourseDetail from './components/CourseDetail'
import Notfound from './components/NotFound'
import CreateCourse from './components/CreateCourse';
import DeleteCourse from './components/DeleteCourse';

function App() {

  const { value } = useContext(Context);

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
        <Route>
          <Notfound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
