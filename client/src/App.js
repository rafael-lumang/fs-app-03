import React from "react";
import { Route, Routes,  } from "react-router-dom"


import Header from "./components/Header";
import Courses from "./components/Courses";
import CreateCourse from "./components/CreateCourse";
import UpdateCourse from "./components/UpdateCourse";
import CourseDetail from "./components/CourseDetail";
import UserSignIn from "./components/UserSignIn";
import UserSignUp from "./components/UserSignUp";
import UserSignOut from "./components/UserSignOut";

function App() {

  return (
      <div id="root">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Courses />} />
            <Route path="/courses/create" element={<CreateCourse />} />
            <Route path="/courses/:id/update" element={<UpdateCourse />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/signin" element={<UserSignIn />} />
            <Route path="/signup" element={<UserSignUp />} />
            <Route path="/signout" element={<UserSignOut />} />
          </Routes>
        </main>
      </div>

  );
}

export default App;
