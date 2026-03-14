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
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import ForgotPassword from "./Pages/ForgotPassword";
import Verification from "./Pages/verification";
import SetPassword from "./Pages/SetPassword";
import Enrollment from "./Pages/Enrollment";
import Auth from "./api/Auth";

function App() {
  const [user] = useState("Philip");
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
    <Auth>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout title="Dashboard" user={user}>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/Enrollments"
            element={
              <Layout title="Enrollment" user={user}>
                <Enrollment />
              </Layout>
            }
          />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-password" element={<Verification />} />
          <Route path="/set-password" element={<SetPassword />} />
        </Routes>
      </BrowserRouter>
    </Auth>
  );
}

export default App;
