import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Components/Layout/Layout";
import Dashboard from "./Pages/Dashboard";
import Calendar from "./Pages/Calendar";
import Instructors from "./Pages/Instructors";
import InstructorDetails from "./Pages/InstructorDetails";
import Students from "./Pages/Students";
import StudentDetail from "./Pages/StudentDetail";
import Courses from "./Pages/Courses";
import Messages from "./Pages/Messages";

function App() {
  const [user, setUser] = useState("Philip");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/Dashboard"
          element={
            <Layout title="Dashboard" user={user}>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/Calendar"
          element={
            <Layout title="Calendar" user={user}>
              <Calendar />
            </Layout>
          }
        />
        <Route
          path="/Instructors"
          element={
            <Layout title="Instructors" user={user}>
              <Instructors />
            </Layout>
          }
        />
        <Route
          path="/Instructors/:id"
          element={
            <Layout title="Instructors" user={user}>
              <InstructorDetails />
            </Layout>
          }
        />

        <Route
          path="/Students"
          element={
            <Layout title="Students" user={user}>
              <Students />
            </Layout>
          }
        />
        <Route
          path="/Students/:id"
          element={
            <Layout title="Student Detail" user={user}>
              <StudentDetail />
            </Layout>
          }
        />
        <Route
          path="/Messages"
          element={
            <Layout title="Messages" user={user}>
              <Messages/>
            </Layout>
          }
        />
        <Route
          path="/Courses"
          element={
            <Layout title="Courses" user={user}>
              <Courses />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
